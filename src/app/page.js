import Header from "./layout/header";
import Section_About from "./layout/section/section_about";
import Section_Features from "./layout/section/section_features";
import Section_Tours from "./layout/section/section_tours";

export default function Home() {
  return (
    <div className="text-gray-500">
      <Header />
      <Section_About />
      <Section_Features />
      <Section_Tours />
    </div>
  );
}
