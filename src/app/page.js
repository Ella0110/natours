import Header from "./layout/header";
import Section_About from "./layout/section/section_about";
import Section_Features from "./layout/section/section_features";
import Section_Tours from "./layout/section/section_tours";
import Section_Story from "./layout/section/section_story";
import Section_Book from "./layout/section/section_book";
import Footer from "./layout/footer";

export default function Home() {
  return (
    <main className="text-gray-500">
      <Header />
      <Section_About />
      <Section_Features />
      <Section_Tours />
      <Section_Story />
      <Section_Book />
      <Footer />
    </main>
  );
}
