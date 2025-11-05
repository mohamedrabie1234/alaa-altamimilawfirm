import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

export const ArticleDetail = () => {
  const location = useLocation();
  const { id } = useParams();

  const [article, setArticle] = useState(location.state?.article || null);
  const [loading, setLoading] = useState(!location.state?.article);
  const [error, setError] = useState(null);

  const fallbackImages = [
    "https://cdn.al-ain.com/lg/images/2018/9/19/85-003206-egypt-human-rights-brotherhood-judiciary-judgments_700x400.jpeg",
    "https://plus.unsplash.com/premium_photo-1661329930662-19a43503782f?q=80&w=2670&auto=format&fit=crop",
    "https://cc.gov.eg/storage/506/image.jpg",
  ];

  useEffect(() => {
    const fetchArticle = async () => {
      if (!article) {
        setLoading(true);
        try {
          const docRef = doc(db, "content", id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists() && docSnap.data().type === "article") {
            setArticle(docSnap.data());
          } else {
            setError("Article not found.");
          }
        } catch (err) {
          console.error("Error fetching article:", err);
          setError("Error loading article.");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchArticle();
  }, [id, article]);

  if (loading) return <p className="text-center text-lg text-gray-500 mt-20">Loading article...</p>;
  if (error || !article)
    return <p className="text-center text-lg text-red-500 mt-20">{error || "Article not found."}</p>;

  const formattedArticle = article.article
    ? article.article.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : "No content available for this article.";

  const isContentArabic = isArabic(article.article);
  const fallbackImage =
    article.image || fallbackImages[Math.floor(Math.random() * fallbackImages.length)];

  return (
    <div className="w-full mx-auto m-20 p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <img
          src={fallbackImage}
          alt={article.header || "Article image"}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-6">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center font-bold">
          {article.header}
        </h1>
        <div className="w-16 h-[2px] bg-br2 mb-4 mx-auto"></div>
      </div>

      <div
        className="max-w-4xl mx-auto mt-10"
        style={{
          minHeight: "200px",
          background:
            "linear-gradient(135deg, rgba(58, 123, 213, 0.1), rgba(255, 189, 97, 0.1))",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
          animation: "fadeIn 1.5s ease-out",
        }}
      >
        <p
          className={`text-lg text-gray-700 max-w-prose mx-auto break-words ${
            isContentArabic ? "text-right" : "text-left"
          }`}
        >
          {formattedArticle}
        </p>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};
