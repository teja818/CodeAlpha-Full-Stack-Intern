import React, { useRef, useState } from "react";

function StoryUpload() {

  const [story, setStory] = useState(null);

  const [stories, setStories] = useState([]);

  const [message, setMessage] = useState("");

  const fileInputRef = useRef();

  const handleStoryUpload = () => {

    if (!story) {

      setMessage("Please Select Story");

      return;

    }

    const newStory = URL.createObjectURL(story);

    setStories([...stories, newStory]);

    setMessage("Story Uploaded Successfully");

    setStory(null);

    fileInputRef.current.value = "";

  };

  return (

    <div className="bg-slate-900 p-6 rounded-3xl shadow-xl">

      <h1 className="text-4xl text-white font-bold mb-6">

        Upload Story 📸

      </h1>

      <input
        ref={fileInputRef}
        type="file"
        onChange={(e) =>
          setStory(e.target.files[0])
        }
        className="text-white mb-6"
      />

      {story && (

        <img
          src={URL.createObjectURL(story)}
          alt="story"
          className="w-full h-[350px] object-cover rounded-3xl mb-6"
        />

      )}

      <button
        onClick={handleStoryUpload}
        className="bg-cyan-500 text-black w-full py-4 rounded-2xl font-bold hover:bg-cyan-400 transition"
      >

        Upload Story

      </button>

      {/* MESSAGE */}

      {message && (

        <p className="text-green-400 mt-5 text-center text-xl font-bold">

          {message}

        </p>

      )}

      {/* STORIES */}

      <div className="flex gap-5 overflow-x-auto mt-8">

        {stories.map((item, index) => (

          <div
            key={index}
            className="min-w-[120px]"
          >

            <img
              src={item}
              alt="story"
              className="w-[120px] h-[200px] object-cover rounded-2xl border-4 border-cyan-500"
            />

          </div>

        ))}

      </div>

    </div>

  );
}

export default StoryUpload;