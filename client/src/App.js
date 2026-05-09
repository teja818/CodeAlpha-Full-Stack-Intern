import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import MessengerPage from "./pages/MessengerPage";
import NotificationsPage from "./pages/NotificationsPage";
import ReelsPage from "./pages/ReelsPage";
import FriendsPage from "./pages/FriendsPage";
import VideoCallPage from "./pages/VideoCallPage";
import CreatePost from "./pages/CreatePost";
import EditProfile from "./pages/EditProfile";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <Navigate to="/login" />
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/edit-profile"
          element={<EditProfile />}
        />

        <Route
          path="/messenger"
          element={<MessengerPage />}
        />

        <Route
          path="/notifications"
          element={<NotificationsPage />}
        />

        <Route
          path="/reels"
          element={<ReelsPage />}
        />

        <Route
          path="/friends"
          element={<FriendsPage />}
        />

        <Route
          path="/video-call"
          element={<VideoCallPage />}
        />

        <Route
          path="/create-post"
          element={<CreatePost />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;