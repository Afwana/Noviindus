import "./globals.css";
import EducareStory from "./components/Home/EducareStory";
import MainSection from "./components/Home/MainSection";
import WayOfTeaching from "./components/Home/WayOfTeaching";
import Programms from "./components/Home/Programms";
import Subjects from "./components/Home/Subjects";
import WorldMap from "./components/Home/WorldMap";
import Space from "./components/Home/Space";
import Masters from "./components/Home/Masters";
import Reviews from "./components/Home/Reviews";
import Faqs from "./components/Home/Faqs";
import BlogPosts from "./components/Home/BlogPosts";

export default function Page() {
  return (
    <div className="d-flex flex-column gap-5">
      <MainSection />
      <div id="about">
        <EducareStory />
      </div>
      <WayOfTeaching />
      <Programms />
      <Subjects />
      <WorldMap />
      <Space />
      <Masters />
      <Reviews />
      <Faqs />
      <div id="blog">
        <BlogPosts />
      </div>
    </div>
  );
}
