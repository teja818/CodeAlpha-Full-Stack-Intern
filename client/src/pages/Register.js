import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [username, setUsername] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword,
    setConfirmPassword] = useState("");

  const handleRegister = () => {

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {

      alert("Please fill all fields ❌");

      return;
    }

    if (
      password !== confirmPassword
    ) {

      alert("Passwords do not match ❌");

      return;
    }

    navigate("/login");

  };

  return (

    <div className="bg-black min-h-screen flex items-center justify-center px-6">

      <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl w-full max-w-2xl">

        <h2 className="text-5xl font-bold text-white text-center">

          Register

        </h2>

        <p className="text-gray-400 text-center mt-4">

          Create your SocialApp account 🚀

        </p>

        <div className="space-y-6 mt-10">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="w-full bg-slate-800 p-5 rounded-2xl outline-none text-white"
          />

          <input
            type="email"
            placeholder="Email Address"
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

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(
                e.target.value
              )
            }
            className="w-full bg-slate-800 p-5 rounded-2xl outline-none text-white"
          />

          <button
            onClick={handleRegister}
            className="w-full bg-cyan-500 text-black p-5 rounded-2xl font-bold text-xl hover:bg-cyan-400 transition"
          >

            Register

          </button>

        </div>

        <p className="text-gray-400 text-center mt-8">

          Already have an account?

          <Link
            to="/login"
            className="text-cyan-400 ml-2"
          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );
}

export default Register;