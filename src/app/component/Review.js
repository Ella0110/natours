import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

const Review = ({ ReviewInfoImg, ReviewName, Heading, Paragraph, children}) => {
  return (
    <div className="max-w-[25rem] lg:max-w-[70rem] mx-auto mb-20">
      {/*story*/}
      <div className=" lg:w-3/4   mx-auto rounded-sm bg-white bg-opacity-60 shadow-lg p-10 pt-0 lg:p-14 lg:pl-20 lg:-skew-x-12 group">
        {/*story-shape*/}
        <figure className="relative -translate-x-4 clip-path-circle float-left shape-outside   lg:skew-x-12">
          <Image
            src={`${nextConfig.basePath}${ReviewInfoImg}`}
            alt="Person on a tour"
            width={150}
            height={150}
            className="lg:w-full   scale-125 transition-all 
                            group-hover:-translate-x-2 group-hover:scale-100 group-hover:blur-sm group-hover:brightness-75"
          ></Image>
          <figcaption
            className="absolute top-1/2 left-1/2 text-center 
                            text-white uppercase text-base opacity-0 transition-all 
                            group-hover:opacity-100 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2"
          >
            {ReviewName}
          </figcaption>
        </figure>
        <div className="lg:skew-x-12">
          <h3 className="text-sm lg:text-base font-bold uppercase mb-4">{Heading}</h3>
          <p className="paragraph">{Paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
