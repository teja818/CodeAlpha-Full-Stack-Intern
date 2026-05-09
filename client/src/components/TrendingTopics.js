import React from "react";

import { useNavigate } from "react-router-dom";

function TrendingTopics() {

  const navigate = useNavigate();

  const topics = [

    "#MERNStack",
    "#ReactJS",
    "#WebDevelopment",
    "#JavaScript",
    "#UIUX",

  ];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">

          Trending Topics 🔥

        </h2>

        <button
          onClick={() =>
            navigate("/explore")
          }
          className="text-pink-500 font-bold"
        >

          View All

        </button>

      </div>

      <div className="space-y-4">

        {topics.map((topic, index) => (

          <div
            key={index}
            onClick={() =>
              navigate("/explore")
            }
            className="bg-slate-800 p-5 rounded-2xl cursor-pointer hover:bg-slate-700 transition"
          >

            <h3 className="text-pink-500 text-2xl font-bold">

              {topic}

            </h3>

            <p className="text-gray-400 mt-2">

              {Math.floor(
                Math.random() * 300
              )}K Posts

            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default TrendingTopics;