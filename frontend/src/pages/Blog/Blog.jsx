import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Img, Text } from "components";
import Header from "components/Header";
import Navbar from "../../components/Navbar";
import AboutUsSubhead from "components/AboutUsSubhead";
import HomeColumnFourteen from "components/HomeColumnFourteen";
import Footer from "components/Footer";
import { BsHeart, BsHeartFill, BsEye } from "react-icons/bs";
import { Style } from "@mui/icons-material";
import style from './Blog.module.css'

const Blog = () => {



  const location = useLocation();
  const { blogId } = location?.state;
  const [blog, setBlog] = useState(null);
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [viewCount, setViewCount] = useState(0); // Added state for view count
  const likedStatus = localStorage.getItem(`liked_${blogId}`);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      if (blogId) {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}`
          );
          const data = response.data;
          setBlog(data);
          setLikeCount(data.likeCount);
          setViewCount(data.viewCount); // Set view count
          if (likedStatus === "true") {
            setLiked(true);
          } else if (likedStatus === "false") {
            setLiked(false);
          }
        } catch (error) {
          console.error("Error fetching blog details:", error);
        }
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  const toggleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(likeCount + 1);
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}/like`)
        .then(() => {
          localStorage.setItem(`liked_${blogId}`, true);
        })
        .catch((error) => {
          console.error("Error liking the blog:", error);
        });
    } else {
      setLiked(false);
      setLikeCount(likeCount - 1);
      axios
        .post(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}/unlike`
        )
        .then(() => {
          localStorage.removeItem(`liked_${blogId}`);
        })
        .catch((error) => {
          console.error("Error unliking the blog:", error);
        });
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <AboutUsSubhead
        className="h-[250px] md:px-5 relative w-full "
        userimage="images/img_rectangle3_250x1366.png"
        homeabouttext="Blogs / Blog "
        aboutustext="Blog"
      />
      <div className="flex flex-col  w-[90%] m-auto gap-5 mt-[20px]">
        <Img
          className="w-[65%]  sm:w-[100%]  ml-[18%] sm:ml-[1%]"
          alt="Blog Image"
          src={`${process.env.REACT_APP_BACKEND_URL}/${blog.image.replace(
            /\\/g,
            "/"
          )}`}
        />
        <div
          // style={{ flexDirection: "row" }}
          className="flex sm:flex-col sm:gap-5 items-start justify-center sm:justify-center mt-5 sm:mt-0 w-77 md:w-full"
        >

          <section className={style.links}>

            <div className={style.childone}>

              <div className={style.subchildone}>

                <img className="h-[17px] w-4" src="images/img_calendar.svg" alt="calendar" />

                <Text className="text-base text-black-900" size="txtWorkSansRegular16Black900">
                  {new Date(blog.date).toLocaleDateString()}
                </Text>

              </div>

              <div className={style.subchildtwo}>

                <BsEye className="icon" />

                <Text
                  className="text-base text-black-900"
                  size="txtWorkSansRegular16Black900"
                >
                  Views:
                </Text>

                <Text
                  className="whitespace-nowrap text-base text-black-900"
                  size="txtWorkSansRegular16Black900"
                >
                  {viewCount}
                </Text>

              </div>

            </div>


            <div className={style.childTwo}>

              <div className={style.subchildone}>

                <div className={style.heart} onClick={toggleLike} >
                  {liked ? (
                    <BsHeartFill color="red" size={20} />
                  ) : (
                    <BsHeart color="red" size={20} />
                  )}
                </div>

                <div className={style.amount}>{likeCount}</div>

              </div>


              <div className={style.subchildtwo}>

                <Text
                  className="text-base text-black-900"
                  size="txtWorkSansRegular16Black900"
                >
                  By
                </Text>

                <Text
                  className={` ${style.auther} whitespace-nowrap text-base text-black-900`}
                  size="txtWorkSansRegular16Black900"
                >
                  {blog.authorName}
                </Text>

              </div>

            </div>

          </section>


         
        </div>


        <Text
          className={` ${style.title} mt-[11px] md:text-3xl justify-center flex sm:text-[28px] text-[32px] text-indigo-900`}
          size="txtYesevaOneRegular32"
          style={{ fontFamily: "'Raleway', sans-serif", color: '#3e3e3e' }}
        >
          {blog.title}
        </Text>

        <div
          className={`Text ${style.Text} text-base sm:ml-[0%] lg:ml-[0%] text-justify text-gray-900 w-full`}
          size="txtWorkSansRegular16"
          style={{ fontFamily: "'Habibi', serif", color: "#8997a7" }}
        >
          <div dangerouslySetInnerHTML={{ __html: blog.detail }} /> {/* Keep the content as-is */}
        </div>


        <HomeColumnFourteen className="flex flex-col font-worksans md:gap-10 gap-16 items-center justify-start max-w-[992px] mt-16 mx-auto md:px-5 w-full" />
      </div>
      <Footer className="bg-indigo-900 flex font-worksans items-center justify-center mt-16 md:px-5 w-full" />
    </div>
  );
};

export default Blog;
