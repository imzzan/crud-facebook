import React from "react";
import {
  BsPersonCircle,
  BsFillCameraVideoFill,
  BsEmojiSmile,
} from "react-icons/bs";
import { AiOutlinePicture } from "react-icons/ai";
import { Link } from "react-router-dom";

const ModalInput = () => {
  return (
    <>
      <Link to="/addpost">
        <div className=" shadow-card mt-10 p-4 w-full rounded-[15px] cursor-pointer">
          <div className="flex gap-2">
            <p>
              <BsPersonCircle className="text-[40px] " />
            </p>
            <input
              type="text"
              name="text"
              id="text"
              className="w-full bg-gray rounded-[50px] px-3"
              placeholder="What's On Your Mind ? Muzani"
            />
          </div>
          <hr className="my-6 bg-gray" />
          <div className="flex justify-between">
            <p className="flex items-center text-[15px] gap-2 text-secondary font-[600]">
              <BsFillCameraVideoFill className="text-[24px] text-red-600" />{" "}
              Live Video
            </p>
            <p className="flex items-center text-[15px] gap-2 text-secondary font-[600]">
              <AiOutlinePicture className="text-[24px] text-green-600" /> Photo
              / Video
            </p>
            <p className="flex items-center text-[15px] gap-2 text-secondary font-[600]">
              <BsEmojiSmile className="text-[24px] text-yellow-600" /> Feeling /
              Activity
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ModalInput;
