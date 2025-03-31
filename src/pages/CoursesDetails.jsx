import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CourseDetail() {
  const { slug, courseId } = useParams();
  const [courseItems, setCourseItems] = useState([]);
  const [itemDetails, setItemDetails] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [courseName, setCourseName] = useState('');
  const [error, setError] = useState(null);

  const API_KEY = 'gha36415va3109x463dhz21sfyylkp0i7ol10avh16ic7blnttaemajm80jqsb94shfwgy1ox5agx5lt0sxanbeei7go44auo9e1o4knhfbyde6tr02oydt66deppzka';

  useEffect(() => {
    const fetchCourseItems = async () => {
      try {
        const response = await fetch('https://backend.codedamn.com/api/public/get-published-course-information', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'FERMION-API-KEY': API_KEY
          },
          body: JSON.stringify({
            data: [{
              data: {
                fermionCourseId: courseId,
                fermionSchoolId: "676a898cdfa6e90ee258d96d"
              }
            }]
          })
        });
        const data = await response.json();

        if (data[0]?.output?.status === 'error') {
          throw new Error(data[0].output.errorMessage);
        }

        const items = data[0].output.data.response.courseItems;
        console.log('Fetched course items:', items); // Debug log to check data
        setCourseItems(items);
        setCourseName(data[0].output.data.response.courseName || 'Course Details');
        setLoading(false);
      } catch (error) {
        console.error('Error fetching course items:', error);
        setError(error.message || 'Failed to load course items');
        setLoading(false);
      }
    };

    fetchCourseItems();
  }, [courseId, slug]);

  const fetchItemDetails = async (courseItemId) => {
    try {
      const response = await fetch('https://backend.codedamn.com/api/public/get-course-item-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'FERMION-API-KEY': API_KEY
        },
        body: JSON.stringify({
          data: [{ data: { courseItemId } }]
        })
      });
      const data = await response.json();

      if (data[0]?.output?.status === 'error') {
        throw new Error(data[0].output.errorMessage);
      }

      setItemDetails(prev => ({
        ...prev,
        [courseItemId]: data[0].output.data.courseItemData
      }));
    } catch (error) {
      console.error(`Error fetching details for item ${courseItemId}:`, error);
      setItemDetails(prev => ({
        ...prev,
        [courseItemId]: { error: error.message || 'Failed to load item details' }
      }));
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    if (!itemDetails[item.courseItemId]) {
      fetchItemDetails(item.courseItemId);
    }
  };

  const getItemTitle = (item) => {
    switch (item.type) {
      case 'Quiz':
        return item.quizTitle || 'Untitled Quiz';
      case 'LiveEvent':
        return item.liveEventTitle || 'Untitled Live Event';
      case 'Article':
        return item.articleTitle || 'Untitled Article';
      case 'Video':
        return item.title || 'Untitled Video'; // Use 'title' for Video type
      default:
        return 'Untitled';
    }
  };

  const renderContent = (item, details) => {
    if (!details) return <p>Loading content... Click an item to view details.</p>;
    if (details.error) return <p className="text-red-600">{details.error}</p>;

    switch (item.type) {
      case 'Quiz':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Type: Quiz</h2>
            <h3 className="text-xl font-semibold">{details.quizTitle}</h3>
            <p className="text-gray-600">{details.quizDescription || 'No description available'}</p>
            <div>
              <p><strong>Max Score:</strong> {details.quizMaxScore}</p>
              <p><strong>Created At:</strong> {new Date(details.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(details.updatedAt).toLocaleString()}</p>
            </div>
            {details.questions.map((question, index) => (
              <div key={question.questionUniqueId} className="border-b pb-4">
                <h4 className="text-lg font-semibold mb-2">
                  {index + 1}. <span dangerouslySetInnerHTML={{ __html: question.htmlTitle }} />
                </h4>
                <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: question.htmlDescription }} />
                <p><strong>Difficulty:</strong> {question.difficultyLevel}</p>
                <div className="space-y-2 mt-2">
                  {question.options.map(option => (
                    <div key={option.optionUniqueId} className="flex items-center">
                      <input
                        type="radio"
                        name={question.questionUniqueId}
                        className="mr-2"
                        disabled
                        checked={question.instructorSpecificData.correctAnswerUniqueIds.includes(option.optionUniqueId)}
                      />
                      <span dangerouslySetInnerHTML={{ __html: option.htmlText }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'LiveEvent':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Type: Live Event</h2>
            <h3 className="text-xl font-semibold">{details.title}</h3>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: details.htmlDescription || 'No description available' }} />
            <div>
              <p><strong>Created At:</strong> {new Date(details.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(details.updatedAt).toLocaleString()}</p>
            </div>
            {details.sessions && details.sessions.map(session => (
              <div key={session.liveEventSessionId} className="border-t pt-2">
                <p><strong>Start:</strong> {new Date(session.startAtIsoString).toLocaleString()}</p>
                <p><strong>Duration:</strong> {Math.floor(session.durationInSecs / 3600)}h {Math.floor((session.durationInSecs % 3600) / 60)}m</p>
                <p><strong>Status:</strong> {session.platformSpecificData.status}</p>
                {session.platformSpecificData.endedAtIso && (
                  <p><strong>Ended:</strong> {new Date(session.platformSpecificData.endedAtIso).toLocaleString()}</p>
                )}
              </div>
            ))}
          </div>
        );

      case 'Article':
        return (
          <div className="space-y-4 prose max-w-none">
            <h2 className="text-2xl font-bold">Type: Article</h2>
            <h3 className="text-xl font-semibold">{item.articleTitle}</h3>
            <div dangerouslySetInnerHTML={{ __html: details.htmlDescription || 'Article content not available' }} />
            <div>
              <p><strong>Created At:</strong> {new Date(details.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(details.updatedAt).toLocaleString()}</p>
            </div>
          </div>
        );

      case 'Video':
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Type: Video</h2>
            <h3 className="text-xl font-semibold">{details.title}</h3>
            <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: details.htmlDescription || 'No description available' }} />
            <div>
              <p><strong>Created At:</strong> {new Date(details.createdAt).toLocaleString()}</p>
              <p><strong>Updated At:</strong> {new Date(details.updatedAt).toLocaleString()}</p>
              {details.videoData && (
                <>
                  <p><strong>Video Name:</strong> {details.videoData.videoName}</p>
                  <p><strong>Availability:</strong> {details.videoData.availabilityState}</p>
                  {details.videoData.availabilityState === 'ready-for-playback' ? (
                    <div className="mt-4">
                      <p className="text-gray-600">Video Player (URL not provided in response):</p>
                      <video controls className="w-full rounded-lg" disabled>
                        <source src="#" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : (
                    <p className="text-gray-600">Video not available for playback</p>
                  )}
                </>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Type: {item.type}</h2>
            <h3 className="text-xl font-semibold">{getItemTitle(item)}</h3>
            <p className="text-gray-600">No specific content type defined</p>
          </div>
        );
    }
  };

  if (loading) return <div className="p-6">Loading course details...</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!courseItems.length) return <div className="p-6">No course items found</div>;

  // Group items by week
  const itemsByWeek = courseItems.reduce((acc, item) => {
    const week = item.overrideSectionName || 'Uncategorized';
    if (!acc[week]) acc[week] = [];
    acc[week].push(item);
    return acc;
  }, {});

  return (
    <div className="p-6 flex gap-6">
      {/* Sidebar */}
      <div className="w-1/4 bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-xl font-bold mb-4">Course Content</h2>
        {Object.entries(itemsByWeek).map(([week, weekItems]) => (
          <div key={week} className="mb-6">
            <h3 className="text-lg font-semibold mb-2">{week}</h3>
            <ul className="space-y-2 mt-2">
              {weekItems.map((item, index) => (
                <li
                  key={item.courseItemId}
                  className={`p-2 rounded cursor-pointer ${selectedItem?.courseItemId === item.courseItemId ? 'bg-blue-100' : ''}`}
                  onClick={() => handleItemClick(item)}
                >
                  {index + 1}. {item.type}: {getItemTitle(item)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="w-3/4 bg-white rounded-lg shadow-sm p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{courseName}</h1>
        {selectedItem ? (
          renderContent(selectedItem, itemDetails[selectedItem.courseItemId])
        ) : (
          <p className="text-gray-600">Select an item from the sidebar to view details</p>
        )}
      </div>
    </div>
  );
}

export default CourseDetail;