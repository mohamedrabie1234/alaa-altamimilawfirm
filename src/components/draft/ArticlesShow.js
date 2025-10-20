import React, { useEffect, useState, useCallback } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ArticlesShow = () => {
  const [articles, setArticles] = useState([]);
  const [currentArticle, setCurrentArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchArticles = useCallback(async () => {
    const images = [
      "https://cdn.al-ain.com/lg/images/2018/9/19/85-003206-egypt-human-rights-brotherhood-judiciary-judgments_700x400.jpeg",
      "https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?q=80&w=2670&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1661540409860-fe00bb21a51c?q=80&w=2664&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1661394715096-46bb7027fc27?q=80&w=2670&auto=format&fit=crop",
      "https://plus.unsplash.com/premium_photo-1661497281000-b5ecb39a2114?q=80&w=2670&auto=format&fit=crop",
      "https://cdn.al-ain.com/lg/images/2018/9/19/85-003206-egypt-human-rights-brotherhood-judiciary-judgments_700x400.jpeg",
      "https://cc.gov.eg/storage/506/image.jpg",
    ];
    setLoading(true);
    setError(null);
    try {
      const q = query(
        collection(db, "content"),
        where("type", "==", "article")
      );
      const querySnapshot = await getDocs(q);

      const fetchedArticles = querySnapshot.docs.map((doc, index) => ({
        id: doc.id,
        ...doc.data(),
        image:
          images[index % images.length] || "https://via.placeholder.com/150",
      }));

      setArticles(fetchedArticles);
      if (fetchedArticles.length > 0) {
        setCurrentArticle(fetchedArticles[0]);
      }
    } catch (error) {
      setError("Failed to load articles. Please try again.");
      console.error("Error fetching articles:", error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  if (loading) {
    return <p className="text-center text-lg">Loading articles...</p>;
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (articles.length === 0) {
    return <p className="text-center text-lg">No articles available.</p>;
  }

  return (
    <div className="max-w-[1100px] mx-auto p-6">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center">
          المقالات
        </h1>
        <div className="w-16 h-[2px] bg-br2 mb-4"></div>
      </div>

      <ul className="flex flex-wrap justify-center gap-6 mb-8">
        {articles.map((article) => (
          <li key={article.id} className="mb-4">
            <button
              onClick={() => setCurrentArticle(article)}
              type="button"
              className="py-3 px-6 text-sm sm:text-lg font-bold text-gray-800 focus:outline-none bg-white rounded-full border border-gray-600 hover:bg-gray-100 hover:text-gray-700"
            >
              {article.header}
            </button>
          </li>
        ))}
      </ul>

      {currentArticle && (
        <div className="mb-8">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            {currentArticle.header}
          </h2>
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <p className="sm:w-3/5 w-full p-6 bg-gray-100 rounded-lg shadow-sm text-right font-bold text-lg">
              {currentArticle.article}
            </p>
            <img
              src={currentArticle.image}
              alt={currentArticle.header}
              className="sm:w-2/5 w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      )}

      <div className="text-center mt-6">
        <button
          onClick={fetchArticles}
          className="px-8 py-3 bg-br2 text-white rounded-lg hover:bg-br1"
        >
          اعادة تحميل المقالات
        </button>
      </div>
    </div>
  );
};
