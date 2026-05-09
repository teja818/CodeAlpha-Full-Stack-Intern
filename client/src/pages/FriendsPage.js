import React, { useState } from "react";

function FriendsPage() {

  const [friends, setFriends] = useState([

    {
      id: 1,
      name: "Alex",
      followers: 1200,
      following: false,
      bio: "Frontend Developer 💻",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      id: 2,
      name: "Sarah",
      followers: 980,
      following: false,
      bio: "Cybersecurity Analyst 🔐",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },

    {
      id: 3,
      name: "John",
      followers: 2000,
      following: false,
      bio: "AI Engineer 🤖",
      image:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },

    {
      id: 4,
      name: "Sophia",
      followers: 4300,
      following: false,
      bio: "UI/UX Designer 🎨",
      image:
        "https://randomuser.me/api/portraits/women/65.jpg",
    },

    {
      id: 5,
      name: "David",
      followers: 3500,
      following: false,
      bio: "Ethical Hacker 🛡️",
      image:
        "https://randomuser.me/api/portraits/men/52.jpg",
    },

    {
      id: 6,
      name: "Emma",
      followers: 1700,
      following: false,
      bio: "Content Creator 🎬",
      image:
        "https://randomuser.me/api/portraits/women/12.jpg",
    },

  ]);

  // FOLLOW SYSTEM

  const handleFollow = (id) => {

    const updatedFriends =
      friends.map((friend) => {

        if (friend.id === id) {

          return {

            ...friend,

            following: !friend.following,

            followers: friend.following
              ? friend.followers - 1
              : friend.followers + 1,

          };

        }

        return friend;

      });

    setFriends(updatedFriends);

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold mb-10">

        Friends 👥

      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {friends.map((friend) => (

          <div
            key={friend.id}
            className="bg-slate-900 p-10 rounded-3xl text-center hover:scale-105 transition duration-300"
          >

            <img
              src={friend.image}
              alt="friend"
              className="w-36 h-36 rounded-full mx-auto mb-6"
            />

            <h1 className="text-4xl font-bold mb-3">

              {friend.name}

            </h1>

            <p className="text-gray-400 text-xl mb-3">

              {friend.bio}

            </p>

            <p className="text-2xl mb-8">

              {friend.followers} Followers

            </p>

            <button
              onClick={() =>
                handleFollow(friend.id)
              }
              className={`px-10 py-4 rounded-2xl text-xl font-bold transition ${
                friend.following
                  ? "bg-red-500 hover:bg-red-400"
                  : "bg-cyan-500 hover:bg-cyan-400 text-black"
              }`}
            >

              {friend.following
                ? "Following"
                : "Follow"}

            </button>

          </div>

        ))}

      </div>

    </div>

  );
}

export default FriendsPage;