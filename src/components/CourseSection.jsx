import React from "react";

import { FaArrowRight } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";
import { BsCaretRight } from "react-icons/bs";

import Vector from "../assets/images/Vector.png";
import Enrol from "../assets/images/enrol.png";
import Cube from "../assets/images/Cube.png";
import Brand from "../assets/images/brand.png";
import Neche from "../assets/images/Neche.png";
import Outside from "../assets/images/outside.png";
import Oppor from "../assets/images/opportunity.png";
import Shop from "../assets/images/Shop.png";

import Student1 from "../assets/images/Student1.png";
import Student2 from "../assets/images/Student2.png";
import Student3 from "../assets/images/Student3.png";
import Subtract from "../assets/images/Subtract.png";
import Animie from "../assets/images/animie.png";
import Instructor from "../assets/images/Instructor.png";
import Ins from "../assets/images/ins.png";
import Man1 from "../assets/images/man1.png";
import Man2 from "../assets/images/man2.png";
import Card1 from "../assets/images/card1.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";

const CourseSection = () => {
  return (
    <>
      <div className="bg-white h-auto w-full  py-5 ">
        <div className="my-5 flex justify-center">
          <h1 className="text-2xl font-[600]">
            এই <span className="text-[#ed2b4a]">কোর্সে</span> কী কী থাকছে।{" "}
            <span className="flex justify-end text-end">
              {" "}
              <img src={Vector} alt="" className="w-24" />
            </span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 cols  gap-5 w-[80%]">
            <div className="text-start p-3 ">
              <img src={Cube} alt="" className="w-12" />
              <p className="text-lg font-semibold py-2">
                ফ্রিল্যান্সিং এর বেসিক
              </p>
              <p className="text-sm text-gray-800">
                ফ্রিল্যান্সিং-এর সব ফান্ডামেন্টাল সম্পর্কে আলোচনা করা হবে।
              </p>
            </div>
            <div className="text-start p-3 ">
              <img src={Shop} alt="" className="w-12" />
              <p className="text-lg font-semibold py-2">
                মার্কেটপ্লেস সম্পর্কে ধারণা
              </p>
              <p className="text-sm text-gray-800">
                প্রচলিত সকল ফ্রিল্যান্সিং প্লাটফর্ম সম্পর্কে ধারণা দেয়া হবে।
              </p>
            </div>
            <div className="text-start p-3 ">
              <img src={Outside} alt="" className="w-12 -mt-4" />
              <p className="text-lg font-semibold py-2">
                আউটসাইড মার্কেটপ্লেস পরিচিতি
              </p>
              <p className="text-sm text-gray-800">
                মার্কেটপ্লেসের বাইরে অন্যান্য প্লাটফর্ম নিয়ে আইডিয়া দেয়া হবে।
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 cols gap-5 w-[80%]">
            <div className="text-start p-3 ">
              <img src={Neche} alt="" className="w-12" />
              <p className="text-lg font-semibold py-2">নিশ সিলেকশন</p>
              <p className="text-sm text-gray-800">
                ফ্রিল্যান্সিং শুরু করার জন্য নিশ সিলেক্ট করা শেখানো হবে।
              </p>
            </div>
            <div className="text-start p-3 ">
              <img src={Brand} alt="" className="w-12" />
              <p className="text-lg font-semibold py-2">
                পার্সোনাল ব্র্যান্ডিং
              </p>
              <p className="text-sm text-gray-800">
                অনলাইনে কিভাবে একটা পার্সোনাল ব্র্যান্ড তৈরি করতে পারবেন তা
                শেখানো হবে।
              </p>
            </div>
            <div className="text-start p-3 ">
              <img src={Oppor} alt="" className="w-12 -mt-2" />
              <p className="text-lg font-semibold py-2">
                সিক্রেট অপর্চুনিটি আনলক 
              </p>
              <p className="text-sm text-gray-800">
                সাকসেসফুল ফ্রিল্যান্সার হওয়ার সিক্রেট মেথড আনলক করতে পারবেন।
              </p>
            </div>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <h1 className="text-2xl font-[600]">
            আরো অনেক কিছু <span className="text-[#ed2b4a]">....</span>
          </h1>
        </div>
        <div className="my-10 flex justify-center">
          <h1 className="text-3xl font-[600] relative text-center hidden lg:block md:block">
            এই কোর্সটিতে কাদের <span className="text-[#ed2b4a]">এনরোল</span> করা
            উচিত?{" "}
            <img src={Enrol} alt="" className="w-32 absolute right-41 -top-3" />
          </h1>
          <h1 className="text-3xl font-[600] relative text-center block lg:hidden md:hidden">
            এই কোর্সটিতে কাদের <span className="text-[#ed2b4a]">এনরোল</span> করা
            উচিত?{" "}
            <img
              src={Enrol}
              alt=""
              className="w-32 absolute left-13 -bottom-3"
            />
          </h1>
        </div>
        <div className="my-5 flex justify-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 w-[80%] ">
            <div className="relative">
              <img src={Student1} alt="" />
              <div className="absolute top-4 left-6  w-64">
                <img src={Subtract} alt="" />
              </div>
              <div className="absolute top-65 left-10 w-60">
                <div className="flex justify-center">
                  <div className="mb-2 -ms-10">
                    <p className="text-gray-200 italic text-start -mb-2 -ms-2">
                      যারা
                    </p>
                    <p className="font-bangla text-white font-semibold text-3xl text-end">
                      স্টুডেন্ট
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block md:block">
                  <p className="flex items-start text-sm text-gray-300 gap-1">
                    <span>
                      <IoCheckmarkSharp />
                    </span>
                    যাদের কোন অভিজ্ঞতা নেই।
                  </p>
                  <p className="flex items-start text-sm text-gray-300 gap-1">
                    <span>
                      <IoCheckmarkSharp />
                    </span>
                    অনলাইনে কাজ করে টাকা ইনকাম করতে চায়।
                  </p>
                </div>
              </div>
              <div className="lg:hidden block md:hidden absolute bottom-20 left-11 p-2 w-[65%] border border-gray-300 rounded-b-lg rounded-tr-lg cursor-pointer hover:bg-[#ed2b4a] hover:border-[#ed2b4a] z-10">
                <p className="flex items-center gap-2 text-white">
                  এখনই এনরোল করুন 
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
              <div className="hidden lg:block md:block absolute bottom-11 left-11 p-2 w-[70%] border border-gray-300 rounded-b-lg rounded-tr-lg cursor-pointer hover:bg-[#ed2b4a] hover:border-[#ed2b4a] z-10">
                <p className="flex items-center gap-2 text-white">
                  এখনই এনরোল করুন 
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={Student2} alt="" />
              <div className="absolute top-4 left-6  w-64">
                <img src={Subtract} alt="" />
              </div>
              <div className="absolute top-65 left-10 w-60">
                <div className="flex justify-center">
                  <div className="mb-2 -ms-10">
                    <p className="text-gray-200 italic text-center -mb-2 -ms-12">
                      যারা
                    </p>
                    <p className="font-bangla text-white font-semibold text-3xl text-end italic">
                      ফ্রিল্যান্সার
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block md:block">
                  <p className="flex items-start text-sm text-gray-300 gap-1">
                    <span>
                      <IoCheckmarkSharp />
                    </span>
                    ইনকাম ৩০ হাজার টাকার কম! 
                  </p>
                  <p className="flex items-start text-sm text-gray-300 gap-1">
                    <span>
                      <IoCheckmarkSharp />
                    </span>
                    ইনকাম লেভেলকে আরও বাড়াতে চায়। (১-৪ বছরের অভিজ্ঞতা)
                  </p>
                </div>
              </div>
              <div className="lg:hidden block md:hidden absolute bottom-25 left-11 p-2 w-[65%] border border-gray-300 rounded-b-lg rounded-tr-lg cursor-pointer hover:bg-[#ed2b4a] hover:border-[#ed2b4a] z-10">
                <p className="flex items-center gap-2 text-white">
                  এখনই এনরোল করুন 
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
              <div className="hidden lg:block md:block absolute bottom-11 left-11 p-2 w-[70%] border border-gray-300 rounded-b-lg rounded-tr-lg cursor-pointer hover:bg-[#ed2b4a] hover:border-[#ed2b4a] z-10">
                <p className="flex items-center gap-2 text-white">
                  এখনই এনরোল করুন 
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
            <div className="relative">
              <img src={Student3} alt="" />
              <div className="absolute top-4 left-6  w-64">
                <img src={Subtract} alt="" />
              </div>
              <div className="absolute top-65 left-10 w-60">
                <div className="flex justify-center">
                  <div className="mb-2 -ms-10">
                    <p className="text-gray-200 italic text-start -mb-2">
                      যারা
                    </p>
                    <p className="font-bangla text-white font-semibold text-3xl text-end italic">
                      এক্সপার্ট
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block md:block">
                  <p className="flex items-start text-sm text-gray-300 gap-1">
                    <span>
                      <IoCheckmarkSharp />
                    </span>
                    ইনকামকে 3-5X বাড়াতে চায়। 
                  </p>
                  <p className="flex items-start text-sm text-gray-300 gap-1">
                    <span>
                      <IoCheckmarkSharp />
                    </span>
                    ফ্রিল্যান্সিংকে বিজনেসে পরিণত করতে চায়। (৫-১০ বছরের
                    অভিজ্ঞতা)
                  </p>
                </div>
              </div>
              <div className="lg:hidden block md:hidden absolute bottom-25 left-11 p-2 w-[65%] border border-gray-300 rounded-b-lg rounded-tr-lg cursor-pointer hover:bg-[#ed2b4a] hover:border-[#ed2b4a] z-10">
                <p className="flex items-center gap-2 text-white">
                  এখনই এনরোল করুন 
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
              <div className="hidden lg:block md:block absolute bottom-11 left-11 p-2 w-[70%] border border-gray-300 rounded-b-lg rounded-tr-lg cursor-pointer hover:bg-[#ed2b4a] hover:border-[#ed2b4a] z-10">
                <p className="flex items-center gap-2 text-white">
                  এখনই এনরোল করুন 
                  <span>
                    <FaArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="lg:w-[65%] md:w-[65%]">
            <img src={Animie} alt="" />
          </div>
        </div>
        <div className="mt-20 w-full  bg-gradient-to-l from-[#ffffff] to-[#ece7e7] rounded-tl-[4rem] ">
          <div className="lg:flex-row md:flex-row flex flex-col-reverse  justify-between items-center m-5 ">
            <div className="p-5">
              <div className="flex justify-start  items-center text-center gap-2 pb-3">
                <h1 className="text-2xl font-semibold ">কোর্স ইন্সট্রাক্টর</h1>
                <img src={Ins} alt="" className="w-10" />
              </div>
              <p className="pb-3 text-lg font-semibold text-[#ed2b4a]">
                নাজমুল আহমেদ
              </p>
              <p className="leading-8 pb-3">
                হ্যালো, আমি নাজমুল আহমেদ এবং{" "}
                <span className="font-semibold border-b-2 border-blue-600">
                  “গোড়া থেকে ফ্রিল্যান্সিং”
                </span>{" "}
                কোর্সে মেন্টর হিসাবে আমি থাকছি আপনার সাথে।
              </p>{" "}
              <p className="leading-8 pb-3">
                ছোট্ট করে আমার নিজের সম্পর্কে একটু বলি। আমি একজন সার্টিফাইড
                মার্কেটিং কন্সাল্ট্যান্ট এবং অনলাইন ইন্সট্রাক্টর। বিগত ১৫ বছর
                ধরে আমি অনলাইন মার্কেটিং ইন্ডাস্ট্রিতে কাজ করে আসছি। {" "}
              </p>
              <p className="leading-8 pb-3">
                বর্তমানে বেশ কিছু দেশি-বিদেশী কোম্পানির পার্ট-টাইম সিএমও{" "}
                <span className="font-bold">(CMO)</span>
                হিসেবে কর্মরত আছি যার সবকিছুই{" "}
                <span className="font-bold">
                  ফ্রিল্যান্সিং করে জেনারেট করা।
                </span>
              </p>
              <p className="leading-8 pb-3">
                <span className="font-bold">“গোড়া থেকে ফ্রিল্যান্সিং”</span>{" "}
                কোর্সে আমি ফ্রিল্যান্সিং-এর ফান্ডামেন্টাল বিষয়গুলো শেয়ার করেছি
                যা আপনার  ক্যারিয়ার গ্রোথে খুবই হেল্প করবে ।
              </p>
            </div>
            <div className="flex justify-center h-[90%] w-full ms-20 -mt-10 ">
              <img src={Instructor} alt="" className="" />
            </div>
          </div>
        </div>
        <div className="my-10 w-full flex justify-center">
          <div className="lg:w-[70%] md:w-[70%]">
            <div className="text-center my-5 ">
              <p>
                আমার <span className="font-semibold">ফ্রিল্যান্সিং</span>{" "}
                জার্নির শুরুটা যেভাবে,
              </p>
              <h1 className="font-semibold text-3xl py-3">
                মাত্র <span className="text-[#ed2b4a] ">$২</span> ফ্রিল্যান্সিং
                প্রোজেক্টে কাজ করার  মাধ্যমে শুরু ।
              </h1>
              <p className="text-sm pb-3">জ্বী, ঠিকই শুনেছেন! </p>
              <p className="pb-3">
                ক্যারিয়ারের শুরুতেই ইউনিভার্সিটির স্টুডেন্ট থাকা অবস্থায় আমি
                গ্রাফিক ডিজাইনিং শিখি এবং আমার কাজ করা প্রথম ফ্রিল্যান্সিং
                প্রোজেক্ট থেকে{" "}
                <span className="bg-gradient-to-l from-[#d275f0] to-[#759ef0]">
                  $২ বা ১২০ টাকা
                </span>{" "}
                আয় করি।
              </p>
              <p className="pb-3">
                ফ্রিল্যান্সিং-এর প্রতি প্যাশন এবং ডেডিকেশন ছিলো বলেই বর্তমানে
                আমি সেটাকে বিজনেসে কনভার্ট করতে পেরেছি।
              </p>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 cols p-5  gap-10 ">
              <img src={Man1} alt="" />
              <img src={Man2} alt="" />
            </div>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <div className="w-[80%]">
            <p className="text-3xl font-semibold text-center py-3 my-10">
              কোর্সের ভিতরের কিছু ভিডিও
            </p>
            <div className="">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 cols lg:p-0 md:p-0 p-5 gap-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={Card3} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Freelancing 101: Must Know Basics
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Learn The Fundamentals Every Freelancer Needs.
                    </p>

                    <a
                      href="https://www.youtube.com/watch?v=HocoK6pP8Tg" // Replace with your actual video URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center py-1 rounded-b-md rounded-tl-md text-white text-center flex items-center gap-3 bg-[#445164] cursor-pointer"
                    >
                      Watch Preview
                      <span className="pt-1">
                        <BsCaretRight />
                      </span>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={Card2} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Freelancing 101: Must Know Basics
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Learn The Fundamentals Every Freelancer Needs.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=HocoK6pP8Tg" // Replace with your actual video URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center py-1 rounded-b-md rounded-tl-md text-white text-center flex items-center gap-3 bg-[#445164] cursor-pointer"
                    >
                      Watch Preview
                      <span className="pt-1">
                        <BsCaretRight />
                      </span>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={Card1} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Freelancing 101: Must Know Basics
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Learn The Fundamentals Every Freelancer Needs.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=HocoK6pP8Tg" // Replace with your actual video URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center py-1 rounded-b-md rounded-tl-md text-white text-center flex items-center gap-3 bg-[#445164] cursor-pointer"
                    >
                      Watch Preview
                      <span className="pt-1">
                        <BsCaretRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-3 md:grid-cols-3 cols lg:p-0 md:p-0 p-5 gap-5 my-5">
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={Card1} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Freelancing 101: Must Know Basics
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Learn The Fundamentals Every Freelancer Needs.
                    </p>

                    <a
                      href="https://www.youtube.com/watch?v=HocoK6pP8Tg" // Replace with your actual video URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center py-1 rounded-b-md rounded-tl-md text-white text-center flex items-center gap-3 bg-[#445164] cursor-pointer"
                    >
                      Watch Preview
                      <span className="pt-1">
                        <BsCaretRight />
                      </span>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={Card2} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Freelancing 101: Must Know Basics
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Learn The Fundamentals Every Freelancer Needs.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=HocoK6pP8Tg" // Replace with your actual video URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center py-1 rounded-b-md rounded-tl-md text-white text-center flex items-center gap-3 bg-[#445164] cursor-pointer"
                    >
                      Watch Preview
                      <span className="pt-1">
                        <BsCaretRight />
                      </span>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img class="rounded-t-lg" src={Card3} alt="" />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Freelancing 101: Must Know Basics
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Learn The Fundamentals Every Freelancer Needs.
                    </p>
                    <a
                      href="https://www.youtube.com/watch?v=HocoK6pP8Tg" // Replace with your actual video URL
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full justify-center py-1 rounded-b-md rounded-tl-md text-white text-center flex items-center gap-3 bg-[#445164] cursor-pointer"
                    >
                      Watch Preview
                      <span className="pt-1">
                        <BsCaretRight />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseSection;
