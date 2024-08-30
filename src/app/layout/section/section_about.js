import Image from "next/image";
import Button from "@/app/component/Button";

export default function Section_About() {
    return (
      <section className="bg-white py-60 -mt-[20vh]">
        <div className="text-center mb-20">
          <h2
            className="heading-secondary"
          >
            Exciting tours for adcanturous people
          </h2>
        </div>
        <div className="flex flex-wrap justify-between max-w-[70rem] my-0 mx-auto">
          <div className="w-[45%] mr-10">
            <h3 className="text-base font-bold uppercase mb-6">
              You are going to fall in love with nature
            </h3>
            <p className="text-base mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              molestias, veniam hic, ipsam repellendus dolore, ab fugiat tempora
              corporis aliquid deleniti voluptatem labore asperiores in
              consectetur ut. Itaque, vel excepturi.
            </p>
            <h3 className="text-base font-bold uppercase mb-6">
              Live advanture like you never have before
            </h3>
            <p className="text-base mb-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              molestias, veniam hic, ipsam repellendus dolore, ab fugiat tempora
              corporis aliquid deleniti voluptatem labore asperiores in
              consectetur ut. Itaque, vel excepturi.
            </p>
            <Button href="#" variant="text" size="text">
              Learn more&rarr;
            </Button>
          </div>
          <div className="w-[45%]">
            <div className="relative">
              <Image
                src="/img/nat-1-large.jpg"
                alt="photo-1"
                width={300}
                height={200}
                className="absolute -top-4 drop-shadow-xl z-10 hover:outline hover:outline-8 hover:outline-offset-8 hover:outline-green-500 hover:rounded-sm
                        hover:-translate-y-2 hover:scale-110 hover:z-20 transition-transform duration-300"
              ></Image>
              <Image
                src="/img/nat-2-large.jpg"
                alt="photo-2"
                width={300}
                height={300}
                className="absolute top-10 right-0 drop-shadow-xl z-10 hover:outline hover:outline-8 hover:outline-offset-8 hover:outline-green-500 hover:rounded-sm
                hover:-translate-y-2 hover:scale-105 hover:z-20 transition-transform duration-300"
              ></Image>
              <Image
                src="/img/nat-3-large.jpg"
                alt="photo-3"
                width={300}
                height={300}
                className="absolute top-32 left-10 drop-shadow-xl z-10 hover:outline hover:outline-8 hover:outline-offset-8 hover:outline-green-500 hover:rounded-sm
                hover:-translate-y-2 hover:scale-105 hover:z-20 transition-transform duration-300"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    );
}