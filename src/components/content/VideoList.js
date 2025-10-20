import React, { useEffect, useState } from "react";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://backend-alaa.onrender.com/api/videos"); 
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data); // Set video data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="max-w-3xl mx-auto p-4">
        <div className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center">الفيديوهات</h1>
        <div className="w-16 h-[2px] bg-br2 mb-4"></div>
      </div>
      {videos.length === 0 ? (
        <p className="text-gray-500">No videos available.</p>
      ) : (
        <ul className="space-y-6">
          {videos.map((video) => (
            <li
              key={video.public_id}
              className="bg-gray-100 p-4 rounded-lg shadow-lg"
            >
              
              <video
                controls
                src={video.secure_url}
                className="w-full rounded-lg shadow"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default VideoList;
