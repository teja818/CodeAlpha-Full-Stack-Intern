import React, { useState } from "react";

import Navbar from "../components/Navbar";

function VideoCallPage() {

  const [darkMode, setDarkMode] = useState(true);

  const [micOn, setMicOn] = useState(true);

  const [cameraOn, setCameraOn] = useState(true);

  const [callStarted, setCallStarted] = useState(false);

  return (

    <div
      className={
        darkMode
          ? "bg-black min-h-screen text-white"
          : "bg-gray-100 min-h-screen text-black"
      }
    >

      {/* NAVBAR */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* MAIN */}

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* HEADER */}

        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">

          <div>

            <h1 className="text-5xl font-bold">
              Video Call 🎥
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Connect with friends through live video chat.
            </p>

          </div>

          {/* START CALL */}

          <button
            onClick={() =>
              setCallStarted(!callStarted)
            }
            className={`px-6 py-3 rounded-xl font-bold transition ${
              callStarted
                ? "bg-red-500 hover:bg-red-400"
                : "bg-cyan-500 text-black hover:bg-cyan-400"
            }`}
          >
            {
              callStarted
                ? "End Call"
                : "Start Call"
            }
          </button>

        </div>

        {/* VIDEO SECTION */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* YOUR VIDEO */}

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">

            <div className="p-5 border-b border-slate-800 flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                You
              </h2>

              <span className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">
                Live
              </span>

            </div>

            <div className="h-[500px] bg-slate-800 flex items-center justify-center">

              <img
                src="https://i.pravatar.cc/300?img=12"
                alt="you"
                className="w-56 h-56 rounded-full border-8 border-cyan-500"
              />

            </div>

          </div>

          {/* FRIEND VIDEO */}

          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">

            <div className="p-5 border-b border-slate-800 flex justify-between items-center">

              <h2 className="text-2xl font-bold">
                Alex
              </h2>

              <span className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">
                Online
              </span>

            </div>

            <div className="h-[500px] bg-slate-800 flex items-center justify-center">

              <img
                src="https://i.pravatar.cc/300?img=15"
                alt="friend"
                className="w-56 h-56 rounded-full border-8 border-pink-500"
              />

            </div>

          </div>

        </div>

        {/* CONTROLS */}

        <div className="flex flex-wrap justify-center gap-6 mt-12">

          {/* MIC */}

          <button
            onClick={() =>
              setMicOn(!micOn)
            }
            className={`px-8 py-4 rounded-2xl text-xl font-bold transition ${
              micOn
                ? "bg-cyan-500 text-black"
                : "bg-red-500"
            }`}
          >
            {
              micOn
                ? "🎤 Mic On"
                : "🔇 Mic Off"
            }
          </button>

          {/* CAMERA */}

          <button
            onClick={() =>
              setCameraOn(!cameraOn)
            }
            className={`px-8 py-4 rounded-2xl text-xl font-bold transition ${
              cameraOn
                ? "bg-cyan-500 text-black"
                : "bg-red-500"
            }`}
          >
            {
              cameraOn
                ? "📷 Camera On"
                : "🚫 Camera Off"
            }
          </button>

          {/* SCREEN SHARE */}

          <button
            onClick={() =>
              alert("Screen Sharing Started 🖥️")
            }
            className="bg-slate-900 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-slate-800 transition"
          >
            🖥️ Share Screen
          </button>

          {/* RECORD */}

          <button
            onClick={() =>
              alert("Recording Started 🔴")
            }
            className="bg-slate-900 px-8 py-4 rounded-2xl text-xl font-bold hover:bg-slate-800 transition"
          >
            🔴 Record
          </button>

        </div>

      </div>

    </div>
  );
}

export default VideoCallPage;