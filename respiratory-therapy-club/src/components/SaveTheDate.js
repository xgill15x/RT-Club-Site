import React from "react";

const SaveTheDate = ({ events }) => {
  return (
    <div className="bg-white text-black py-6 px-4 rounded-lg shadow-lg w-full lg:w-1/2 max-h-[30rem] overflow-hidden">
      <h3 className="text-2xl font-bold mb-4">Upcoming Events</h3>
      <div className="overflow-y-auto max-h-[calc(30rem-4rem)]">
        {events.length > 0 ? (
          events.map((event, index) => (
            <div key={index} className="mb-6">
              <h4 className="text-xl font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-700">{event.date}</p>
              <p className="text-base mt-2">{event.description}</p>
            </div>
          ))
        ) : (
          <p>No upcoming events at the moment. Stay tuned!</p>
        )}
      </div>
    </div>
  );
};

export default SaveTheDate;
