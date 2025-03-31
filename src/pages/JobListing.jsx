import React from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/dummyData';

function JobListing() {
  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">Job Listings</h1>
        <p className="mt-2 text-gray-600">Browse and apply for jobs that match your skills and interests</p>

        <div className="mt-6">
          <table className="min-w-full border border-gray-300 rounded-lg shadow-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-left">Job Title</th>
                <th className="px-4 py-2 text-left">Company</th>
                <th className="px-4 py-2 text-left">Location</th>
                <th className="px-4 py-2 text-left">Salary</th>
                <th className="px-4 py-2 text-left">Experience</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{job.title}</td>
                  <td className="px-4 py-2">{job.company}</td>
                  <td className="px-4 py-2">{job.location}</td>
                  <td className="px-4 py-2">{job.salary}</td>
                  <td className="px-4 py-2">{job.experience}</td>
                  <td className="px-4 py-2">
                    <Link
                      to={`/job/${job.id}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default JobListing;
