import React, { useState } from "react";

function ImageUploadPost({ addNewPost }) {

  const [caption, setCaption] = useState("");

  const handleUpload = () => {

    if (!caption) return;

    addNewPost({
      id: Date.now(),
      username: "Teja818",
      time: "Just now",
      caption,
      profileImage:
        "https://i.pravatar.cc/100?img=12",
      postImage:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
      likes: 0,
    });

    setCaption("");
  };

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <h2 className="text-3xl font-bold text-white mb-6">
        Create Image Post 📸
      </h2>

      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full bg-slate-800 p-5 rounded-2xl outline-none text-white h-40"
      />

      <input
        type="file"
        className="mt-5 text-white"
      />

      <button
        onClick={handleUpload}
        className="w-full bg-cyan-500 text-black py-4 rounded-2xl mt-6 font-bold"
      >
        Upload Post
      </button>

    </div>
  );
}

export default ImageUploadPost;