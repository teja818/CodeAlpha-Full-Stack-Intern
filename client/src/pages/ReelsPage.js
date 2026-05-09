import React from "react";

import Navbar from "../components/Navbar";

import Reels from "../components/Reels";

function ReelsPage() {

  return (

    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <Reels />

      </div>

    </div>

  );
}

export default ReelsPage;