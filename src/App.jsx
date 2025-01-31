import React from "react";
import HeroSection from "./components/HeroSection";
import CourseSection from "./components/CourseSection";
import CourseModule from "./components/CourseModule";
import ReviewSection from "./components/ReviewSection";
import FaqSection from "./components/FaqSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Navbar />
        <HeroSection />
        <CourseSection />
        <FaqSection />
        <CourseModule />
        <ReviewSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
