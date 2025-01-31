import React from "react";
import img1 from "../assets/images/img1.png";
import icon1 from "../assets/images/badge.png";
import icon2 from "../assets/images/Error.png";
import icon3 from "../assets/images/Positive Dynamic.png";
import icon4 from "../assets/images/Expensive Price.png";
import icon5 from "../assets/images/Passenger.png";

import { IoCheckmarkSharp } from "react-icons/io5";
import { MdClose } from "react-icons/md";

import Man from "../assets/images/MaskMan.png";
import GoraTheke from "../assets/images/GoraTheke.png";

const HeroSection = () => {
  return (
    <>
      <div className="hero-section">
        <div>
          <h1 className="text-xl text-gray-800 mb-3">
            <span className="font-semibold">Dream</span> ক্যারিয়ারের সূচনা হোক
            এখনই
          </h1>
          <h1 className="text-4xl font-[600] mb-3 hidden lg:block md:block">
            গোড়া থেকে ফ্রিল্যান্সিং শেখার জার্নি <br /> শুরু করুন মাত্র{" "}
            <span className="line-through">১,০০০</span>
            <span className="text-[#ed2b4a]"> ১০০ টাকায়!</span>
          </h1>
          <h1 className="text-4xl font-[600] mb-3 lg:hidden md:hidden block">
            গোড়া থেকে ফ্রিল্যান্সিং শেখার জার্নি <br /> শুরু করুন মাত্র{" "}
            <span className="text-[#ed2b4a]"> ১০০ টাকায়!</span>
          </h1>
          <h4 className="hidden lg:block md:block ">
            নিজের ভিত মজবুত করে নিজেকে রেডি করুন{" "}
            <span className="font-semibold">ফিউচার-রেডি</span> ফ্রিল্যান্সার
            হিসাবে এবং <br /> ক্লায়েন্ট আনুন দ্রুত গতিতে।
          </h4>
          <div className="flex justify-center">
            <div className="lg:w-2/5 md:w-2/5 w-full m-5">
              <img src={img1} alt="" className="w-full" />
            </div>
          </div>
          <h4 className="block lg:hidden md:hidden mb-3">
            নিজের ভিত মজবুত করে নিজেকে রেডি করুন{" "}
            <span className="font-semibold">ফিউচার-রেডি</span> ফ্রিল্যান্সার
            হিসাবে এবং <br /> ক্লায়েন্ট আনুন দ্রুত গতিতে।
          </h4>
          <div className="flex gap-3 justify-center">
            <button className="text-xs font-semibold border border-gray-500 hover:bg-[#ed2b4a] text-gray-700 hover:border-white hover:text-white px-5 py-2 rounded-b-md rounded-tl-md cursor-pointer">
              কোর্স মডিউল দেখুন
            </button>
            <button className="text-xs font-semibold border border-[#ed2b4a] bg-[#ed2b4a]  text-white px-5 py-2 rounded-b-md rounded-tl-md cursor-pointer hover:bg-transparent hover:text-gray-700 hover:border-gray-500">
              এখনই এনরোল করুন 
            </button>
          </div>
        </div>
      </div>
      <div className="lg:bg-[#f5f6f7] md:bg-[#f5f6f7] h-auto w-full  py-5 ">
        <div className="my-5 flex justify-center">
          <h1 className="text-2xl font-[600] text-center">
            ফ্রিল্যান্সিং-এর ফান্ডামেন্টাল না জানলে{" "}
            <span className="text-[#ed2b4a]">সমস্যা</span> কোথায়?
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <div className="p-5 border border-red-300 rounded-lg lg:w-1/2 md:w-1/2 w-full m-1 lg:m-0 md:m-0 bg-white shadow-lg">
            <div className="grid grid-cols-3 text-center border-b border-gray-300 p-2 mb-2 text-sm">
              <p className="text-gray-400 text-start">বিষয়</p>
              <p className="text-green-600 font-semibold">জানা থাকলে</p>
              <p className="text-[#ed2b4a] font-semibold text-end">
                না জানা থাকলে 
              </p>
            </div>

            <div className="text-sm grid grid-cols-3 text-center mb-2">
              <p className="flex items-center gap-2 text-gray-800 justify-start">
                <span>
                  <img src={icon1} alt="" className="w-5" />
                </span>{" "}
                ফ্রিল্যান্সিং সাকসেস রেট
              </p>
              <p className="flex items-center  gap-1 justify-center -ms-8">
                ৯৯%{" "}
                <span>
                  <IoCheckmarkSharp />
                </span>
              </p>
              <p className="flex items-center text-[#ed2b4a] gap-1 justify-center ms-6">
                ৫০% <MdClose />
              </p>
            </div>
            <div className="text-sm grid grid-cols-3 text-center mb-2">
              <p className="flex items-center gap-2 text-gray-800 justify-start">
                <span>
                  <img src={icon2} alt="" className="w-4" />
                </span>{" "}
                ভুল পথে যাওয়ার সম্ভাবনা
              </p>
              <p className="flex items-center  gap-1 justify-center -ms-10">
                নেই{" "}
                <span>
                  <IoCheckmarkSharp />
                </span>
              </p>
              <p className="flex items-center text-[#ed2b4a] gap-1 justify-center ms-7">
                আছে <MdClose />
              </p>
            </div>
            <div className="text-sm grid grid-cols-3 text-center mb-2">
              <p className="flex items-center gap-2 text-gray-800 justify-start">
                <span>
                  <img src={icon3} alt="" className="w-4" />
                </span>{" "}
                ক্যারিয়ার গ্রোথ হবে
              </p>
              <p className="flex items-center  gap-1 justify-center -ms-2">
                তাড়াতাড়ি{" "}
                <span>
                  <IoCheckmarkSharp />
                </span>
              </p>
              <p className="flex items-center text-[#ed2b4a] gap-1 justify-center ms-[4.2rem]">
                আস্তে আস্তে <MdClose />
              </p>
            </div>
            <div className="text-sm grid grid-cols-3 text-center mb-2">
              <p className="flex items-center gap-2 text-gray-800 justify-start">
                <span>
                  <img src={icon4} alt="" className="w-4" />
                </span>{" "}
                হাই ইনকাম অপর্চুনিটি
              </p>
              <p className="flex items-center  gap-1 justify-center -ms-9">
                বেশি{" "}
                <span>
                  <IoCheckmarkSharp />
                </span>
              </p>
              <p className="flex items-center text-[#ed2b4a] gap-1 justify-center ms-5">
                কম <MdClose />
              </p>
            </div>
            <div className="text-sm grid grid-cols-3 text-center mb-2">
              <p className="flex items-center gap-2 text-gray-800 justify-start">
                <span>
                  <img src={icon5} alt="" className="w-4" />
                </span>{" "}
                ক্লায়েন্ট অ্যাকুইজেশন
              </p>
              <p className="flex items-center  gap-1 justify-center -ms-8">
                সহজ{" "}
                <span>
                  <IoCheckmarkSharp />
                </span>
              </p>
              <p className="flex items-center text-[#ed2b4a] gap-1 justify-center ms-7">
                কঠিন <MdClose />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full  pt-5 pb-10 md:bg-gradient-to-l lg:bg-gradient-to-l from-[#fffcfc] to-[#fff4f4]">
        <div className="flex justify-center">
          <div className="lg:w-32 md:w-32 w-60">
            <img src={Man} alt="" />
          </div>
        </div>
        <h1 className="text-center my-2 font-[600] text-gray-800">
          ভাবছেন সবই তো বুঝলাম,
        </h1>
        <div className="flex justify-center">
          <h1 className="bg-gradient-to-r from-[#ff9900] via-[#ffb545] to-[#ffffff] p-1 inline-block  font-semibold text-xl text-center">
            কিন্তু শুরুটা কোথা থেকে করবো?
          </h1>
        </div>
        <div className="flex justify-center py-2">
          {" "}
          <p className="text-center w-1/2">
            একদম শুরু থেকে আপনি কিভাবে স্টেপ বাই স্টেপ প্রসেসে ফ্রিল্যান্সিং
            ক্যারিয়ার স্টার্ট করতে পারবেন তার জন্যে আমি লঞ্চ করেছি একটা সুপার
            ইফেক্টিভ কোর্স।
          </p>
        </div>
        <div className="flex justify-center">
          <p className="bg-gradient-to-r from-[#182fff] to-[#c52bc8] bg-clip-text text-transparent text-3xl font-bold">
            Introducing
          </p>
        </div>
        <div className="flex justify-center ">
          <div className="w-2/5">
            <img src={GoraTheke} alt="" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 lg:gap-20 md:gap-20 gap-5 text-center py-5 px-5 mx-5">
            <div>
              <div className="h-24 w-40 p-5 text-2xl font-semibold flex justify-center items-center bg-white rounded-lg shadow-xl">
                ৪ ঘন্টা
              </div>
              <p className="text-gray-700 font-[500] py-3 text-center">
                কোর্স ডিউরেশন
              </p>
            </div>
            <div>
              <div className="h-24 w-40 p-5 text-2xl font-semibold flex justify-center items-center bg-white rounded-lg shadow-xl">
                ২৬টি
              </div>
              <p className="text-gray-700 font-[500] py-3 text-center">
                ভিডিও লেসন
              </p>
            </div>
            <div>
              <div className="h-24 w-40 p-5 text-2xl font-semibold flex justify-center items-center bg-white rounded-lg shadow-xl">
                ৬টি
              </div>
              <p className="text-gray-700 font-[500] py-3 text-center">
                কোর্স  মডিউল
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <div className="flex justify-center lg:w-1/2 md:w-1/2">
            <p className="text-center text-xl text-gray-800 font-semibold">
              সহজ এবং অ্যাকশনেবল স্টেপে{" "}
              <span className="text-green-600">
                ফ্রিল্যান্সিং-এর ফান্ডামেন্টাল
              </span>{" "}
              শেখার সেরা <span className="text-blue-500">গাইডলাইন</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center my-2">
          <div className="flex justify-center lg:w-1/2 md:w-1/2">
            <p className="text-center text-sm text-gray-800 font-[500] leading-7">
              আপনি কিভাবে ফ্রিল্যান্সিং করবেন, কোন বেসিক জিনিসগুলো শুরুতে আপনাকে
              জানতেই হবে এবং একটা সাকসেসফুল ফ্রিল্যান্সিং জার্নি কেমন হয় তার
              সবকিছুই দেখানো হয়েছে লাইফ-চেঞ্জিং কোর্সে।
            </p>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="text-xs font-semibold border border-[#ed2b4a] bg-[#ed2b4a]  text-white px-5 py-2 rounded-b-md rounded-tl-md cursor-pointer hover:bg-transparent hover:text-gray-700 hover:border-gray-500">
            কোর্সে এনরোল করুন
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
