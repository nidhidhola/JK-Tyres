import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/homepage-banner.webp')" }}
      >
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default page;
