import React, { useState } from "react";

function EditProfile() {

  const [name, setName] = useState("Teja");

  const [bio, setBio] = useState(
    "Cybersecurity Enthusiast"
  );

  const [image, setImage] = useState("");

  const handleSave = () => {

    alert("Profile Updated Successfully");

  };

  return (

    <div className="min-h-screen bg-black text-white p-10">

      <div className="max-w-2xl mx-auto bg-slate-900 p-10 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold mb-8 text-cyan-400">

          Edit Profile

        </h1>

        <input
          type="text"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          placeholder="Username"
          className="w-full p-4 rounded-xl bg-slate-800 mb-5 outline-none"
        />

        <textarea
          value={bio}
          onChange={(e) =>
            setBio(e.target.value)
          }
          placeholder="Bio"
          className="w-full p-4 rounded-xl bg-slate-800 mb-5 outline-none"
          rows="5"
        />

        <input
          type="text"
          value={image}
          onChange={(e) =>
            setImage(e.target.value)
          }
          placeholder="Profile Image URL"
          className="w-full p-4 rounded-xl bg-slate-800 mb-5 outline-none"
        />

        <button
          onClick={handleSave}
          className="bg-cyan-500 text-black px-8 py-4 rounded-xl font-bold w-full hover:bg-cyan-400 transition"
        >

          Save Profile

        </button>

      </div>

    </div>

  );
}

export default EditProfile;