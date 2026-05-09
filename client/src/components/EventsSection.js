import React from "react";

function EventsSection() {

  const events = [
    {
      id: 1,
      title: "React Conference",
      date: "12 Aug 2026",
    },
    {
      id: 2,
      title: "Cyber Security Meetup",
      date: "18 Aug 2026",
    },
    {
      id: 3,
      title: "AI Workshop",
      date: "25 Aug 2026",
    },
  ];

  return (

    <div className="bg-slate-900 rounded-3xl p-6 shadow-2xl">

      <h2 className="text-3xl font-bold text-white mb-6">
        Upcoming Events 📅
      </h2>

      <div className="space-y-4">

        {events.map((event) => (

          <div
            key={event.id}
            className="bg-slate-800 p-5 rounded-2xl"
          >

            <h3 className="text-xl font-bold text-white">
              {event.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {event.date}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default EventsSection;