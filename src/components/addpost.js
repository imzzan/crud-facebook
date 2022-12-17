import React, { useState } from "react";
import {
  BsPersonCircle,
  BsXCircleFill,
  BsFillPeopleFill,
  BsFillCaretDownFill,
} from "react-icons/bs";
import { createPost } from "../redux/PostSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const AddPost = () => {
  const [creator, setCreator] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createPost({ body, image, creator }));

    if (createPost) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Data Berhasil di Tambahkan",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    navigate("/");

    setCreator("");
    setBody("");
    setImage("");
  };

  return (
    <>
      <div
        className="shadow-card my-10 p-4 w-[468px] mx-auto rounded-[15px]"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <p className=" invisible">kassa</p>
          <h1 className="text-[20px] leading-[24px] font-bold">Create Post</h1>
          <Link to="/">
            <BsXCircleFill className="text-[30px] cursor-pointer hover:scale-110 transition-all" />
          </Link>
        </div>
        <hr className=" bg-gray my-6" />
        <div className="flex items-center gap-4">
          <BsPersonCircle className="text-[40px] " />
          <div>
            <p className="font-[600] p-1 text-[15px] text-[#050505] leading-[20px] mb-1">
              Muzani
            </p>
            <p className="flex items-center bg-gray p-2 rounded-[10px] gap-1 text-[13px]">
              <BsFillPeopleFill /> Friends <BsFillCaretDownFill />
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            name="post"
            cols="30"
            rows="7"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-[100%]  outline-none border-none mt-4"
            placeholder="What's On Your Mind ?"
          ></textarea>
          <input
            type="text"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            name="creator"
            className="w-full my-3 outline-none border border-secondary rounded-[10px] p-2"
            placeholder="Nama Anda"
          />
          <img
            src={image}
            alt="post"
            className="p-4 border-2 border-secondary rounded-[15px] h-auto w-[100%]"
          />
          <div className="flex justify-between mt-4 p-2 border border-gray">
            <p className="w-[50%] font-[600] text-[15px] leading-[16px]">
              Add to Your Post
            </p>
            <input
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              name="image"
              className="w-[50%] cursor-pointer"
            />
          </div>
          <button className="bg-primary text-white w-full mt-2 py-1 rounded-md">
            Post
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPost;
