import React, { useEffect, useState } from 'react';

const VideoDelete = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://backend-alaa.onrender.com/api/videos'); // Fetch videos from backend
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
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

  const deleteVideo = async (publicId) => {
    try {
      const response = await fetch(`https://backend-alaa.onrender.com/api/videos/${publicId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete video');
      }

      // Remove the deleted video from the state
      setVideos((prevVideos) => prevVideos.filter((video) => video.public_id !== publicId));
      alert('Video deleted successfully.');
    } catch (err) {
      alert('Error deleting video: ' + err.message);
    }
  };

  if (loading) return <p>Loading videos...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      {videos.map((video) => (
        <div
          key={video.public_id}
          style={{
            textAlign: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '10px',
            marginBottom: '20px', // Space between videos
          }}
        >
          <h3>{video.display_name || video.public_id}</h3>
          <video controls style={{ width: '100%', borderRadius: '8px' }}>
            <source src={video.secure_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            onClick={() => deleteVideo(video.public_id)}
            style={{
              marginTop: '10px',
              padding: '8px 12px',
              backgroundColor: '#e74c3c',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default VideoDelete;
