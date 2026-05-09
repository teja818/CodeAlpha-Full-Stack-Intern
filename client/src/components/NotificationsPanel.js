import React from "react";

import { useNavigate } from "react-router-dom";

function NotificationsPanel() {

  const navigate = useNavigate();

  const notifications = [

    {
      id: 1,
      text: "Alex liked your post ❤️",
      time: "2 mins ago",
    },

    {
      id: 2,
      text: "Sarah started following you 👥",
      time: "10 mins ago",
    },

    {
      id: 3,
      text: "John commented on your reel 💬",
      time: "30 mins ago",
    },

    {
      id: 4,
      text: "Emma shared your post 🔥",
      time: "1 hour ago",
    },

  ];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">

          Notifications 🔔

        </h2>

        <button
          onClick={() =>
            navigate("/notifications")
          }
          className="bg-pink-500 text-white px-4 py-2 rounded-xl font-bold"
        >

          4 New

        </button>

      </div>

      <div className="space-y-4">

        {notifications.map((item) => (

          <div
            key={item.id}
            onClick={() =>
              navigate("/notifications")
            }
            className="bg-slate-800 p-5 rounded-2xl cursor-pointer hover:bg-slate-700 transition"
          >

            <h3 className="text-white font-semibold text-lg">

              {item.text}

            </h3>

            <p className="text-gray-400 mt-2">

              {item.time}

            </p>

          </div>

        ))}

      </div>

    </div>

  );
}

export default NotificationsPanel;