import React from "react";

import Navbar from "../components/Navbar";

import NotificationsPanel from "../components/NotificationsPanel";

function NotificationsPage() {

  return (

    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="max-w-5xl mx-auto p-8">

        <NotificationsPanel />

      </div>

    </div>

  );
}

export default NotificationsPage;