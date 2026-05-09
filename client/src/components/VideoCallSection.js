import React from "react";

function VideoCallSection() {

  return (

    <div className="bg-slate-900 rounded-3xl p-10 text-center shadow-2xl">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-5xl font-bold text-white">

          Video Call 📹

        </h1>

        <div className="bg-green-500 text-black px-4 py-2 rounded-xl font-bold">

          Online

        </div>

      </div>

      <div className="bg-black rounded-3xl h-[500px] flex flex-col items-center justify-center">

        <h2 className="text-5xl text-white font-bold">

          Start a Call

        </h2>

        <p className="text-gray-400 mt-4 text-xl">

          Connect with friends instantly 🚀

        </p>

      </div>

      <button className="bg-green-500 text-black px-10 py-5 rounded-2xl mt-8 text-2xl font-bold hover:bg-green-400 transition">

        📞 Start Call

      </button>

    </div>
  );
}

export default VideoCallSection;