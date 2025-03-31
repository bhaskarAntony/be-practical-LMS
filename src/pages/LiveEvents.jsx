import React, { useState } from 'react';
import { Calendar, Users, Clock, Filter, Search } from 'lucide-react';
import { liveEvents } from '../data/dummyData';

function LiveEvents() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredEvents = liveEvents.filter(event => 
    (filter === 'all' || event.type.toLowerCase() === filter.toLowerCase()) &&
    (event.name.toLowerCase().includes(searchTerm.toLowerCase()) || event.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Live Events</h1>
          <p className="mt-2 text-gray-600">Join interactive sessions and workshops</p>
        </div>
        <div className="flex items-center gap-4">
          <Search className="text-gray-400" />
          <input
            type="text"
            className="border rounded-lg px-4 py-2"
            placeholder="Search events"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Filter className="text-gray-400" />
          <select
            className="border rounded-lg px-4 py-2"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Events</option>
            <option value="workshop">Workshops</option>
            <option value="webinar">Webinars</option>
            <option value="bootcamp">Bootcamps</option>
          </select>
        </div>
      </div>

      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-gray-600">Event Name</th>
            <th className="px-4 py-2 text-left text-gray-600">Type</th>
            <th className="px-4 py-2 text-left text-gray-600">Date</th>
            <th className="px-4 py-2 text-left text-gray-600">Duration</th>
            <th className="px-4 py-2 text-left text-gray-600">Instructor</th>
            <th className="px-4 py-2 text-left text-gray-600">Attendees</th>
            <th className="px-4 py-2 text-left text-gray-600">Status</th>
            <th className="px-4 py-2 text-left text-gray-600">Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map(event => (
            <tr key={event.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2">{event.name}</td>
              <td className="px-4 py-2">{event.type}</td>
              <td className="px-4 py-2">{new Date(event.date).toLocaleDateString()}</td>
              <td className="px-4 py-2">{event.duration}</td>
              <td className="px-4 py-2">{event.instructor}</td>
              <td className="px-4 py-2">{event.attendees}</td>
              <td className="px-4 py-2">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${event.status === 'Upcoming' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {event.status}
                </span>
              </td>
              <td className="px-4 py-2">
                <button 
                  onClick={() => handleEventClick(event)} 
                  className="text-indigo-600 hover:text-indigo-800">
                  {event.status === 'Upcoming' ? 'Register Now' : 'View Details'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            {selectedEvent.status === 'Upcoming' ? (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{selectedEvent.name}</h2>
                <p className="mt-2 text-gray-600">{selectedEvent.description}</p>
                <p className="mt-4 text-gray-500">Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
                <p className="mt-2 text-gray-500">Duration: {selectedEvent.duration}</p>
                <p className="mt-2 text-gray-500">Instructor: {selectedEvent.instructor}</p>

                <button
                  onClick={() => alert('Registration Successful!')}
                  className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  Confirm Registration
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">{selectedEvent.name}</h2>
                <p className="mt-2 text-gray-600">{selectedEvent.description}</p>
                <p className="mt-4 text-gray-500">Date: {new Date(selectedEvent.date).toLocaleDateString()}</p>
                <p className="mt-2 text-gray-500">Duration: {selectedEvent.duration}</p>
                <p className="mt-2 text-gray-500">Instructor: {selectedEvent.instructor}</p>
              </div>
            )}

            <button
              onClick={closeModal}
              className="mt-4 w-full bg-gray-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LiveEvents;
