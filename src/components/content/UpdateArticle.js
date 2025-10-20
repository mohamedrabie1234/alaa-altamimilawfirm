import React, { useState, useEffect } from "react";
import { db } from "../../firebase/firebase"; // Adjust the path to your Firebase configuration
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";


const UpdateArticle = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [header, setHeader] = useState("");
  const [article, setArticle] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  

  // Fetch all articles
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "content"));
        const articlesData = [];
        querySnapshot.forEach((doc) => {
          articlesData.push({ id: doc.id, ...doc.data() });
        });
        setArticles(articlesData);
      } catch (error) {
        setMessage("Error fetching articles: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Fetch a single article by ID when an article is selected
  useEffect(() => {
    const fetchArticleById = async () => {
      if (!selectedArticleId) return;

      setLoading(true);
      try {
        const docRef = doc(db, "content", selectedArticleId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setHeader(data.header);
          setArticle(data.article);
        } else {
          setMessage("Article not found.");
        }
      } catch (error) {
        setMessage("Error fetching article: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchArticleById();
  }, [selectedArticleId]);

  // Handle form submission for updating the article
  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const docRef = doc(db, "content", selectedArticleId);
      await updateDoc(docRef, {
        header,
        article,
        updatedAt: new Date(), // Timestamp for when the article was updated
      });

      setMessage("Article updated successfully!");
      setTimeout(() => {
        setMessage("");
        setSelectedArticleId(null); // Reset selection
        setHeader("");
        setArticle("");
      }, 2000);
    } catch (error) {
      setMessage("Error updating article: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">
        Update Article
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

      {/* Article List */}
      {!selectedArticleId && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700">Articles</h3>
          {loading ? (
            <p>Loading articles...</p>
          ) : articles.length > 0 ? (
            <ul className="space-y-2">
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="p-4 bg-gray-100 rounded-lg shadow-md flex justify-between items-center"
                >
                  <span>{article.header}</span>
                  <button
                    onClick={() => setSelectedArticleId(article.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    Edit
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No articles found.</p>
          )}
        </div>
      )}

      {/* Article Form */}
      {selectedArticleId && (
        <form onSubmit={handleUpdate} className="space-y-4 mt-6">
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 h-40"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400"
            }`}
          >
            {loading ? "Updating..." : "Update Article"}
          </button>

          <button
            type="button"
            onClick={() => setSelectedArticleId(null)}
            className="w-full mt-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-700"
          >
            Cancel
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateArticle;
