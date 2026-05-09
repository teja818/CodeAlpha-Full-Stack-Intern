import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Reels() {

  const navigate = useNavigate();

  const [likes, setLikes] = useState({

    1: 120,
    2: 85,
    3: 230,

  });

  const reels = [

    {
      id: 1,

      username: "Teja818",

      caption:
        "Building a MERN Social Media App 🚀",

      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 2,

      username: "Alex",

      caption:
        "Frontend animations with React ✨",

      video:
        "https://www.w3schools.com/html/movie.mp4",
    },

    {
      id: 3,

      username: "Sarah",

      caption:
        "Modern UI/UX design inspiration 🎨",

      video:
        "https://www.w3schools.com/html/mov_bbb.mp4",
    },

  ];

  const handleLike = (id) => {

    setLikes({

      ...likes,

      [id]: likes[id] + 1,

    });

  };

  const handleComment = () => {

    navigate("/messenger");

  };

  const handleShare = () => {

    navigator.clipboard.writeText(
      window.location.href
    );

    alert("Reel link copied 🔥");

  };

  return (

    <div className="space-y-10">

      {reels.map((reel) => (

        <div
          key={reel.id}
          className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl"
        >

          {/* HEADER */}

          <div className="flex items-center gap-4 p-5">

            <img
              src={`https://i.pravatar.cc/100?img=${reel.id + 20}`}
              alt="profile"
              className="w-14 h-14 rounded-full"
            />

            <div>

              <h2 className="text-white text-2xl font-bold">

                {reel.username}

              </h2>

              <p className="text-gray-400">

                Reel Creator 🎬

              </p>

            </div>

          </div>

          {/* VIDEO */}

          <video
            controls
            className="w-full h-[650px] object-cover bg-black"
          >

            <source
              src={reel.video}
              type="video/mp4"
            />

          </video>

          {/* DESCRIPTION */}

          <div className="p-5">

            <p className="text-white text-xl">

              {reel.caption}

            </p>

            {/* BUTTONS */}

            <div className="flex gap-5 mt-5 flex-wrap">

              {/* LIKE */}

              <button
                onClick={() =>
                  handleLike(reel.id)
                }
                className="bg-pink-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-pink-400 transition"
              >

                ❤️ {likes[reel.id]} Likes

              </button>

              {/* COMMENT */}

              <button
                onClick={handleComment}
                className="bg-slate-800 text-white px-5 py-3 rounded-xl hover:bg-slate-700 transition"
              >

                💬 Comment

              </button>

              {/* SHARE */}

              <button
                onClick={handleShare}
                className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold hover:bg-cyan-400 transition"
              >

                🔥 Share

              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  );
}

export default Reels;