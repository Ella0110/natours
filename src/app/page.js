import Navigation from "./layout/navigation";
import Header from "./layout/header";
import SectionAbout from "./layout/section/SectionAbout";
import SectionFeatures from "./layout/section/SectionFeatures";
import SectionTours from "./layout/section/SectionTours";
import SectionStory from "./layout/section/SectionStory";
import SectionBook from "./layout/section/SectionBook";
import Footer from "./layout/footer";
import Popup from "./layout/popup";

export default function Home() {
  return (
    <main className="text-gray-500 text-xs md:text-base">
      <Navigation /> 
      <Header /> 
      <SectionAbout />
      <SectionFeatures />
      <SectionTours /> 
      <SectionStory />
      <SectionBook />
      <Footer />
      <Popup /> 
    </main>
  );
}
