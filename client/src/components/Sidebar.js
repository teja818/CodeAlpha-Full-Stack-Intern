import React from "react";

import { useNavigate } from "react-router-dom";

function Sidebar() {

  const navigate = useNavigate();

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl sticky top-28">

      {/* PROFILE */}

      <div className="text-center">

        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
          className="w-32 h-32 rounded-full mx-auto border-4 border-cyan-500"
        />

        <h2 className="text-4xl font-bold text-white mt-5">

          Teja818

        </h2>

        <p className="text-gray-400 mt-2">

          MERN Stack Developer 🚀

        </p>

      </div>

      {/* MENU */}

      <div className="space-y-4 mt-10">

        <button
          onClick={() =>
            navigate("/home")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          🏠 Home

        </button>

        <button
          onClick={() =>
            navigate("/explore")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          🔥 Explore

        </button>

        <button
          onClick={() =>
            navigate("/profile")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          👤 Profile

        </button>

        <button
          onClick={() =>
            navigate("/messenger")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          💬 Messenger

        </button>

        <button
          onClick={() =>
            navigate("/notifications")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          🔔 Notifications

        </button>

        <button
          onClick={() =>
            navigate("/reels")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          🎬 Reels

        </button>

        <button
          onClick={() =>
            navigate("/friends")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          👥 Friends

        </button>

        <button
          onClick={() =>
            navigate("/video-call")
          }
          className="w-full bg-slate-800 text-white p-4 rounded-2xl text-left hover:bg-slate-700 transition"
        >

          🎥 Video Call

        </button>

      </div>

      {/* QUICK ACTIONS */}

      <div className="mt-10">

        <h3 className="text-2xl font-bold text-white mb-5">

          Quick Actions ⚡

        </h3>

        <div className="space-y-4">

          <button
            onClick={() =>
              navigate("/home")
            }
            className="w-full bg-cyan-500 text-black p-4 rounded-2xl font-bold"
          >

            ➕ Create Post

          </button>

          <button
            onClick={() =>
              navigate("/profile")
            }
            className="w-full bg-slate-800 text-white p-4 rounded-2xl"
          >

            📸 Upload Story

          </button>

          <button
            onClick={() =>
              navigate("/video-call")
            }
            className="w-full bg-slate-800 text-white p-4 rounded-2xl"
          >

            🔴 Go Live

          </button>

        </div>

      </div>

    </div>

  );
}

export default Sidebar;