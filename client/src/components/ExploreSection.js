import React from "react";

function ExploreSection() {

  const images = [1,2,3,4,5,6];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-bold text-white">
          Explore 🔥
        </h2>

        <button className="bg-cyan-500 text-black px-5 py-3 rounded-xl font-bold">
          Explore More
        </button>

      </div>

      <div className="grid md:grid-cols-3 gap-5">

        {images.map((item) => (

          <img
            key={item}
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200"
            alt="explore"
            className="w-full h-64 object-cover rounded-2xl"
          />

        ))}

      </div>

    </div>
  );
}

export default ExploreSection;