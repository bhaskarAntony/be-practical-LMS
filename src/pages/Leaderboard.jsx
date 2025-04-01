import React, { useState, useEffect } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [period, setPeriod] = useState('Today');
  const [page, setPage] = useState(1);
  const limit = 10;

  useEffect(() => {
    fetchLeaderboard();
  }, [period, page]);

  const fetchLeaderboard = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://backend.codedamn.com/api/public/get-school-leaderboard', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            data: {
              data: {
                fermionSchoolId: '676a898cdfa6e90ee258d96d',
                period,
                limit,
                offset: (page - 1) * limit,
              },
            },
          }],
        }),
      });

      const result = await response.json();
      setLeaderboard(result[0]?.output?.data?.leaderboardUsers || []);
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold p-4 rounded-md">Leaderboard</h1>
      <hr />
      
      <div className="flex justify-start space-x-4 my-6  p-2 rounded-md">
        {['AllTime','Today', 'ThisWeek', 'ThisMonth', ].map((p) => (
          <button
            key={p}
            className={`px-4 py-2  rounded transition-all duration-300 ${period === p ? 'bg-indigo-800 text-white' : 'bg-gray-200 hover:bg-indigo-700 hover:text-white'}`}
            onClick={() => { setPeriod(p); setPage(1); }}
          >
            {p}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-center text-gray-700">Loading...</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">Rank</th>
                <th className="border p-3">Name</th>
                <th className="border p-3">XP Total</th>
                <th className="border p-3">Profile</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((user) => (
                <tr key={user.fermionUserId} className="text-center hover:bg-gray-100">
                  <td className="border p-3">{user.rank}</td>
                  <td className="border p-3 font-semibold">{user.name}</td>
                  <td className="border p-3">{user.xpTotal}</td>
                  <td className="border p-3">
                    <img src={user.profilePicUrl || "https://i.pinimg.com/736x/87/14/55/8714556a52021ba3a55c8e7a3547d28c.jpg"} 
                         alt={user.name} 
                         className="w-10 h-10 rounded-full border-2 border-indigo-500 mx-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <div className="flex justify-between mt-4">
        <button 
          className={`px-4 py-2 bg-gray-300 rounded ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-400'}`}
          disabled={page === 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        >
          Previous
        </button>
        <button 
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
