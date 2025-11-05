import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const VideoList = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [videoLoading, setVideoLoading] = useState({});
  const [videoErrors, setVideoErrors] = useState({});

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("https://backend-alaa.onrender.com/api/videos");
        if (!response.ok) {
          throw new Error("Failed to fetch videos");
        }
        const data = await response.json();
        setVideos(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  // Initialize loading state for all videos
  useEffect(() => {
    if (videos.length > 0) {
      const initialLoadingState = {};
      videos.forEach(video => {
        initialLoadingState[video.public_id] = true;
      });
      setVideoLoading(initialLoadingState);
    }
  }, [videos]);

  // Handle video loaded successfully
  const handleVideoLoad = (publicId) => {
    setVideoLoading((prev) => ({ ...prev, [publicId]: false }));
  };

  // Handle video loading error
  const handleVideoError = (publicId) => {
    setVideoLoading((prev) => ({ ...prev, [publicId]: false }));
    setVideoErrors((prev) => ({ ...prev, [publicId]: true }));
  };

  // Fallback timeout to hide loading if video takes too long
  const handleVideoCanPlay = (publicId) => {
    setVideoLoading((prev) => ({ ...prev, [publicId]: false }));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <p className="text-gray-700">جاري تحميل الفيديوهات...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center px-4">
          <p className="text-red-500 text-lg mb-2">خطأ في تحميل الفيديوهات</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 w-full min-h-[720px] flex items-center justify-center py-8 md:py-12">
      <div className="max-w-[1200px] mx-auto px-2 sm:px-4 w-full">
        <div className="flex flex-col items-center mb-4 md:mb-8">
          <h1 className="text-2xl md:text-5xl font-arabFont text-gray-800 mb-2 md:mb-4 text-center">
            الفيديوهات
          </h1>
          <div className="w-16 h-[2px] bg-br2 mb-2 md:mb-4"></div>
        </div>
        
        {videos.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-gray-700 text-lg">لا توجد فيديوهات متاحة</p>
          </div>
        ) : (
          <div className="relative px-4 sm:px-0">
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }}
              className="w-full"
            >
              {videos.map((video) => (
                <SwiperSlide key={video.public_id}>
                  <div className="bg-white p-3 md:p-4 rounded-lg shadow-lg h-[350px] sm:h-[400px] md:h-[500px] lg:h-[550px] flex flex-col">
                    {/* Loading state */}
                    {videoLoading[video.public_id] && !videoErrors[video.public_id] && (
                      <div className="flex justify-center items-center h-full">
                        <div className="text-center">
                          <div className="inline-block w-8 h-8 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin mb-2"></div>
                          <p className="text-gray-700">جاري تحميل الفيديو...</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Error state */}
                    {videoErrors[video.public_id] && (
                      <div className="flex justify-center items-center h-full">
                        <div className="text-center">
                          <p className="text-red-500">فشل تحميل الفيديو</p>
                          <button 
                            onClick={() => {
                              setVideoErrors(prev => ({ ...prev, [video.public_id]: false }));
                              setVideoLoading(prev => ({ ...prev, [video.public_id]: true }));
                            }}
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                          >
                            إعادة المحاولة
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {/* Video element */}
                    <video
                      controls
                      preload="metadata"
                      playsInline
                      src={video.secure_url}
                     className="w-full h-full rounded-lg shadow object-contain bg-black"

                      onLoadedMetadata={() => handleVideoCanPlay(video.public_id)}
                      onCanPlay={() => handleVideoCanPlay(video.public_id)}
                      onLoadedData={() => handleVideoLoad(video.public_id)}
                      onError={() => handleVideoError(video.public_id)}
                      style={{
                        display: !videoLoading[video.public_id] && !videoErrors[video.public_id] ? "block" : "none",
                      }}
                      aria-label={`فيديو ${video.public_id}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Arrows */}
            <div 
              className="swiper-button-prev !text-slate-800 !left-0 sm:!left-[-20px] lg:!left-[-40px] !w-8 !h-8 sm:!w-10 sm:!h-10"
              aria-label="الفيديو السابق"
            ></div>
            <div 
              className="swiper-button-next !text-slate-800 !right-0 sm:!right-[-20px] lg:!right-[-40px] !w-8 !h-8 sm:!w-10 sm:!h-10"
              aria-label="الفيديو التالي"
            ></div>
            {/* Call to Action Section */}
<div className="flex justify-center mt-12">
  <div className="bg-gradient-to-r from-br3 to-br2 text-white py-8 px-6 rounded-2xl shadow-lg text-center max-w-lg">
    <h2 className="text-2xl font-semibold mb-3">المزيد من الفيديوهات والمحتوى</h2>
    <p className="mb-6 text-sm opacity-90">
      شاهد المزيد من الفيديوهات التعليمية والمقابلات القانونية على قناتنا في اليوتيوب.
    </p>
    <a
      href="https://www.youtube.com/channel/UCYuMZv3s_Clx4JPJjf1IjnQ" // <-- put your YouTube channel link here
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 bg-white text-br3 font-medium px-6 py-3 rounded-full shadow-md hover:bg-br3 hover:text-white transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-red-600"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M23.498 6.186a2.997 2.997 0 00-2.11-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.388.566a2.997 2.997 0 00-2.11 2.12C0 8.067 0 12 0 12s0 3.933.502 5.814a2.997 2.997 0 002.11 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.388-.566a2.997 2.997 0 002.11-2.12C24 15.933 24 12 24 12s0-3.933-.502-5.814zM9.75 15.02v-6.04L15.5 12l-5.75 3.02z"/>
      </svg>
      زيارة قناة اليوتيوب
    </a>
  </div>
</div>

          </div>
        )}
      </div>
    </div>
  );
};

export default VideoList;