import React from "react";

import { useNavigate } from "react-router-dom";

function Reels() {

  const navigate = useNavigate();

  const reels = [1, 2, 3, 4];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">

          Reels 🎬

        </h2>

        <button
          onClick={() =>
            navigate("/reels")
          }
          className="text-pink-500 font-bold"
        >

          View All

        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        {reels.map((item) => (

          <div
            key={item}
            onClick={() =>
              navigate("/reels")
            }
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
          >

            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
              alt="reel"
              className="h-80 w-full object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

              <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl">

                ▶

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Reels;