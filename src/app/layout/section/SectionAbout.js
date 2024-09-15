import Image from "next/image";
import Button from "@/app/component/Button";
import nextConfig from "../../../../next.config.mjs";

export default function SectionAbout() {
  return (
    <section className="bg-white pt-60 pb-40 lg:py-60 -mt-[30vh] md:-mt-[20vh]">
      <div className="text-center mb-5 lg:mb-20">
        <h2 className="heading-secondary">
          Exciting tours for adcanturous people
        </h2>
      </div>
      <div className="flex flex-wrap justify-between max-w-[32rem] lg:max-w-[70rem] p-8 my-0 mx-auto">
        <div className="lg:w-[45%] lg:mr-10">
          <h3 className="text-xs  md:text-base font-medium lg:font-bold uppercase mb-3 lg:mb-6">
            You are going to fall in love with nature
          </h3>
          <p className="text-xs md:text-base mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            molestias, veniam hic, ipsam repellendus dolore, ab fugiat tempora
            corporis aliquid deleniti voluptatem labore asperiores in
            consectetur ut. Itaque, vel excepturi.
          </p>
          <h3 className="text-xs  md:text-base font-medium lg:font-bold uppercase mb-3 lg:mb-6">
            Live advanture like you never have before
          </h3>
          <p className="text-xs md:text-base mb-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            molestias, veniam hic, ipsam repellendus dolore, ab fugiat tempora
            corporis aliquid deleniti voluptatem labore asperiores in
            consectetur ut. Itaque, vel excepturi.
          </p>
          <Button href="#" variant="text" size="text">
            Learn more&rarr;
          </Button>
        </div>
        <div className="w-full lg:w-[45%]">
          <div className="flex justify-between lg:relative">
            <Image
              src={`${nextConfig.basePath}/img/nat-1-large.jpg`}
              alt="photo-1"
              width={300}
              height={200}
              className="lg:absolute w-[100px] md:w-[140px] lg:w-[300px]  lg:-top-4  drop-shadow-xl z-10 hover:outline hover:outline-4 hover:outline-offset-4 lg:hover:outline-8  lg:hover:outline-offset-8 hover:outline-green-500 hover:rounded-sm
                        hover:-translate-y-2 hover:scale-110 hover:z-20 transition-transform duration-300"
            ></Image>
            <Image
              src={`${nextConfig.basePath}/img/nat-2-large.jpg`}
              alt="photo-2"
              width={300}
              height={300}
              className="lg:absolute w-[100px] md:w-[140px] lg:w-[300px] -top-2 left-32  lg:top-10 lg:right-0 drop-shadow-xl z-[15] lg:z-10 hover:outline hover:outline-4 hover:outline-offset-4 lg:hover:outline-8 lg:hover:outline-offset-8 hover:outline-green-500 hover:rounded-sm
                hover:-translate-y-2 hover:scale-105 hover:z-20 transition-transform duration-300"
            ></Image>
            <Image
              src={`${nextConfig.basePath}/img/nat-3-large.jpg`}
              alt="photo-3"
              width={300}
              height={300}
              className="lg:absolute w-[100px] md:w-[140px] lg:w-[300px]  lg:top-32  lg:left-10 drop-shadow-xl z-10 hover:outline hover:outline-4 hover:outline-offset-4 lg:hover:outline-8 lg:hover:outline-offset-8 hover:outline-green-500 hover:rounded-sm
                hover:-translate-y-2 hover:scale-105 hover:z-20 transition-transform duration-300"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
}
