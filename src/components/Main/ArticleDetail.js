import React from "react";
import { useLocation } from "react-router-dom";

// Helper function to detect if the text is Arabic
const isArabic = (text) => {
  // Regular expression to match Arabic characters
  const arabicRegex = /[\u0600-\u06FF]/;
  return arabicRegex.test(text);
};

export const ArticleDetail = () => {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return <p className="text-center text-lg text-red-500">Article not found.</p>;
  }

  const formattedArticle = article.article
    ? article.article.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))
    : "No content available for this article.";

  // Determine if the content is Arabic
  const isContentArabic = isArabic(article.article);

  return (
    <div className="w-full mx-auto m-20 p-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <img
          src={article.image}
          alt={article.header}
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      <div className="max-w-4xl mx-auto mt-6">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center font-bold">
          {article.header}
        </h1>
        <div className="w-16 h-[2px] bg-br2 mb-4 mx-auto"></div>
      </div>

      {/* Content Container with Background and Creative Styles */}
      <div
        className="max-w-4xl mx-auto mt-10" // Added margin-top (mt-10)
        style={{
          minHeight: "200px", // Set minimum height
          background: "linear-gradient(135deg, rgba(58, 123, 213, 0.1), rgba(255, 189, 97, 0.1))",
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
