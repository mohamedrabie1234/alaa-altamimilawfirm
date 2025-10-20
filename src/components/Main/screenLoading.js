import React, { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Import a spinner from the library

export const ScreenLoading = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // State to track video loading

  // Handler for when the video is loaded
  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden" id='home'>
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline // ✅ Recommended for iOS to allow inline playback
        webkit-playsinline="true" // ✅ Legacy attribute for older iOS Safari
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        onLoadedData={handleVideoLoad}
      >
        <source
          src="https://consortiolawfirm.com/wp-content/uploads/2015/02/198890-909564521_1.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      {/* Loading Indicator */}
      {!isVideoLoaded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            visible={true}
          />
        </div>
      )}
      {/* Overlay Text */}
      {isVideoLoaded && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-arabFont4 text-white z-10">
          <h1
            className="text-3xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl"
            style={{
              textShadow:
                '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
            }}
          >
              مكتب الاستاذ الدكتور 
          </h1>
          <br></br>
          <p
            className="text-4xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
            style={{
              textShadow:
                '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
            }}
            
          >
            
            علاء التميمي
          </p>
          <br></br>
          <h
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"

            style={{
              textShadow:
                '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black',
            }}
          >
              الأستاذ بكلية الحقوق – جامعة المنصورة
والمحامي بالنقض والإدارية العليا
          </h>
          
        </div>
      )}
    </div>
  );
};

export default ScreenLoading;

