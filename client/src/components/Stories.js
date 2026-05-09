import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Stories() {

  const navigate = useNavigate();

  const [viewedStory, setViewedStory] =
    useState(null);

  const stories = [

    {
      id: 1,
      name: "Alex",
      image:
        "https://i.pravatar.cc/100?img=60",
    },

    {
      id: 2,
      name: "Sarah",
      image:
        "https://i.pravatar.cc/100?img=61",
    },

  ];

  const openStory = (name) => {

    setViewedStory(name);

    navigate("/profile");

  };

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">

          Stories 📸

        </h2>

        <button
          onClick={() =>
            navigate("/profile")
          }
          className="bg-pink-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-pink-400 transition"
        >

          + Add Story

        </button>

      </div>

      <div className="flex gap-6 overflow-x-auto">

        {stories.map((story) => (

          <div
            key={story.id}
            onClick={() =>
              openStory(story.name)
            }
            className="cursor-pointer text-center"
          >

            <div
              className={`p-1 rounded-full ${
                viewedStory === story.name
                  ? "bg-gray-500"
                  : "bg-gradient-to-r from-pink-500 to-yellow-500"
              }`}
            >

              <img
                src={story.image}
                alt="story"
                className="w-24 h-24 rounded-full border-4 border-slate-900"
              />

            </div>

            <p className="text-white mt-3 font-semibold">

              {story.name}

            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Stories;