import React, { useState, useEffect } from 'react';
import { Loader, AlertCircle } from 'lucide-react';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://backend.codedamn.com/api/public/get-all-blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [{
            data: {
              fermionSchoolId: '676a898cdfa6e90ee258d96d'
            }
          }]
        }),
      });
      const result = await response.json();
      setBlogs(result[0]?.output?.data?.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      {loading ? (
        <div className="flex justify-center items-center text-indigo-500">
          <Loader className="animate-spin" size={32} />
          <span className="ml-2">Loading Blogs...</span>
        </div>
      ) : blogs.length === 0 ? (
        <div className="flex flex-col items-center text-gray-500">
          <AlertCircle size={40} />
          <h2 className="text-xl font-semibold mt-2">No Blogs Found</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-4 border border-gray-200 hover:shadow-xl transition">
              <h2 className="text-lg font-semibold mb-2">{blog.titleMarkdown || 'Untitled Blog'}</h2>
              <p className="text-sm text-gray-600">{blog.description?.substring(0, 100) || 'No description available...'}</p>
              <a 
                href={`https://learning.be-practical.com/blog/${blog.slug}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-3 text-indigo-500 hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
