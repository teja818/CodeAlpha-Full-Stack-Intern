import React, { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Reels from "../components/Reels";
import ProfileCard from "../components/ProfileCard";
import StoryUpload from "../components/StoryUpload";
import SearchBar from "../components/SearchBar";

function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return (

    <div
      className={
        darkMode
          ? "bg-gray-950 min-h-screen text-white transition-all duration-300"
          : "bg-gray-100 min-h-screen text-black transition-all duration-300"
      }
    >

      {/* NAVBAR */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN SECTION */}

      <div className="grid lg:grid-cols-4 gap-6 px-6 py-8">

        {/* LEFT SIDEBAR */}

        <div className="hidden lg:block">

          <Sidebar />

        </div>

        {/* CENTER SECTION */}

        <div className="lg:col-span-2 space-y-6">

          <ProfileCard />

          <StoryUpload />

          <Reels />

        </div>

        {/* RIGHT SECTION */}

        <div>

          <SearchBar />

        </div>

      </div>

    </div>
  );
}

export default Home;