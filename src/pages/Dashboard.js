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
             مرحبا يا دكتور علاء
          </h1>
          <p className="text-gray-600 text-center mt-2">
            إدارة المحتوى الخاص بك بسهولة.
          </p>
          <div className="border-t border-gray-300 my-4"></div>
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              className="px-4 py-3 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] focus:ring-2 focus:ring-[#c4a484] focus:outline-none transition duration-200"
              onClick={() => setCurrentComponent("video")}
            >
              إضافة فيديو
            </button>
            
            
            <button
              className="px-4 py-3 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] focus:ring-2 focus:ring-[#c4a484] focus:outline-none transition duration-200"
              onClick={() => setCurrentComponent("deletevideo")}
            >
              حذف فيديو
            </button>
           <button
              className="px-4 py-3 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] focus:ring-2 focus:ring-[#c4a484] focus:outline-none transition duration-200"
              onClick={() => setCurrentComponent("article")}
            >
              إضافة مقال
            </button>
            <button
              className="px-4 py-3 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] focus:ring-2 focus:ring-[#c4a484] focus:outline-none transition duration-200"
              onClick={() => setCurrentComponent("updatearticle")}
            >
              تحديث مقال
            </button>
            <button
              className="px-4 py-3 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] focus:ring-2 focus:ring-[#c4a484] focus:outline-none transition duration-200"
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
   
        </a>
       <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
  <div className="fixed bottom-4 right-4 flex flex-col space-y-3">
  <button
    onClick={handleSignOut}
    className="px-4 py-2 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] text-gray-700 text-lg font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
  >
    تسجيل الخروج
  </button>

  <button
    onClick={() => navigate("/change-password")}
    className="px-4 py-2 bg-[#5b3a29] text-white rounded-lg shadow-md hover:bg-[#704231] text-gray-700 text-lg font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
  >
    كلمه سر جديدة
  </button>
</div>

</div>

      </footer>
    </div>
  );
};

export default Dashboard;
