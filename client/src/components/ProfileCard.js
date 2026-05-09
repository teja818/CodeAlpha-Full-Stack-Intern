import React from "react";

import { useNavigate } from "react-router-dom";

function ProfileCard() {

  const navigate = useNavigate();

  return (

    <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">

      {/* COVER IMAGE */}

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200"
        alt="cover"
        className="w-full h-56 object-cover"
      />

      {/* PROFILE */}

      <div className="p-8">

        <div className="flex flex-col md:flex-row md:items-center gap-6">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="profile"
            className="w-36 h-36 rounded-full border-4 border-cyan-500"
          />

          <div>

            <div className="flex items-center gap-3">

              <h1 className="text-5xl font-bold text-white">

                Teja818

              </h1>

              <span className="bg-cyan-500 text-black px-3 py-1 rounded-xl text-sm font-bold">

                ✔ Verified

              </span>

            </div>

            <p className="text-gray-400 text-xl mt-3">

              MERN Stack Developer 🚀 | UI/UX Enthusiast 🎨

            </p>

          </div>

        </div>

        {/* STATS */}

        <div className="grid grid-cols-3 gap-5 mt-10">

          <div className="bg-slate-800 rounded-2xl p-6 text-center">

            <h2 className="text-4xl font-bold text-pink-500">

              245

            </h2>

            <p className="text-gray-400 mt-2">

              Posts

            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center">

            <h2 className="text-4xl font-bold text-pink-500">

              18K

            </h2>

            <p className="text-gray-400 mt-2">

              Followers

            </p>

          </div>

          <div className="bg-slate-800 rounded-2xl p-6 text-center">

            <h2 className="text-4xl font-bold text-pink-500">

              890

            </h2>

            <p className="text-gray-400 mt-2">

              Following

            </p>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="grid md:grid-cols-2 gap-5 mt-10">

          <button
            onClick={() =>
              navigate("/profile")
            }
            className="bg-pink-500 text-white py-4 rounded-2xl text-xl font-bold hover:bg-pink-400 transition"
          >

            Edit Profile

          </button>

          <button
            onClick={() =>
              navigate("/messenger")
            }
            className="bg-slate-800 text-white py-4 rounded-2xl text-xl font-bold hover:bg-slate-700 transition"
          >

            Message

          </button>

        </div>

      </div>

    </div>

  );
}

export default ProfileCard;