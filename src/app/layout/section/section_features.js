import Feature_Box from "@/app/component/Feature_Box";

export default function Section_Features() {
  return (
    <section
      className="py-40 bg-cover -skew-y-6 -translate-y-20 bg-nat-4"
    >
      <div className="flex flex-wrap justify-between skew-y-6 max-w-[70rem] mx-auto">
        <div className="basis-1/5">
          <Feature_Box
            FeatureIcon="icon-basic-world"
            Heading="Explore the lighting"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></Feature_Box>
        </div>
        <div className="basis-1/5">
          <Feature_Box
            FeatureIcon="icon-basic-heart"
            Heading="Explore the world"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></Feature_Box>
        </div>
        <div className="basis-1/5">
          <Feature_Box
            FeatureIcon="icon-basic-home"
            Heading="Explore the Home"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></Feature_Box>
        </div>
        <div className="basis-1/5">
          <Feature_Box
            FeatureIcon="icon-basic-video"
            Heading="Explore the Camera"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></Feature_Box>
        </div>
      </div>
    </section>
  );
}
