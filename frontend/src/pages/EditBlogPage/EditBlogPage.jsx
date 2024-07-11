import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./EditBlogPage.module.css"; // Import the CSS file
import editblog from "../../data/images/editblog.webp";

const EditBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    const fetchBlogDetails = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}`
        );
        const { title, detail, authorName, image } = response.data;
        setTitle(title);
        setDetail(detail);
        setAuthorName(authorName);
        setPreview(image);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };

    fetchBlogDetails();
  }, [blogId]);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setErrorMessage("Please select an image file.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("detail", detail);
    formData.append("authorName", authorName);
    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/api/blogs/${blogId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate("/upload-blog");
    } catch (error) {
      console.error("Error updating blog post:", error);
    }
  };

  return (
    <div
      className={`${styles.editBlogPage} flex flex-col items-center justify-center min-h-screen`}
      style={{ backgroundColor: "cream" }}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-4xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative ${styles.form}`}
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "2rem",
          border: "4px solid #fff", // Add thick border
        }}
      >
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
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
            className="block text-white text-sm font-bold mb-2"
            htmlFor="detail"
          >
            Detail:
          </label>
          <ReactQuill
            theme="snow"
            placeholder="Compose an epic..."
            value={detail}
            onChange={(content) => setDetail(content)}
            modules={{
              toolbar: toolbarOptions, // Pass the toolbar options here
            }}
            style={{ height: "400px", overflowY: "auto" }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="file"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-white text-sm font-bold mb-2"
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
          <img
            className="w-full h-auto mb-4"
            src={`${process.env.REACT_APP_BACKEND_URL}/${preview.replace(
              /\\/g,
              "/"
            )}`}
            alt="Selected"
          />
        )}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditBlogPage;
