import React from "react";
import { useNavigate } from "react-router-dom";

function Messenger() {

  const navigate = useNavigate();

  const users = [
    "Alex",
    "Sarah",
    "John",
  ];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <h2 className="text-3xl font-bold text-white mb-6">
        Messenger 💬
      </h2>

      <div className="space-y-4">

        {users.map((user, index) => (

          <div
            key={index}
            className="flex justify-between items-center bg-slate-800 p-4 rounded-2xl"
          >

            <div className="flex items-center gap-4">

              <img
                src={`https://i.pravatar.cc/100?img=${index + 20}`}
                alt="user"
                className="w-14 h-14 rounded-full"
              />

              <h3 className="text-white font-bold text-xl">
                {user}
              </h3>

            </div>

            <button
              onClick={() => navigate("/messenger")}
              className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold"
            >
              Chat
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Messenger;