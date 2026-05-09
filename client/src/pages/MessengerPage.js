import React, { useState } from "react";

function MessengerPage() {

  const users = [

    {
      name: "Alex",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      name: "Sarah",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },

    {
      name: "John",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

  ];

  const [selectedUser, setSelectedUser] =
    useState(users[0]);

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const sendMessage = () => {

    if (!message) return;

    const newMessage = {

      text: message,
      sender: "me",

    };

    setMessages([...messages, newMessage]);

    setMessage("");

    setTimeout(() => {

      setMessages((prev) => [

        ...prev,

        {
          text: "Hello Teja 👋",
          sender: "bot",
        },

      ]);

    }, 1000);

  };

  return (

    <div className="min-h-screen bg-black text-white flex">

      {/* USERS */}

      <div className="w-[30%] bg-slate-900 p-5 border-r border-slate-800">

        <h1 className="text-4xl font-bold mb-8">

          Messenger 💬

        </h1>

        <div className="space-y-5">

          {users.map((user, index) => (

            <div
              key={index}
              onClick={() =>
                setSelectedUser(user)
              }
              className="bg-slate-800 p-4 rounded-2xl flex items-center gap-4 cursor-pointer hover:bg-slate-700 transition"
            >

              <img
                src={user.image}
                alt="user"
                className="w-16 h-16 rounded-full"
              />

              <h2 className="text-2xl font-bold">

                {user.name}

              </h2>

            </div>

          ))}

        </div>

      </div>

      {/* CHAT SECTION */}

      <div className="flex-1 flex flex-col">

        {/* TOP */}

        <div className="bg-slate-900 p-5 flex items-center gap-4 border-b border-slate-800">

          <img
            src={selectedUser.image}
            alt="user"
            className="w-16 h-16 rounded-full"
          />

          <div>

            <h1 className="text-3xl font-bold">

              {selectedUser.name}

            </h1>

            <p className="text-green-400">

              Online

            </p>

          </div>

        </div>

        {/* CHAT */}

        <div className="flex-1 p-6 overflow-y-auto space-y-4">

          {messages.map((msg, index) => (

            <div
              key={index}
              className={`max-w-[400px] p-4 rounded-2xl ${
                msg.sender === "me"
                  ? "bg-cyan-500 text-black ml-auto"
                  : "bg-slate-800"
              }`}
            >

              {msg.text}

            </div>

          ))}

        </div>

        {/* INPUT */}

        <div className="bg-slate-900 p-5 flex gap-4">

          <input
            type="text"
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            placeholder="Type Message..."
            className="flex-1 bg-slate-800 p-4 rounded-2xl outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-cyan-500 text-black px-8 rounded-2xl font-bold"
          >

            Send

          </button>

        </div>

      </div>

    </div>

  );
}

export default MessengerPage;