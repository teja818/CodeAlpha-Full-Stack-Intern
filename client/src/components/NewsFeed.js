import React, { useState } from "react";

import PostCard from "./PostCard";

function NewsFeed() {

  const [posts] = useState([

    {
      id: 1,
      username: "Teja818",
      time: "2 hours ago",
      caption: "Building my MERN Social Media Platform 🚀",
      profileImage:
        "https://i.pravatar.cc/100?img=12",
      postImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      likes: 120,
    },

    {
      id: 2,
      username: "Alex",
      time: "5 hours ago",
      caption: "Frontend development is amazing ❤️",
      profileImage:
        "https://i.pravatar.cc/100?img=22",
      postImage:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      likes: 87,
    },

    {
      id: 3,
      username: "Sarah",
      time: "1 day ago",
      caption: "UI/UX design inspiration ✨",
      profileImage:
        "https://i.pravatar.cc/100?img=32",
      postImage:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200",
      likes: 240,
    },

  ]);

  return (

    <div className="space-y-8">

      {posts.map((post) => (

        <PostCard
          key={post.id}
          post={post}
        />

      ))}

    </div>

  );
}

export default NewsFeed;