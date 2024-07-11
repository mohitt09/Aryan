import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardHeader from "components/DashboardHeader/DashboardHeader";
import DashboardSidebar from "components/DashboardSidebar/DashboardSidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import { useNavigate } from "react-router-dom";
import style from "./Blog.module.css";

const BlogUpload = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [blogPosts, setBlogPosts] = useState([]);
  const [toggleBlogId, setToggleBlogId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const navigate = useNavigate();

  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"], // toggled buttons
    ["blockquote", "code-block"],
    ["link", "image", "video", "formula"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction

    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],

    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }],

    ["clean"], // remove formatting button
  ];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs`
        );
       
        const sortedBlogs = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogPosts(sortedBlogs);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [blogPosts]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
      console.log("Image file selected:", e.target.files[0]); // Add this line
    } else {
      setErrorMessage("Please select an image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error messages

    if (!title || !detail || !image || !authorName) {
      setErrorMessage("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("image", image);
    formData.append("authorName", authorName);

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
      setIsFormVisible(false);
      setBlogPosts([...blogPosts, response.data]);

      // Reset form fields and image preview
      setTitle("");
      setDetail("");
      setImage(null);
      setPreview("");
      setAuthorName("");

      toast.success("New Blog has been successfully added", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (error) {
      console.error("Error uploading blog post:", error);
      if (error.response && error.response.data && error.response.data.errors) {
        // Extract error messages from the server response
        const errorMessages = error.response.data.errors
          .map((err) => err.msg)
          .join(", ");
        setErrorMessage(errorMessages);
        toast.error(errorMessages, {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setErrorMessage("Failed to upload blog post. Please try again.");
        toast.error("Failed to upload blog post. Please try again.", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  const handleToggleActiveStatus = async (blogId) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}/toggle-active`
      );
      console.log(response.data);
      toast.success("Blog's active status has been successfully toggled");

      setBlogPosts((prevBlogPosts) =>
        prevBlogPosts.map((blogPost) =>
          blogPost._id === blogId
            ? { ...blogPost, isActive: response.data.isActive }
            : blogPost
        )
      );
    } catch (error) {
      toast.error("Failed to toggle blog's active status");
    }
  };

  const handleEdit = (blogId) => {
    console.log(blogId);
    navigate(`/edit-blog/${blogId}`);
  };

  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <div
        className={`flex ${style.blog} flex-col items-center justify-center min-h-screen bg-gray-100`}
      >
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-4xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "2rem",
          }}
        >
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
            <ReactQuill
              theme="snow"
              placeholder="Compose an epic..."
              value={detail}
              onChange={(content, delta, source, editor) => {
                setDetail(content);
              }}
              modules={{
                toolbar: toolbarOptions, // Pass the toolbar options here
              }}
              style={{ height: "400px", overflowY: "auto" }}
            />
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="authorName"
            >
              Author Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="authorName"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              required
            />
          </div>
          {preview && (
            <img className="w-full h-auto mb-4" src={preview} alt="Selected" />
          )}
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </form>
        <div
          className="mt-8 grid grid-cols-2 md:grid-cols-1 gap-x-20 w-30"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          {blogPosts.map((blogPost, index) => (
            <div
              key={index}
              className="max-w-md bg-white rounded-xl shadow-md overflow-hidden mb-4"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full object-cover md:w-48"
                    src={`${
                      process.env.REACT_APP_BACKEND_URL
                    }/${blogPost.image.replace(/\\/g, "/")}`}
                    alt="Blog Post"
                  />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    {blogPost.title}
                  </div>
                  <p className="mt-2 text-gray-500">
                    Author: {blogPost.authorName}
                  </p>
                  <p className="mt-2 text-gray-500">
                    Date: {new Date(blogPost.date).toLocaleDateString()}
                  </p>
                  <p className="mt-2 text-gray-500">
                    Time: {new Date(blogPost.time).toLocaleTimeString()}
                  </p>
                  <button
                    className={`mt-4 ${
                      blogPost.isActive
                        ? "bg-green-500 hover:bg-green-700"
                        : "bg-red-500 hover:bg-red-700"
                    } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                    onClick={() => handleToggleActiveStatus(blogPost._id)}
                  >
                    {blogPost.isActive ? "Deactivate" : "Activate"}
                  </button>
                  <button
                    className="mt-4 ml-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => handleEdit(blogPost._id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogUpload;
