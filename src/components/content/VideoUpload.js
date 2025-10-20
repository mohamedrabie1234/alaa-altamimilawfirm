import React, { useState } from "react";

const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0); // Track progress
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type.split("/")[0] !== "video") {
        setError("Invalid file type. Only video files are allowed.");
        return;
      }
      setVideoFile(selectedFile);
      setError("");
    } else {
      setError("No file selected.");
    }
  };

  const handleUpload = async () => {
    if (!videoFile) {
      setError("Please select a video file to upload.");
      return;
    }

    setLoading(true);
    setProgress(0);
    setError("");
    const formData = new FormData();
    formData.append("file", videoFile);
    formData.append("upload_preset", "Alaa_law"); 

    try {
      const xhr = new XMLHttpRequest();

      xhr.open("POST", `https://api.cloudinary.com/v1_1/dsy7gxgc4/video/upload`);

      // Update progress
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setProgress(percentComplete);
        }
      };

      xhr.onload = () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUploadUrl(response.secure_url);
          setVideoFile(null);
        } else {
          throw new Error("Upload failed. Please try again.");
        }
        setLoading(false);
        setProgress(0);
      };

      xhr.onerror = () => {
        setError("An error occurred during upload. Please try again.");
        setLoading(false);
        setProgress(0);
      };

      xhr.send(formData);
    } catch (err) {
      setError(err.message || "Error uploading video.");
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Upload Video
      </h2>
      {/* File Input */}
      <div className="mb-4">
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
      {/* Error Message */}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {/* Upload Button */}
      <button
        onClick={handleUpload}
        disabled={loading}
        className={`w-full py-2 rounded-lg text-white font-semibold ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
        }`}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>
      {/* Progress Bar */}
      {loading && (
        <div className="w-full bg-gray-200 rounded-lg mt-4">
          <div
            className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      )}
      {/* Upload Success */}
      {uploadUrl && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Uploaded Video:
          </h3>
          <a
            href={uploadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline break-all"
          >
            {uploadUrl}
          </a>
          <video
            controls
            src={uploadUrl}
            className="w-full mt-4 rounded-lg shadow"
          />
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
