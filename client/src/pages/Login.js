import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const handleLogin = () => {

    if (
      email === "admin@gmail.com" &&
      password === "123456"
    ) {

      navigate("/home");

    } else {

      alert("Invalid Credentials ❌");

    }

  };

  return (

    <div className="bg-black min-h-screen flex items-center justify-center px-6">

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl w-full">

        {/* LEFT */}

        <div>

          <h1 className="text-7xl font-bold text-cyan-400">

            SocialApp

          </h1>

          <p className="text-gray-400 text-2xl mt-8 leading-relaxed">

            Connect with friends,
            share moments, explore reels,
            chat instantly and experience
            a modern social media platform.

          </p>

        </div>

        {/* RIGHT */}

        <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-5xl font-bold text-white text-center">

            Login

          </h2>

          <p className="text-gray-400 text-center mt-4">

            Welcome back 👋

          </p>

          <div className="space-y-6 mt-10">

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full bg-slate-800 p-5 rounded-2xl outline-none text-white"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full bg-slate-800 p-5 rounded-2xl outline-none text-white"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-cyan-500 text-black p-5 rounded-2xl font-bold text-xl hover:bg-cyan-400 transition"
            >

              Login

            </button>

          </div>

          <p className="text-gray-400 text-center mt-8">

            Don't have an account?

            <Link
              to="/register"
              className="text-cyan-400 ml-2"
            >

              Register

            </Link>

          </p>

        </div>

      </div>

    </div>

  );
}

export default Login;