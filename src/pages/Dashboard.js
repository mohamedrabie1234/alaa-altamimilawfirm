import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust the path to your Firebase configuration
import VideoUpload from "../components/content/VideoUpload";
import AddArticle from "../components/content/AddArticle";
import AddProtfolio from "../components/content/AddProtfolio";
import EditProtfolio from "../components/content/EditProtfolio";
import VideoDelete from "../components/content/VideoDelete";
import UpdateArticle from "../components/content/UpdateArticle";
import DeleteArticle from "../components/content/DeleteArticle";

const Dashboard = () => {
  const [currentComponent, setCurrentComponent] = useState(null);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/"); // Redirect to / after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const renderComponent = () => {
    switch (currentComponent) {
      case "video":
        return <VideoUpload />;
      case "article":
        return <AddArticle />;
      case "portfolio":
        return <AddProtfolio />;
      case "editportfolio":
        return <EditProtfolio />;
      case "deletevideo":
        return <VideoDelete />;
      case "updatearticle":
        return <UpdateArticle />;
      case "deletearticle":
        return <DeleteArticle />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <header className="fixed mt-20 w-full bg-white shadow-md z-10 ">
        <div className="max-w-5xl mx-auto py-4 px-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-center text-gray-800">
            مرحبا يا دكتور
          </h1>
          <p className="text-gray-600 text-center mt-2">
            إدارة المحتوى الخاص بك بسهولة.
          </p>
          <div className="border-t border-gray-300 my-4"></div>
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-4 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              onClick={() => setCurrentComponent("video")}
            >
              إضافة فيديو
            </button>
            <button
              className="px-4 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none"
              onClick={() => setCurrentComponent("article")}
            >
              إضافة مقال
            </button>
            <button
              className="px-4 py-3 bg-purple-500 text-white rounded-lg shadow-md hover:bg-purple-600 focus:ring-2 focus:ring-purple-400 focus:outline-none"
              onClick={() => setCurrentComponent("portfolio")}
            >
              إضافة "من أنا"
            </button>
            <button
              className="px-4 py-3 bg-rose-500 text-white rounded-lg shadow-md hover:bg-rose-600 focus:ring-2 focus:ring-rose-400 focus:outline-none"
              onClick={() => setCurrentComponent("deletevideo")}
            >
              حذف فيديو
            </button>
            <button
              className="px-4 py-3 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              onClick={() => setCurrentComponent("editportfolio")}
            >
              تعديل "من أنا"
            </button>
            <button
              className="px-4 py-3 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
              onClick={() => setCurrentComponent("updatearticle")}
            >
              تحديث مقال
            </button>
            <button
              className="px-4 py-3 bg-lime-500 text-white rounded-lg shadow-md hover:bg-lime-600 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              onClick={() => setCurrentComponent("deletearticle")}
            >
              حذف  مقال
            </button>
          </div>
        </div>
      </header>

      {/* Dynamic Content */}
      <main className="flex-grow flex flex-col justify-center items-center w-full mt-40 px-6">
        {renderComponent() ? (
          <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
            {renderComponent()}
          </div>
        ) : (
          <p className="text-gray-500 text-lg">
            الرجاء اختيار خيار من الأعلى للبدء.
          </p>
        )}
      </main>

      {/* Footer */}
      <footer className="fixed bottom-5 w-full flex justify-between px-6 text-sm">
        <a
          href="https://www.linkedin.com/in/ahmed-shehab-6767652b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:underline"
        >
          Made by Ahmed Shehab
        </a>
        <button
          onClick={handleSignOut}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-400 focus:outline-none"
        >
          تسجيل الخروج
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
