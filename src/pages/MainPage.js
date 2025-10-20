import React from "react";
import {ScreenLoading , OurServices, WhyUs, Articlee} from "../components/Main/";
import VideoList from "../components/Main/VideoList";
import { Responsabilities, } from "../components/utils/Responsabilities";



const MainPage = () => {
  return (
    <div >
      <ScreenLoading />
      <OurServices />
      <WhyUs />
      <Articlee />
      <Responsabilities />
      <VideoList  />
    </div>
  );
};

export default MainPage;
