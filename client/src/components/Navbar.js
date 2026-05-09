import React from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar({ darkMode, setDarkMode }) {

  const navigate = useNavigate();

  const handleLogout = () => {

    navigate("/login");

  };

  return (

    <div className="bg-slate-900 border-b border-slate-800 px-8 py-5 flex flex-wrap justify-between items-center gap-5 sticky top-0 z-50 shadow-xl">

      {/* LOGO */}

      <Link to="/home">

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-black text-2xl font-bold">

            S

          </div>

          <h1 className="text-3xl font-bold text-cyan-400">

            SocialApp

          </h1>

        </div>

      </Link>

      {/* NAVIGATION */}

      <div className="flex flex-wrap gap-4">

        <Link to="/home">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            🏠 Home

          </button>

        </Link>

        <Link to="/explore">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            🔥 Explore

          </button>

        </Link>

        <Link to="/edit-profile">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            ✏️ Edit Profile

          </button>

        </Link>

        <Link to="/messenger">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            💬 Messenger

          </button>

        </Link>

        <Link to="/notifications">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            🔔 Notifications

          </button>

        </Link>

        <Link to="/reels">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            🎬 Reels

          </button>

        </Link>

        <Link to="/friends">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            👥 Friends

          </button>

        </Link>

        <Link to="/video-call">

          <button className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition">

            🎥 Video Call

          </button>

        </Link>

        <Link to="/create-post">

          <button className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold hover:bg-cyan-400 transition">

            ➕ Create Post

          </button>

        </Link>

      </div>

      {/* RIGHT SECTION */}

      <div className="flex items-center gap-4">

        <input
          type="text"
          placeholder="Search..."
          className="bg-slate-800 px-5 py-3 rounded-xl outline-none w-[220px] text-white"
        />

        <button
          onClick={() => {

            if (setDarkMode) {

              setDarkMode(!darkMode);

            }

          }}
          className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold hover:bg-cyan-400 transition"
        >

          🌙 Theme

        </button>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-red-400 transition"
        >

          Logout

        </button>

      </div>

    </div>

  );
}

export default Navbar;