import { SearchIcon } from "@heroicons/react/outline";
import Trending from "./Trending";
import Image from "next/image";
import { useState } from "react";

function Widgets({ trendingResults, followResults }) {
  const [numResults, setNumResults] = useState(3);
  const [numFollowResults, setNumFollowResults] = useState(3);
  return (
    <div className="hidden lg:inline ml-8 xl:w-[600px] py-1 space-y-5">
      <div className="sticky top-0 bg-white py-1.5  z-50 w-11/12 xl:w-9/12">
        <div className=" flex items-center  p-3 rounded-full relative">
          <SearchIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-gray-100 placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-gray-300 w-full focus:border-blue-500 rounded-full  focus:shadow-lg focus:bg-white"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-gray-700 space-y-3 bg-gray-100  pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>

        {trendingResults.slice(0, numResults).map((result, index) => (
          <Trending key={index} result={result} />
        ))}

        <button
          onClick={() => {
            setNumResults(numResults + 3);
          }}
          className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light"
        >
          Show more
        </button>
      </div>

      <div className=" sticky top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        {followResults.slice(0, numFollowResults).map((result, index) => (
          <div
            className="hover:bg-white hover:bg-gray-200 px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center"
            key={index}
          >
            <img
              src={result.picture.thumbnail}
              width={40}
              height={50}
              objectFit="cover"
              className="rounded-full"
            />
            <div className="ml-4 leading-5 group truncate">
              <h4 className="font-bold group-hover:underline text-[14px] truncate">
                {result.login.username}
              </h4>
              <h5 className="text-gray-500 text-[13px] truncate">
                {result.name.first + " " + result.name.last}
              </h5>
            </div>
            <button className="ml-auto bg-[#1d9bf0] text-white hover:bg-[#1a8cd8] rounded-full font-bold text-sm py-1.5 px-3.5">
              Follow
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            setNumFollowResults(numFollowResults + 3);
          }}
          className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light"
        >
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
