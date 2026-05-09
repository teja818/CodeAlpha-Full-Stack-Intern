import React from "react";

function Explore() {

  const posts = [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    "https://images.unsplash.com/photo-1518770660439-4636190af475",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Explore 🔥</h1>

        <button className="bg-cyan-500 px-6 py-3 rounded-xl font-bold">
          Explore More
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {posts.map((post, index) => (
          <img
            key={index}
            src={post}
            alt="post"
            className="rounded-2xl h-72 w-full object-cover hover:scale-105 transition-all duration-300"
          />
        ))}

      </div>
    </div>
  );
}

export default Explore;