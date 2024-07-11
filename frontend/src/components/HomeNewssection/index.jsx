import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Img, Text } from "components";
import { BsHeartFill, BsEye } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import style from "./New.module.css";

const HomeNewssection = (props) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [sliderState, setSliderState] = useState(0);
  const [blogsPerPage, setBlogsPerPage] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs`
        );
        const allBlogs = response.data.filter((blog) => blog.isActive);
        const latestBlogs = allBlogs
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 9);
        setBlogs(latestBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const updateBlogsPerPage = () => {
      if (window.innerWidth < 525) {
        setBlogsPerPage(1);
      } else if (window.innerWidth < 768) {
        setBlogsPerPage(2);
      }  else if (window.innerWidth < 1024) {
        setBlogsPerPage(3);
      } else {
        setBlogsPerPage(3);
      }
    };

    updateBlogsPerPage();
    window.addEventListener("resize", updateBlogsPerPage);

    return () => {
      window.removeEventListener("resize", updateBlogsPerPage);
    };
  }, []);

  const handlePrevClick = () => {
    const newIndex = sliderState === 0 ? blogs.length - 1 : sliderState - 1;
    setSliderState(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (sliderState + 1) % blogs.length;
    setSliderState(newIndex);
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const handleBlogClick = async (blogId) => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}/view`);
      navigate("/Blog", { state: { blogId: blogId } });
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  };

  const getVisibleBlogs = () => {
    const visibleBlogs = [];
    const startIndex = sliderState;
    let currentIndex = startIndex;
    let count = 0;

    while (count < blogsPerPage && count < blogs.length) {
      const currentBlog = blogs[currentIndex % blogs.length];
      if (currentBlog) {
        visibleBlogs.push(currentBlog);
        count++;
      }
      currentIndex++;
    }

    return visibleBlogs;
  };

  return (
    <div className={props.className}>
      <div className="flex flex-col items-center justify-start w-[81%] md:w-full">
        <div className="flex flex-col gap-[5px] items-center justify-start">
          <Text
            className="text-blue-500 text-center text-lg tracking-[2.88px] uppercase"
            size="txtWorkSansBold18"
            style={{ fontFamily: "'Raleway', sans-serif" }}
          >
            {props?.betterinformatiOne}
          </Text>
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-center text-indigo-900"
            size="txtYesevaOneRegular32"
            style={{ fontFamily: "'Habibi', serif", color: '#3e3e3e' }}
          >
            {props?.newsOne}
          </Text>
          <div className={style.line}></div>
        </div>
        <div className="flex items-center justify-between w-full mt-4 relative">
          <button
            onClick={handlePrevClick}
            className="text-lg font-bold absolute left-0 z-10"
            style={{ color: 'white', background: '#7878ffab', border: 'none', cursor: 'pointer', padding: '1em' }}
          >
            <IoIosArrowBack size={24} />
          </button>
          <div className="flex overflow-hidden w-full">
            {getVisibleBlogs().map((blog) => (
              <div key={blog._id} onClick={() => handleBlogClick(blog._id)} style={{ width: "100%" }}>
                <div className={style.blog}>
                  <div className={style.css}>
                    <div>
                      <Text className={style.font3} size="txtWorkSansRegular14Blue500">
                        {new Date(blog.date).getDate()}
                      </Text>
                      <hr className="my-2 border-gray-300" />
                    </div>
                    <div>
                      <Text className={style.font} size="txtWorkSansRegular14Blue500">
                        {monthNames[new Date(blog.date).getMonth()]}
                      </Text>
                      <hr className="my-2 border-gray-300" />
                    </div>
                    <div>
                      <Text className={style.font3} size="txtWorkSansRegular14Blue500">
                        {new Date(blog.date).getFullYear()}
                      </Text>
                      <hr className="my-2 border-gray-300" />
                    </div>
                    <div>
                      <div className={style.icons}>
                        <BsEye color="black" size={20} />
                        <span className="view-count">{blog.viewCount}</span>
                      </div>
                      <hr className="my-2 border-gray-300" />
                    </div>
                    <div className={style.icons}>
                      <BsHeartFill color="red" size={20} />
                      <span className="like-count">{blog.likeCount}</span>
                    </div>
                  </div>
                  <Img
                    className={style.blogimg}
                    src={`${process.env.REACT_APP_BACKEND_URL}/${blog.image.replace(/\\/g, "/")}`}
                    alt="Blog Image"
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Text className={style.font2} size="txtWorkSansRegular18Gray900" style={{ fontFamily: "'Habibi', serif" }}>
                    {blog.title}
                  </Text>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleNextClick}
            className="text-lg font-bold absolute right-0 z-10"
            style={{ color: 'white', background: '#7878ffab', border: 'none', cursor: 'pointer', padding: '1em' }}
          >
            <IoIosArrowForward size={24} />
          </button>
        </div>
        <div className="flex justify-center mt-8">
          {Array.from({ length: blogs.length }).map((_, index) => (
            <div
              key={index}
              className={`inline-block cursor-pointer rounded-full h-[18px] w-[18px] mx-1 ${sliderState === index ? 'bg-indigo-900' : 'bg-blue-100'}`}
              onClick={() => setSliderState(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

HomeNewssection.defaultProps = {
  betterinformatiOne: "Better information, Better health",
  newsOne: "Blogs",
};

export default HomeNewssection;
