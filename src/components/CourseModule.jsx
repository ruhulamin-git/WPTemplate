import React, { useState, useEffect } from "react";

import Hexagons from "../assets/images/Hexagons.png";
import Prelnch from "../assets/images/prelnch.png";
import Super from "../assets/images/super.png";
import Arrow from "../assets/images/Arrow.png";
import Instructor2 from "../assets/images/instructor2.png";

const CourseModule = () => {
  const targetDate = new Date("2025-05-05T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const convertToBengali = (num) =>
    num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  return (
    <>
      <div className="course-module relative mb-5">
        <div className="flex justify-center">
          <div className=" my-5">
            <img src={Prelnch} alt="" className="w-52" />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[80%]">
            <p className="text-center text-3xl font-semibold">
              <span className="text-blue-600">Pre-Launch</span> স্পেশাল অফার!
            </p>
            <p className="text-center pt-3">
              <span className="font-semibold">“গোড়া থেকে ফ্রিল্যান্সিং”</span>{" "}
              কোর্সের রেগুলার প্রাইস ১,০০০ টাকা 
            </p>
            <p className="text-center py-3">
              তবে কোর্সের{" "}
              <span className="font-semibold">
                Pre-Launch উপলক্ষে ৫ জুন, ২০২৪
              </span>{" "}
              এর মধ্যে Pre-Book করলে আপনি{" "}
              <span className="text-2xl text-blue-600">৯০%</span> ডিসকাউন্টে
              মাত্র{" "}
              <span className="text-red-500 font-semibold">১০০ টাকায়</span>{" "}
              কোর্সটি পেয়ে যাবেন। 
              <span className="font-semibold">“Pre-Launch”</span> অফার শেষ হয়ে
              গেলে কোর্সে জয়েন করতে চাইলে আপনাকে অবশ্যই রেগুলার প্রাইসে এনরোল
              করতে হবে।
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <img src={Super} alt="" className="w-96" />
          </div>
        </div>

        <div className="flex justify-center my-5">
          <div className="flex gap-5 text-center w-80">
            {[
              { label: "দিন", value: timeLeft.days },
              { label: "ঘণ্টা", value: timeLeft.hours },
              { label: "মিনিট", value: timeLeft.minutes },
              { label: "সেকেন্ড", value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-[#eca4ae] to-[#ff002b] text-white px-5 py-3 rounded-lg text-3xl font-bold shadow-lg">
                  {convertToBengali(item.value)}
                </div>
                <p className="pt-2 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mb-5">
          <div className="relative">
            <p className="bg-gray-900 py-2 px-5 rounded-b-lg rounded-tl-lg inline-block text-white cursor-pointer">
              এখনই প্রি-অর্ডার করুন 
            </p>
            <img src={Arrow} alt="" className="absolute -top-6 -left-15" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-32">
          <img src={Hexagons} alt="" />
        </div>
      </div>
      <div className="lg:flex md:flex lg:text-start md:text-start text-center justify-center items-center my-10 p-5">
        <div className="lg:w-1/2 md:w-1/2">
          <div>
            <h1 className="text-3xl font-semibold mb-3">
              কোর্সে এতো বিশাল <br />
              <span className="text-[#ee2849]">ডিসকাউন্ট</span> কেন দিচ্ছি?
            </h1>
            <p className="mb-3">
              নিশ্চয়ই ভাবছেন কোর্সে কেন{" "}
              <span className="bg-gradient-to-r from-[#ff9900] via-[#ffb545] to-[#ffffff] px-1 inline-block rounded-b-md rounded-tl-4xl rounded-tr-md  text-center">
                ৯০% ডিসকাউন্ট দিচ্ছি?
              </span>
              ❓ 
            </p>
            <p className="mb-3">এতো ডিসকাউন্ট দেয়ার কারণ মূলত দুইটা। প্রথমত…</p>
            <p className="mb-3">
              আমি চাই সবাই যাতে কোর্সটা কিনে ফ্রিল্যান্সিং শিখা শুরু করতে পারে।
              আজকাল <span className="text-[#ee2849]">১০০</span> টাকা কার কাছে না
              আছে ভাই?
            </p>
            <p className="mb-3">দ্বিতীয় কারণ…</p>
            <p className="mb-3">
              বর্তমানে অনেকেই এই সেক্টরে আসতে চাচ্ছে কিন্তু শুরু করবে কোন জায়গা
              থেকে সেটার সঠিক গাইডলাইন পাচ্ছে না। ❌
            </p>
            <p className="mb-3">
              এই জন্যেই যারা ফ্রিল্যান্সিং শিখতে ইচ্ছুক আমি তাদেরকে এই কোর্সের
              মাধ্যমে হেল্প করতে চাই।
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 flex justify-center">
          <div className="w-2/3">
            <img src={Instructor2} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseModule;
