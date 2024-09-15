import FeatureBox from "@/app/component/FeatureBox";

export default function SectionFeatures() {
  return (
    <section
      className="py-40 bg-cover -skew-y-6 -translate-y-20 bg-nat-4"
    >
      <div className="flex max-w-[20rem]  flex-col gap-10 ms:gap-0 lg:flex-row lg:flex-wrap justify-between skew-y-6 lg:max-w-[70rem] mx-auto">
        <div className="basis-1/5">
          <FeatureBox
            FeatureIcon="icon-basic-world"
            Heading="Explore the lighting"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></FeatureBox>
        </div>
        <div className="basis-1/5">
          <FeatureBox
            FeatureIcon="icon-basic-heart"
            Heading="Explore the world"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></FeatureBox>
        </div>
        <div className="basis-1/5">
          <FeatureBox
            FeatureIcon="icon-basic-home"
            Heading="Explore the Home"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></FeatureBox>
        </div>
        <div className="basis-1/5">
          <FeatureBox
            FeatureIcon="icon-basic-video"
            Heading="Explore the Camera"
            Paragraph="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint molestiasveniam hic "
          ></FeatureBox>
        </div>
      </div>
    </section>
  );
}
