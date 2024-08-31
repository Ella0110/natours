import Button from "./Button";

const Card = ({
  gradientImg,
  gradientColor,
  cardHeading,
  cardDetail_1,
  cardDetail_2,
  cardDetail_3,
  cardDetail_4,
  cardDetail_5,
  cardPrice,
}) => {
  return (
    <div className="relative h-96 perspective-custom group">
      {/* 1/3 card-side card-side-front */}
      <div className="text-lg h-[30rem] absolute top-0 left-0 w-full rounded-lg overflow-hidden shadow-xl preserve-3d group-hover:rotate-y-180 bg-white backface-hidden transition-transform duration-700">
        <div
          className={`bg-cover h-52 bg-blend-screen clip-path-card ${gradientImg}`}
        >
          &nbsp;
        </div>
        <div className="text-3xl font-normal uppercase text-right text-white absolute top-32 right-6 w-2/3">
          <span className={`p-2 ${gradientColor}`}>{cardHeading}</span>
        </div>
        <div className="p-6">
          <ul className="w-4/5 mx-auto">
            <li className="text-center text-sm rounded-sm p-3 border-b-[1px]">
              {cardDetail_1}
            </li>
            <li className="text-center text-sm rounded-sm p-3 border-b-[1px]">
              {cardDetail_2}
            </li>
            <li className="text-center text-sm rounded-sm p-3 border-b-[1px]">
              {cardDetail_3}
            </li>
            <li className="text-center text-sm rounded-sm p-3 border-b-[1px]">
              {cardDetail_4}
            </li>
            <li className="text-center text-sm rounded-sm p-3">
              {cardDetail_5}
            </li>
          </ul>
        </div>
      </div>
      {/* 1/3 card-side card-side-back card-side-back-1 */}
      <div className={`text-lg h-[30rem] absolute top-0 left-0 w-full rounded-lg overflow-hidden shadow-xl preserve-3d  bg-green-600 backface-hidden transition-transform duration-700 ${gradientColor} rotate-y-180 group-hover:rotate-y-0`}>
        {/* card_cta */}
        <div className="absolute move_to_center w-full">
          {/* card_price_box */}
          <div className="text-white uppercase mb-16">
            <p className="text-sm p-4">Only</p>
            <p className="text-7xl font-thin">{cardPrice}</p>
          </div>
          <Button href="#popup" variant="white" size="medium">
            Book now!
          </Button>
        </div>
      </div>
    </div>
  );
};



export default Card;
