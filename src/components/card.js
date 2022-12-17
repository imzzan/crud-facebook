import React, { useEffect } from "react";
import {
  BsPersonCircle,
  BsThreeDots,
  BsHandThumbsUpFill,
  BsFillSuitHeartFill,
  BsFillShareFill,
} from "react-icons/bs";
import { FaGlobeAsia } from "react-icons/fa";
import { BiComment, BiSend } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { postSelector, getPost } from "../redux/PostSlice";
import moment from "moment";

const Card = () => {
  const dispatch = useDispatch();
  const post = useSelector(postSelector.selectAll);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  return (
    <>
      {post.map((item) => {
        return (
          <div key={item._id} className="mt-8 shadow-card p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <BsPersonCircle className="text-[40px]" />
                <div>
                  <p className="text-[15px] font-[600] text-secondary leading-[20px]">
                    {item.creator}
                  </p>
                  <p className="flex items-center text-[12px] leading-[16px] gap-1 text-[#1c1e21]">
                    {moment(item.createdAt).fromNow()}<FaGlobeAsia />
                  </p>
                </div>
              </div>
              <BsThreeDots className="text-[20px] text-secondary cursor-pointer" />
            </div>
            <p className="my-3 text-[15px] leading-[20px] text-secondary">
              {item.body}
            </p>
            <img src={`https://rose-combative-sheep.cyclic.app/${item.image}`} alt="post" />
            <div className=" my-3 flex justify-between">
              <p className="flex text-secondary items-center text-[15px] gap-1">
                <BsHandThumbsUpFill className="text-[18px] text-primary" />{" "}
                <BsFillSuitHeartFill className="text-[18px] text-red-600" /> 15
                Likes
              </p>
              <p className=" text-secondary text-[15px]">3 Comments</p>
            </div>
            <div className="flex justify-around border-y-2 border-secondary py-2">
              <button className="flex items-center gap-1  text-[#65676B] font-bold">
                <BsHandThumbsUpFill className="text-[18px]" /> Like
              </button>
              <button className="flex items-center gap-1  text-[#65676B] font-bold">
                <BiComment className="text-[18px]" /> Comment
              </button>
              <button className="flex items-center gap-1  text-[#65676B] font-bold">
                <BsFillShareFill className="text-[18px]" /> Share
              </button>
            </div>

            <div className="mt-4">
              <p className="text-[15px] leading-[20px] text-[#65676B] font-bold mb-3">
                View Comment
              </p>
              <p className="text-[13px] text-[#050505] flex items-center font-[600] gap-2">
                <BsPersonCircle className="text-[30px]" /> Netizen
              </p>
              <p className="mt-3 text-[15px] text-secondary">
                {
                  item.comment
                }
              </p>
            </div>

            <div className="flex items-center gap-2 mt-4">
              <BsPersonCircle className="text-[30px]" />
              <input
                type="text"
                name="comment"
                id="comment"
                className="flex-1 text-[14px] outline-none border-none bg-gray"
                placeholder="Write a comment"
              />
              <button className="">
                <BiSend className="text-[20px]" />
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
