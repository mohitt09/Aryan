import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Img, Text } from "components";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/NewsArticle.module.css";

const NewsArticle = (props) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs`
        );
        const activeBlogs = response.data.filter((blog) => blog.isActive);
        setBlogs(activeBlogs);
        console.log(activeBlogs[0]._id);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  // Get current blogs
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleBlogClick = async (blogId) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}/view`
      );
      navigate("/Blog", { state: { blogId: blogId } });
    } catch (error) {
      console.error("Error incrementing view count:", error);
    }
  };

  return (
    <>
      {currentBlogs.map((blog, index) => (
        <div key={index} className={props.className}>
          <Img
            className="h-[400px] sm:h-auto object-cover w-full"
            alt="Blog Image"
            src={`${process.env.REACT_APP_BACKEND_URL}/${blog.image.replace(
              /\\/g,
              "/"
            )}`}
          />

          <div
            style={{ flexDirection: "row" }}
            className="flex  sm:flex-col sm:gap-5 items-start justify-start mt-[25px] w-[77%] md:w-full"
          >
            <div className="flex flex-row gap-2 items-start justify-start w-[49%] sm:w-full">
              <Img
                className="h-[17px] w-4"
                src="images/img_calendar.svg"
                alt="calendar"
              />
              <Text
                className="text-base text-black-900"
                size="txtWorkSansRegular16Black900"
              >
                {new Date(blog.date).toLocaleDateString()}
              </Text>
            </div>

            <div className="flex flex-row gap-2 items-start justify-center sm:ml-[0] ml-[25px] w-1/5 sm:w-full">
              <Img
                className="h-[18px]"
                src="images/img_lock_blue_500.svg"
                alt="lock"
              />
              <div className="flex items-center gap-2">
                <Text
                  className="text-base text-black-900"
                  size="txtWorkSansRegular16Black900"
                >
                  By
                </Text>
                <Text
                  className="whitespace-nowrap text-base text-black-900"
                  size="txtWorkSansRegular16Black900"
                >
                  {blog.authorName}
                </Text>
              </div>
            </div>
          </div>

          <Text
            className="mt-[11px] md:text-3xl sm:text-[28px] text-[2.5vw] text-indigo-900"
            size="txtYesevaOneRegular32"
            style={{ fontFamily: "'Raleway', sans-serif", color: '#3e3e3e' }}
          >
            {blog.title}
          </Text>
          
          <Text
            className={`${styles.lineClamp2} text-base text-gray-900 w-full`}
            size="txtWorkSansRegular16"
            dangerouslySetInnerHTML={{ __html: blog.detail }}
          />

          <Button
            className="hover:text-white-A70 p-5px cursor-pointer flex items-center justify-center min-w-[154px] mt-[22px]"
            shape="round"
            color="blue_100"
            size="xs"
            variant="fill"
            onClick={() => handleBlogClick(blog._id)}
          >
            <div className="font-medium p-3 font-worksans leading-[normal] text-base text-left text-white transition-colors duration-200">
              Read More
            </div>
          </Button>
          
        </div>
      ))}

      <div className="flex justify-between">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        {/* Numbered Pagination */}
        <div className="flex gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => paginate(page)}
              className={`${styles.pageButton} ${
                currentPage === page ? styles.activePageButton : ""
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default NewsArticle;
