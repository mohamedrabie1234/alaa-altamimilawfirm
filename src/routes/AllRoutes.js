import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Dashboard from "../pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../components/auth/Login";
import { useState } from "react";
import { ArticleDetail } from "../components/Main/ArticleDetail";
import { UnFound } from "../components/layouts/unFound";
import { AboutUsPage } from "../pages/AboutUsPage";

export const AllRoutes = () => {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (loggedInUser) => {
    setUser(loggedInUser);
  };

  return (
    <div className="dark:bg-darkbg">
       {/* Add this component */}
      <Routes>
        <Route path="/" element={<MainPage title="Home" />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="/whoweare" element={<AboutUsPage />} />
        <Route path="*" element={<UnFound />} />
        <Route
          path="/login"
          element={<Login title="Login Page" onLoginSuccess={handleLoginSuccess} />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};