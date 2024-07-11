import React, { useState, useEffect } from "react";
import axios from "axios";
import { Img, List, Text } from "components";
import { useNavigate } from "react-router-dom";

const NewsColumnrecentposts = (props) => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // Include the isActive query parameter in the API call
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs/filter`,
          {
            params: {
              isActive: true, // This will be converted to a query parameter in the request
            },
          }
        );
        setBlogs(response.data); // Assuming the API returns an array of blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const startIndex = Math.max(blogs.length - 6, 0);

  // Get the latest 6 blogs from the end of the array
  const latestBlogs = blogs.slice(startIndex).reverse();

  return (
    <>
      <div className={props.className}>
        <Text
          className="md:text-3xl sm:text-[28px] text-[28px] text-indigo-900"
          size="txtYesevaOneRegular32"
          style={{ fontFamily: "'Raleway', sans-serif",color:'#3e3e3e'}}
        >
          Explore Blogs
        </Text>
        <List
          className="flex flex-col gap-2 items-center w-full"
          orientation="vertical"
        >
          {latestBlogs.map((blog, index) => (
            <div
              key={index}
              className="flex aspect-w-3 aspect-h-2 flex-1 flex-row gap-2.5 items-center justify-between w-full cursor-pointer"
              
              onClick={() => navigate("/Blog", { state: { blogId: blog._id } })}
            >
              
              <Img
                className="h-[60px] md:h-auto aspect-w-3 aspect-h-2 object-contain rounded-[5px] w-[60px]"
                src={`${process.env.REACT_APP_BACKEND_URL}/${blog.image.replace(
                  /\\/g,
                  "/"
                )}`} 
                alt="Blog Image"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="flex justify-end text-blue-500 text-xs w-full"
                  size="txtWorkSansRegular12"
                >
                  {new Date(blog.date).toLocaleDateString()}
                </Text>
                <Text
                  className="mt-[3px] flex justify-end text-gray-900 text-sm w-full"
                  size="txtWorkSansMedium14"
                  style={{ fontFamily: "'Habibi', serif", color:'#8997a7'}}
                >
                  {blog.title}
                </Text>
              </div>
            </div>
          ))}
        </List>
      </div>
    </>
  );
};

export default NewsColumnrecentposts;
