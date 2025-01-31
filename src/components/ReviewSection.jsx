import React from "react";
import rev1 from "../assets/images/review1.png";
import rev2 from "../assets/images/review2.png";
import rev3 from "../assets/images/review3.png";
import rev4 from "../assets/images/review4.png";
import rev5 from "../assets/images/review5.png";
import rev6 from "../assets/images/review6.png";
import rev7 from "../assets/images/review7.png";
import rev8 from "../assets/images/review8.png";
import rev9 from "../assets/images/review9.png";

import Ins4 from "../assets/images/instructor3.png";

import Item1 from "../assets/images/item1.png";
import Item2 from "../assets/images/item2.png";
import Item3 from "../assets/images/item3.png";
import Item4 from "../assets/images/item4.png";

import Cardbox from "../assets/images/cardbox.png";
import video1 from "../assets/images/video1.png";
import video2 from "../assets/images/video2.png";

import offervector from "../assets/images/offervector.png";
import cursor from "../assets/images/click curser.png";
import Goratheke from "../assets/images/GoraTheke.png";

const ReviewSection = () => {
  return (
    <>
      <div className="flex justify-center items-center my-10 p-5 bg-gray-100">
        <div>
          <div className="text-center justify-center mb-10">
            <h1 className="mb-3 bg-gradient-to-r from-[#a2a1ff] to-[#fcb6d8]   inline-block text-3xl pe-10 font-semibold">
              লার্নারদের রিভিউ{" "}
            </h1>
            <p className="mb-3">
              আমার কোর্স কতটা হেল্পফুল তা দেখুন আমার কোর্সে জয়েন করা
              পার্টিসিপেন্টদের থেকে।
            </p>
          </div>
          <div className="lg:flex md:flex mx-5 lg:mx-0 md:mx-0 justify-between gap-5 my-5">
            <div className="lg:w-5/12 md:w-5/12 mt-2">
              <img src={rev1} alt="" className="w-full h-24 object-fit" />
            </div>
            <div className="lg:w-3/12 md:w-3/12 mt-2">
              <img src={rev2} alt="" className="w-full h-24 object-fit" />
            </div>
            <div className="lg:w-4/12 md:w-4/12 mt-2">
              <img src={rev3} alt="" className="w-full h-24 object-fit" />
            </div>
          </div>
          <div className="lg:flex md:flex mx-5 lg:mx-0 md:mx-0 justify-between gap-5 my-5">
            <div className="lg:w-3/12 md:w-3/12 mt-2">
              <img src={rev4} alt="" className="w-full h-24 object-fit" />
            </div>
            <div className="lg:w-4/12 md:w-4/12 mt-2">
              <img src={rev5} alt="" className="w-full h-24 object-fit" />
            </div>
            <div className="lg:w-5/12 md:w-5/12 mt-2">
              <img src={rev6} alt="" className="w-full h-24 object-fit" />
            </div>
          </div>
          <div className="lg:flex md:flex mx-5 lg:mx-0 md:mx-0 justify-between gap-5 mb-5">
            <div className="lg:w-4/12 md:w-4/12 mt-2">
              <img src={rev7} alt="" className="w-full h-24 object-fit" />
            </div>
            <div className="lg:w-3/12 md:w-3/12 mt-2">
              <img src={rev8} alt="" className="w-full h-24 object-fit" />
            </div>
            <div className="lg:w-5/12 md:w-5/12 mt-2">
              <img src={rev9} alt="" className="w-full h-24 object-fit" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex md:flex text-center lg:text-start md:text-start justify-center items-center my-10 p-5">
        <div className="lg:w-1/2 md:w-1/2">
          <div className="text-gray-800">
            <h1 className="text-3xl font-semibold mb-3">
              <span className="text-[#ee2849]">এই কোর্সে</span> জয়েন করলেই কি
              মাসে লাখ <br /> লাখ টাকা ইনকাম করা যাবে?
            </h1>
            <p className="font-semibold text-gray-800 mb-3">একদমই না!</p>
            <p className="mb-2">
              এটা ফ্রিল্যান্সিং শিখে আয় করার কোনো প্রিমিয়াম কোর্স নয় এবং আমি
              কোনো ইনকাম গ্যারান্টিও দিচ্ছি না।
            </p>
            <p className="bg-gradient-to-r from-[#ff9900] via-[#ffb545] to-[#ffffff] px-3 inline-block rounded-b-md rounded-tl-4xl rounded-tr-md  text-center mb-3 text-sm">
              এখন প্রশ্ন করতে পারেন,
            </p>
            <p className="mb-3 text-xl font-semibold">
              তাহলে এই কোর্স <span className="text-[#ee2849]">কেন</span> করবো?
            </p>
            <p className="mb-3">কোর্সটি কেন করবেন এর উত্তরে আমি বলবো…</p>
            <p className="mb-3">
              অনেকেই ফ্রিল্যান্সিং শেখার জন্য হাজার হাজার টাকার অ্যাডভান্সড
              কোর্স কিনে। কিন্তু বেসিক না জানার কারণে তাদের টাকা ও সময় নষ্ট হয়
              কিন্তু কিছু শিখতে পারে না।  
            </p>
            <p className="mb-3">
              এই কোর্সটা আগে থেকে করা থাকলে আপনি অন্যান্য অ্যাডভান্সড লেভেলের
              ফ্রিল্যান্সিং কোর্স থেকে হাইলি-বেনিফিটেড হতে পারবেন এবং ভালোমতো
              সবকিছু শিখতে পারবেন। 🚀
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 lg:flex md:flex justify-center">
          <div className="lg:w-2/3 md:2/3">
            <img src={Ins4} alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-5 p-5">
        <div>
          <div className="text-gray-800">
            <p className="text-center my-3 font-semibold">
              Why Learners Love Our Freelancing Fundamentals
            </p>
            <h1 className="text-center text-4xl font-semibold mb-3">
              "<span className="text-[#ee2849]">গোড়া</span> থেকে ফ্রিল্যান্সিং
              কোর্স"
            </h1>
            <p className="text-center text-[#ee2849] font-semibold mb-3">
              See Reviews
            </p>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 gap-5">
            <img src={Item1} alt="" />
            <img src={Item2} alt="" />
            <img src={Item3} alt="" />
            <img src={Item4} alt="" />
            <img src={Item2} alt="" />
            <img src={Item1} alt="" />
            <img src={Item4} alt="" />
            <img src={Item3} alt="" />
          </div>
          <div className="lg:flex md:flex justify-between items-center my-10 gap-10">
            <div className="lg:w-1/2 md:w-1/2 flex justify-center">
              <div className="p-10">
                <img src={Cardbox} alt="" />
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 text-center lg:text-start md:text-start text-gray-800">
              <p className="text-3xl font-semibold leading-[1.5] mb-3">
                ফ্রিল্যান্সিং-এ সাকসেসফুল হবার “
                <span className="text-blue-600">সিক্রেট অপর্চুনিটি</span>”
                REVEAL করুন কোর্সে জয়েন করে
              </p>
              <p className="mb-3">ইয়েস❗</p>
              <p className="mb-3 leading-7">
                কোর্সে আপনাকে ফ্রিল্যান্সিং করার এমন একটা সিক্রেট অপরচুনিটি
                দেখানো হবে যেটা ফলো করলে আপনি খুব দ্রুত ক্যারিয়ারে সফলতা আনতে
                পারবেন। 
              </p>
              <p className="mb-3">
                অনেকেই ফ্রিল্যান্সিং করলেও এই সিক্রেট অপরচুনিটিটা সম্পর্কে জানেই
                না।  ⛔
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="video-module my-5 p-5 hidden lg:block md:block">
        <div className="flex justify-center p-5">
          <div className="text-center text-gray-800">
            <p className="font-semibold">Some words from</p>
            <p className="mb-3 text-4xl font-bold">
              Our <span className="text-[#ee2849]">Learners</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[80%]">
            <div className="grid grid-cols-2 gap-5">
              <img src={video1} alt="" />
              <img src={video2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="offer my-20 lg:mx-20 md:mx-10 mx-5 rounded-lg relative flex justify-center items-center">
        <div className="absolute right-0">
          <img src={offervector} alt="" className="h-80" />
        </div>
        <div className="lg:p-10 md:p-5 p-2">
          <div className="text-white lg:w-[60%] md:w-[60%] w-full mb-3">
            <p className="lg:text-2xl md:text-xl text-lg text-center">
              সাকসেসফুল <span className="font-semibold">ফ্রিল্যান্সার</span>{" "}
              হিসাবে আপনার ক্যারিয়ার জার্নি শুরু করুন{" "}
              <span className="font-semibold">আজ থেকেই।</span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className="w-[60%] ">
              <div className="text-white text-center text-lg mb-3 w-full flex justify-start ">
                <div className="">
                  <p className="text-gray-200">
                    “গোড়া থেকে ফ্রিল্যান্সিং” কোর্স
                  </p>
                  <p className="font-semibold">
                    প্রাইস: <span className="line-through">১,০০০</span> টাকা 
                  </p>
                  <p className=" font-semibold">১০০</p>
                </div>
              </div>
              <div className="flex justify-start w-full">
                <div className="relative lg:w-1/3 md:w-1/3 ">
                  <p className="px-3 py-2 bg-[#2b354c] rounded-b-lg rounded-tl-lg cursor-pointer text-gray-200 text-center">
                    এখনই এনরোল করুন 
                  </p>
                  <div className="absolute -right-2 top-6">
                    <img src={cursor} alt="" className="w-8" />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-[40%] md:w-[40%] w-[35%]">
              <div className="flex justify-center items-start lg:-mt-10 mt-20">
                <img src={Goratheke} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
