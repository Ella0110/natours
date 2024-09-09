import Button from "@/app/component/Button";
import Image from "next/image";
import nextConfig from "../../../../next.config.mjs";
import Review from "@/app/component/Review";

export default function SectionStory() {
  return (
    <section className="p-40 relative">
      <div className="absolute top-0 left-0 h-full w-full z-[-1] opacity-15">
        {/*video can not play because should be 'autoPlay' not 'autoplay', it should be 'P' because of JSX*/}
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src={`${nextConfig.basePath}/img/video.mp4`} type="video/mp4" />
          <source src={`${nextConfig.basePath}/img/video.webm`} type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="text-center mb-10 ">
        <h2 className="heading-secondary">We make people genuinly happy</h2>
      </div>


      {/* ReviewInfoImg, ReviewName, Heading, Paragraph */}
      <Review
        ReviewInfoImg = "/img/nat-8.jpg"
        ReviewName = "Mary Smith"
        Heading = "I had the best week ever than here"
        Paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit error odio fuga! Harum eveniet quasi veritatis adautem officiis labore nobis, magni exercitationem numquam ex nequedolorum iure dolore iustolabore nobis, magni exercitationemnumquam ex neque dolorum iure dolore iusto?"
      />

      <Review
        ReviewInfoImg = "/img/nat-9.jpg"
        ReviewName = "John Smith"
        Heading = "Wow! My journey have already started!"
        Paragraph = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Reprehenderit error odio fuga! Harum eveniet quasi veritatis adautem officiis labore nobis, magni exercitationem numquam ex nequedolorum iure dolore iustolabore nobis, magni exercitationemnumquam ex neque dolorum iure dolore iusto?"
      />

      <div className="text-center mt-16">
        <Button href="#" variant="text" size="text">
          Read all stroies&rarr;
        </Button>
      </div>
    </section>
  );
}
