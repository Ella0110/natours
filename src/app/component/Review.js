import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

const Review = ({ ReviewInfoImg, ReviewName, Heading, Paragraph, children}) => {
  return (
    <div className="max-w-[70rem] mx-auto mb-20">
      {/*story*/}
      <div className="w-3/4 mx-auto rounded-sm bg-white bg-opacity-60 shadow-lg p-14 pl-20 -skew-x-12 group">
        {/*story-shape*/}
        <figure className="relative w-60 h-60  float-left shape-outside clip-path-circle -translate-x-7 -translate-y-6  skew-x-12">
          <Image
            src={`${nextConfig.basePath}${ReviewInfoImg}`}
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
            {ReviewName}
          </figcaption>
        </figure>
        <div className="skew-x-12">
          <h3 className="text-base font-bold uppercase mb-4">{Heading}</h3>
          <p className="paragraph">{Paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
