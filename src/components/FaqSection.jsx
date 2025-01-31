import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { BsFillPlayCircleFill } from "react-icons/bs";
import offer2 from "../assets/images/offer2.png";

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <>
      <div className="flex justify-center my-10 h-auto">
        <div className="lg:w-[60%] md:w-[60%] mx-5 lg:mx-0 md:mx-0">
          <h1 className="text-4xl mb-2 text-center font-semibold">
            কোর্স <span className="text-[#ee2849]">মডিউল</span>
          </h1>
          <p className="text-gray-500 font-semibold text-center mb-10">
            চলুন এখন দেখে নিই কী কী শেখানো হবে এই গেম-চেঞ্জিং কোর্সে:
          </p>
          {/* FAQ 1 */}
          <div
            className={`relative p-[1px] ${
              openFaq === 1
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "border border-gray-200"
            }`}
          >
            <div
              className="bg-gray-100 px-4 py-3 flex items-center justify-between font-semibold cursor-pointer"
              onClick={() => toggleFaq(1)}
            >
              <p>
                <span className="pe-3">1</span> ফ্রিল্যান্সিং-এর বেসিক সম্পর্কে
                ক্লিয়ার ওভারভিউ।
              </p>
              <span className="bg-white p-1 rounded">
                {openFaq === 1 ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
          </div>

          {openFaq === 1 && (
            <div>
              <div className="flex justify-start p-3 border border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Freelancing 101 Must-Know Basics
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  How to Get Key Insights?
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Why Should You Choose Me?
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Why Freelancers Fail?
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Why Do Clients Choose You?
                </p>
              </div>
            </div>
          )}

          {/* FAQ 2 */}
          <div
            className={`relative p-[1px] ${
              openFaq === 2
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "border border-gray-200"
            }`}
          >
            <div
              className="bg-gray-100 px-4 py-3 flex items-center justify-between font-semibold cursor-pointer"
              onClick={() => toggleFaq(2)}
            >
              <p>
                <span className="pe-3">2</span> বিভিন্ন মার্কেটপ্লেস সম্পর্কে
                স্পষ্ট ধারণা তৈরি!
              </p>
              <span className="bg-white p-1 rounded">
                {openFaq === 2 ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
          </div>

          {openFaq === 2 && (
            <div>
              <div className="flex justify-start p-3 border border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Building a Strong Portfolio
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Effective Client Communication
                </p>
              </div>
            </div>
          )}
          {/* FAQ 3 */}
          <div
            className={`relative p-[1px] ${
              openFaq === 3
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "border border-gray-200"
            }`}
          >
            <div
              className="bg-gray-100 px-4 py-3 flex items-center justify-between font-semibold cursor-pointer"
              onClick={() => toggleFaq(3)}
            >
              <p>
                <span className="pe-3">3</span> ফ্রিল্যান্সিং-এর মারাত্মক
                ভুলগুলো এড়িয়ে চলার উপায়!
              </p>
              <span className="bg-white p-1 rounded">
                {openFaq === 3 ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
          </div>

          {openFaq === 3 && (
            <div>
              <div className="flex justify-start p-3 border border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Building a Strong Portfolio
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Effective Client Communication
                </p>
              </div>
            </div>
          )}
          {/* FAQ 4 */}
          <div
            className={`relative p-[1px] ${
              openFaq === 4
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "border border-gray-200"
            }`}
          >
            <div
              className="bg-gray-100 px-4 py-3 flex items-center justify-between font-semibold cursor-pointer"
              onClick={() => toggleFaq(4)}
            >
              <p>
                <span className="pe-3">4</span> কন্টিনিউয়াস লার্নিং এর জন্য
                ডেডিকেটেড ইন্টারঅ্যাক্টিভ গ্রুপ!
              </p>
              <span className="bg-white p-1 rounded">
                {openFaq === 4 ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
          </div>

          {openFaq === 4 && (
            <div>
              <div className="flex justify-start p-3 border border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Building a Strong Portfolio
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Effective Client Communication
                </p>
              </div>
            </div>
          )}
          {/* FAQ 5 */}
          <div
            className={`relative p-[1px] ${
              openFaq === 5
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                : "border border-gray-200"
            }`}
          >
            <div
              className="bg-gray-100 px-4 py-3 flex items-center justify-between font-semibold cursor-pointer"
              onClick={() => toggleFaq(5)}
            >
              <p>
                <span className="pe-3">5</span> স্কিল সেল করে টাকা আয় করার
                টেকনিক!
              </p>
              <span className="bg-white p-1 rounded">
                {openFaq === 5 ? <FaMinus /> : <FaPlus />}
              </span>
            </div>
          </div>

          {openFaq === 5 && (
            <div>
              <div className="flex justify-start p-3 border border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Building a Strong Portfolio
                </p>
              </div>
              <div className="flex justify-start p-3 border border-t-0 border-gray-100 bg-white hover:font-semibold">
                <p className="flex items-center gap-3">
                  <span className="text-red-600">
                    <BsFillPlayCircleFill />
                  </span>
                  Effective Client Communication
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-center my-10">
        <div className="lg:w-[60%] md:w-[60%]  bg-gray-100 rounded-none rounded-tl-4xl p-10">
          <div className="text-gray-800">
            <h1 className="text-3xl font-semibold mb-3">
              কোর্স প্রাইস এবং <span className="text-blue-600">এনরোলমেন্ট</span>
            </h1>
            <p className="mb-3">
              আগেই বলেছি এটা ফ্রিল্যান্সিং শুরু করার একটা বেসিক কোর্স এবং এখানে
              শুধুমাত্র ফ্রিল্যান্সিং-এর ফান্ডামেন্টাল বিষয়গুলো নিয়ে আলোচনা করা
              হয়েছে।
            </p>
            <p className="mb-3 text-lg font-semibold">
              <span className="bg-gradient-to-r from-[#a2a1ff] to-[#fcb6d8]   inline-block">
                তাই সবকিছু বিবেচনা
              </span>{" "}
              করেই কোর্সের প্রাইস নির্ধারণ করা হয়েছে  
              <span className="text-[#ee2849] line-through"> ১,০০০ টাকা</span>
            </p>
            <div className="relative mb-3">
              <p className="flex items-center justify-between text-lg font-semibold">
                <span>[ সীমিত সময়ের জন্য ]</span>
                <span className="text-green-500 text-xl">মাত্র ১০০ টাকা </span>
              </p>
              <div className="absolute -right-5 -bottom-15">
                <img src={offer2} alt="" className="w-24" />
              </div>
            </div>
            <p className="text-gray-500 font-semibold">
              ১০ জুন, ২০২৪ থেকে ওয়েবসাইটে লগইন করে কোর্স দেখা যাবে।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSection;
