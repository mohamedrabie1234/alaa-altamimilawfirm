import { AboutUs } from "../components/About-Us/AboutUs";
import { Content } from "../components/About-Us/content";
import { MsgAndVision } from "../components/About-Us/MsgAndVision";
import { ScrollToTop } from "../components/ScrollToTop";
import { Responsabilities } from "../components/utils/Responsabilities";

export const AboutUsPage = () => {
  return (
    <div>
      <ScrollToTop />
      <AboutUs />
      <Content />
      <MsgAndVision />
      <Responsabilities />
     
    </div>
  );
};
