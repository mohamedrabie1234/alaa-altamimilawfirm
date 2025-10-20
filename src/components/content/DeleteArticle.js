import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase"; // Adjust the path as necessary
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const DeleteArticle = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch articles from Firestore to allow selection
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "content"));
        const articlesList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setArticles(articlesList);
      } catch (error) {
        setMessage("Error fetching articles: " + error.message);
      }
    };
    fetchArticles();
  }, []);

  // Handle delete operation
  const handleDelete = async () => {
    if (!selectedArticle) {
      setMessage("Please select an article to delete.");
      return;
    }

    setLoading(true);
    setMessage("");
    
    try {
      // Delete the selected article from Firestore
      await deleteDoc(doc(db, "content", selectedArticle.id));

      // Remove the article from the local state after successful deletion
      setArticles((prevArticles) =>
        prevArticles.filter((article) => article.id !== selectedArticle.id)
      );
      setMessage("تم حذف المقال بنجاح");
      setSelectedArticle(null); // Reset selection
    } catch (error) {
      setMessage("Error deleting article: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        حذف المقال
      </h2>
      {message && (
        <p
          className={`${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          } text-center text-sm mb-4`}
        >
          {message}
        </p>
      )}

      {/* Article Selection */}
      <div>
        <label
          htmlFor="article"
          className="block text-sm font-medium text-gray-600 mb-1"
        >
          اختر المقال الذي تريد حذفه
        </label>
        <select
          id="article"
          value={selectedArticle ? selectedArticle.id : ""}
          onChange={(e) =>
            setSelectedArticle(
              articles.find((article) => article.id === e.target.value) || null
            )
          }
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="">اختر المقال</option>
          {articles.map((article) => (
            <option key={article.id} value={article.id}>
              {article.header}
            </option>
          ))}
        </select>
      </div>

      {/* Delete Button */}
      <div className="mt-4">
        <button
          onClick={handleDelete}
          disabled={loading || !selectedArticle}
          className={`w-full py-2 rounded-lg text-white font-semibold ${
            loading || !selectedArticle
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-400"
          }`}
        >
          {loading ? "يتم الحذف..." : "حذف المقال"}
        </button>
      </div>
    </div>
  );
};

export default DeleteArticle;
