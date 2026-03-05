import React from "react";
import Header from "./components/Header";

const page = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/Images/homepage-banner.webp')" }}
      >
        <Header />
      </div>
    </div>
  );
};

export default page;
