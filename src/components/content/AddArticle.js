import React, { useState } from "react";
import { db } from "../../firebase/firebase"; // Adjust the path as necessary
import { collection, addDoc } from "firebase/firestore";

const AddArticle = () => {
  const [header, setHeader] = useState("");
  const [article, setArticle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      // Add article content to Firestore
      await addDoc(collection(db, "content"), {
        header,
        article, // New lines are preserved in the textarea value
        type: "article", // Explicitly mark the content as an article
        createdAt: new Date(),
      });

      setMessage("Article added successfully!");
      setHeader("");
      setArticle("");
    } catch (error) {
      setMessage("Error adding article: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto m-64 min-h-[720px] p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add Article</h2>
      {message && (
        <p
          className={`${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          } text-center text-sm mb-4`}
        >
          {message}
        </p>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Header Input */}
        <div>
          <label
            htmlFor="header"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Header:
          </label>
          <input
            type="text"
            id="header"
            value={header}
            onChange={(e) => setHeader(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Article Input */}
        <div>
          <label
            htmlFor="article"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Article:
          </label>
          <textarea
            id="article"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 h-40 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
          }`}
        >
          {loading ? "Saving..." : "Add Article"}
        </button>
      </form>
    </div>
  );
};

export default AddArticle;
