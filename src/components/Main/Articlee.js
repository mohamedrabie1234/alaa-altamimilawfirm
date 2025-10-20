import React, { useEffect, useState, useCallback } from "react";
import { db } from "../../firebase/firebase"; // Adjust the path as needed
import { collection, getDocs, query, where } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Articlee = () => {
  const [articles, setArticles] = useState([]);
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
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-br2"></div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-lg text-red-500">{error}</p>;
  }

  if (articles.length === 0) {
    return <p className="text-center text-lg">No articles available.</p>;
  }

  return (
    <div className="w-full mx-auto p-6 bg-white">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-arabFont text-gray-800 mb-4 text-center">
          المقالات
        </h1>
        <div className="w-16 h-[2px] bg-br2 mb-4"></div>
      </div>

      {/* Swiper Container with Fixed Width */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="w-full"
          >
            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <Link to={`/article/${article.id}`} state={{ article }}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer w-full">
                    <img
                      src={article.image}
                      alt={article.header}
                      className="w-full h-48 object-cover"
                      loading="lazy" // Lazy loading for better performance
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold text-gray-800 text-center">
                        {article.header}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="swiper-button-prev !text-white !left-[-20px] lg:!left-[-40px]"></div>
          <div className="swiper-button-next !text-white !right-[-20px] lg:!right-[-40px]"></div>
        </div>
      </div>
    </div>
  );
};