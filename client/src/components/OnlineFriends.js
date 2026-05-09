import React from "react";

import { useNavigate } from "react-router-dom";

function OnlineFriends() {

  const navigate = useNavigate();

  const users = [

    "Alex",
    "Sarah",
    "John",
    "Emma",
    "David",

  ];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">

          Online Friends 🟢

        </h2>

        <div className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">

          5 Online

        </div>

      </div>

      <div className="space-y-4">

        {users.map((user, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-800 p-4 rounded-2xl"
          >

            <div className="flex items-center gap-4">

              <div className="relative">

                <img
                  src={`https://i.pravatar.cc/100?img=${index + 40}`}
                  alt="friend"
                  className="w-14 h-14 rounded-full"
                />

                <div className="w-4 h-4 bg-green-500 rounded-full absolute bottom-0 right-0 border-2 border-slate-900"></div>

              </div>

              <div>

                <h3 className="text-white font-bold text-xl">

                  {user}

                </h3>

                <p className="text-gray-400">

                  Active now

                </p>

              </div>

            </div>

            <button
              onClick={() =>
                navigate("/messenger")
              }
              className="bg-pink-500 text-white px-5 py-3 rounded-xl font-bold hover:bg-pink-400 transition"
            >

              Message

            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default OnlineFriends;