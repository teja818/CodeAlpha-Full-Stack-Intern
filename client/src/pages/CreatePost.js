import React, { useState } from "react";

function CreatePost() {

  const [caption, setCaption] = useState("");

  const [image, setImage] = useState(null);

  const handlePost = () => {

    if (!image || !caption) {

      alert("Please Fill All Fields");

      return;

    }

    alert("Post Created Successfully");

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-cyan-400 mb-8">

          Create Post

        </h1>

        <input
          type="file"
          onChange={(e) =>
            setImage(e.target.files[0])
          }
          className="mb-5"
        />

        {image && (

          <img
            src={URL.createObjectURL(image)}
            alt="preview"
            className="w-full h-[350px] object-cover rounded-3xl mb-5"
          />

        )}

        <textarea
          placeholder="Write Caption..."
          value={caption}
          onChange={(e) =>
            setCaption(e.target.value)
          }
          className="w-full bg-slate-800 p-5 rounded-2xl mb-5 outline-none"
          rows="5"
        />

        <button
          onClick={handlePost}
          className="bg-cyan-500 text-black w-full py-4 rounded-2xl font-bold hover:bg-cyan-400 transition"
        >

          Post Now

        </button>

      </div>

    </div>

  );
}

export default CreatePost;