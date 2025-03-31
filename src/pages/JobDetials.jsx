import React from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from '../data/dummyData';

function JobDetails() {
  const { jobId } = useParams(); // Get the job ID from the URL parameters
  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return <p className="text-center text-lg font-semibold text-red-500">Job not found.</p>;
  }

  return (
    <div className="container mx-auto p-8 bg-white shadow-md rounded-lg">
      <div className="max-w-4xl mx-auto">
        {/* Job Title and Company */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>
          <span className="text-lg text-indigo-600">{job.company}</span>
        </div>

        {/* Job Description */}
        <div className="mb-6">
          <p className="text-lg text-gray-700">{job.description}</p>
        </div>

        {/* Job Details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Job Details</h3>
          <ul className="list-none space-y-2 mt-3 text-gray-600">
            <li>
              <strong className="font-medium">Location:</strong> {job.location}
            </li>
            <li>
              <strong className="font-medium">Salary:</strong> {job.salary}
            </li>
            <li>
              <strong className="font-medium">Experience:</strong> {job.experience}
            </li>
            <li>
              <strong className="font-medium">Skills:</strong> {job.skills.join(", ")}
            </li>
            <li>
              <strong className="font-medium">Job Type:</strong> {job.type}
            </li>
            <li>
              <strong className="font-medium">Remote:</strong> {job.remote ? "Yes" : "No"}
            </li>
          </ul>
        </div>

        {/* Qualifications */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Qualifications</h3>
          <ul className="list-disc ml-6 text-gray-600">
            {job.qualifications.map((qual, index) => (
              <li key={index} className="mt-1">{qual}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Responsibilities</h3>
          <ul className="list-disc ml-6 text-gray-600">
            {job.responsibilities.map((resp, index) => (
              <li key={index} className="mt-1">{resp}</li>
            ))}
          </ul>
        </div>

        {/* Apply Button */}
        <div className="flex justify-center mb-6">
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out">
            Apply for this Job
          </button>
        </div>

        {/* Job Posted Date */}
        <div className="text-center text-sm text-gray-500">
          <p>Posted on {new Date(job.postedDate).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
