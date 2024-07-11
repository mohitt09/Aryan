import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogUpload = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [toggleBlogId, setToggleBlogId] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs`);
        // Filter only active blogs
        const activeBlogs = response.data.filter(
          (blogPost) => blogPost.isActive
        );
        // Sort the active blogs by 'createdAt' in descending order
        const sortedBlogs = activeBlogs.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogPosts(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/blogs`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setIsFormVisible(false); // Hide the form after successful submission

      // Append the new blog post to the blogPosts state array
      setBlogPosts([...blogPosts, response.data]);
    } catch (error) {
      console.error("Error uploading blog post:", error);
      alert("Failed to upload blog post");
    }
  };

  const handleToggleActiveStatus = async (blogId) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}/toggle-active`
      );
      console.log(response.data);
      alert("Blog's active status has been successfully toggled");

      // Update the state to reflect the change
      setBlogPosts(
        blogPosts.map((blogPost) =>
          blogPost._id === blogId
            ? { ...blogPost, isActive: !blogPost.isActive }
            : blogPost
        )
      );

      // If the blog post is now inactive, remove it from the state
      if (!response.data.isActive) {
        setBlogPosts(blogPosts.filter((blogPost) => blogPost._id !== blogId));
      }
    } catch (error) {
      console.error("Error toggling blog's active status:", error);
      alert("Failed to toggle blog's active status");
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={toggleFormVisibility}
      >
        Upload Blog Post
      </button>
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"
          >
            {/* Close Button */}
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsFormVisible(false)}
            >
              &times;
            </button>
            {/* Form Content */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="detail"
              >
                Detail:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="detail"
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="image"
              >
                Image:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="file"
                id="image"
                onChange={handleImageChange}
                required
              />
            </div>
            {preview && (
              <img
                className="w-full h-auto mb-4"
                src={preview}
                alt="Selected"
              />
            )}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Upload
            </button>
          </form>
        </div>
      )}
      <div className="mt-8">
        {blogPosts.map((blogPost, index) => (
          <div
            key={index}
            className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4"
          >
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={`${process.env.REACT_APP_BACKEND_URL}/${blogPost.image.replace(
                    /\\/g,
                    "/"
                  )}`}
                  alt="Blog Post"
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                  {blogPost.title}
                </div>
                <p className="mt-2 text-gray-500">{blogPost.detail}</p>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                  onClick={() => handleToggleActiveStatus(blogPost._id)}
                >
                  Toggle Active Status
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogUpload;
