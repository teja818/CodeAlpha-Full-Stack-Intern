import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function SuggestedFriends() {

  const navigate = useNavigate();

  const [following, setFollowing] =
    useState({});

  const users = [

    "Alex",
    "Sarah",
    "John",
    "Emma",

  ];

  const toggleFollow = (name) => {

    setFollowing({

      ...following,

      [name]: !following[name],

    });

  };

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <h2 className="text-3xl font-bold text-white mb-6">

        Suggested Friends 👥

      </h2>

      <div className="space-y-5">

        {users.map((user, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-800 p-4 rounded-2xl"
          >

            <div
              onClick={() =>
                navigate("/profile")
              }
              className="flex items-center gap-4 cursor-pointer"
            >

              <img
                src={`https://i.pravatar.cc/100?img=${index + 10}`}
                alt="user"
                className="w-14 h-14 rounded-full"
              />

              <div>

                <h3 className="font-bold text-white text-xl">

                  {user}

                </h3>

                <p className="text-gray-400">

                  SocialApp User

                </p>

              </div>

            </div>

            <button
              onClick={() =>
                toggleFollow(user)
              }
              className={`px-5 py-3 rounded-xl font-bold transition ${
                following[user]
                  ? "bg-green-500 text-black"
                  : "bg-cyan-500 text-black"
              }`}
            >

              {following[user]
                ? "Following"
                : "Follow"}

            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default SuggestedFriends;