import React from "react";
import { useNavigate } from "react-router-dom";

function QuickActions() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 p-6 rounded-3xl text-white">
      <h2 className="text-2xl font-bold mb-6">Quick Actions ⚡</h2>

      <div className="space-y-4">

        <button
          onClick={() => navigate("/create-post")}
          className="w-full bg-cyan-500 p-4 rounded-2xl font-bold"
        >
          ➕ Create Post
        </button>

        <button
          onClick={() => alert("Story Upload Feature")}
          className="w-full bg-gray-800 p-4 rounded-2xl font-bold"
        >
          📸 Upload Story
        </button>

        <button
          onClick={() => navigate("/video-call")}
          className="w-full bg-gray-800 p-4 rounded-2xl font-bold"
        >
          🔴 Go Live
        </button>
      </div>
    </div>
  );
}

export default QuickActions;