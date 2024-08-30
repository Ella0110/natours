import Button from "@/app/component/Button";
import Image from "next/image";
export default function Section_Story() {
  return (
    <section className="p-40 relative">
      <div className="absolute top-0 left-0 h-full w-full z-[-1] opacity-15">
        {/*video can not play because should be 'autoPlay' not 'autoplay', it should be 'P' because of JSX*/}
        <video className="h-full w-full object-cover" autoPlay muted loop>
          <source src="/img/video.mp4" type="video/mp4" />
          <source src="/img/video.webm" type="video/webm" />
        </video>
      </div>

      <div className="text-center mb-10 ">
        <h2 className="heading-secondary">We make people genuinly happy</h2>
      </div>

      <div className="max-w-[70rem] mx-auto mb-20">
        {/*story*/}
        <div className="w-3/4 mx-auto rounded-sm bg-white bg-opacity-60 shadow-lg p-14 pl-20 -skew-x-12 group">
          {/*story-shape*/}
          <figure className="relative w-60 h-60  float-left shape-outside clip-path-circle -translate-x-7 -translate-y-6  skew-x-12">
            <Image
              src="/img/nat-8.jpg"
              alt="Person on a tour"
              width={400}
              height={400}
              className="w-full -translate-x-2 translate-y-10 scale-125 transition-all 
                            group-hover:-translate-x-2 group-hover:scale-100 group-hover:blur-sm group-hover:brightness-75"
            ></Image>
            <figcaption
              className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/5
                            text-white uppercase text-base opacity-0 transition-all 
                            group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
            >
              Mary Smith
            </figcaption>
          </figure>
          <div className="skew-x-12">
            <h3 className="text-base font-bold uppercase mb-4">
              I had the best week ever than here
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit error odio fuga! Harum eveniet quasi veritatis ad
              autem officiis labore nobis, magni exercitationem numquam ex neque
              dolorum iure dolore iustolabore nobis, magni exercitationem
              numquam ex neque dolorum iure dolore iusto?
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[70rem] mx-auto mb-20">
        {/*story*/}
        <div className="w-3/4 mx-auto rounded-sm bg-white bg-opacity-60 shadow-lg p-14 pl-20 -skew-x-12 group">
          {/*story-shape*/}
          <figure className="relative w-60 h-60  float-left shape-outside clip-path-circle -translate-x-7 -translate-y-6  skew-x-12">
            <Image
              src="/img/nat-9.jpg"
              alt="Person on a tour"
              width={400}
              height={400}
              className="w-full -translate-x-2 translate-y-10 scale-125 transition-all 
                            group-hover:-translate-x-2 group-hover:scale-100 group-hover:blur-sm group-hover:brightness-75"
            ></Image>
            <figcaption
              className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/5
                            text-white uppercase text-base opacity-0 transition-all 
                            group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
            >
              Mary Smith
            </figcaption>
          </figure>
          <div className="skew-x-12">
            <h3 className="text-base font-bold uppercase mb-4">
              I had the best week ever than here
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit error odio fuga! Harum eveniet quasi veritatis ad
              autem officiis labore nobis, magni exercitationem numquam ex neque
              dolorum iure dolore iustolabore nobis, magni exercitationem
              numquam ex neque dolorum iure dolore iusto?
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <Button href="#" variant="text" size="text">
          Read all stroies&rarr;
        </Button>
      </div>
    </section>
  );
}
