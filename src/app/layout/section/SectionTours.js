import Button from "@/app/component/Button";
import Card from "@/app/component/Card";

export default function SectionTours() {
  return (
    <section className="pt-60 pb-60 -mt-40 bg-white" id="section-tours">
      <div className="text-center mb-20">
        <h2 className="heading-secondary">Most Popular Tours</h2>
      </div>
      <div className="flex flex-wrap justify-between max-w-[70rem] mx-auto">
        {/* 1/3 card */}
        <div className="basis-[30%]">
          {/* card gradientImg, gradientColor, cardHeading, cardDetail_1, cardDetail_2, 
          cardDetail_3, cardDetail_4, cardDetail_5, cardPrice*/}
          <Card
            gradientImg="bg-nat-5"
            gradientColor="bg-gradient-to-tr from-yellow-400 to-orange-500"
            cardHeading="The Sea Explorer"
            cardDetail_1="3 day tours"
            cardDetail_2="up tp 30 people"
            cardDetail_3="2 tour guides"
            cardDetail_4="Sleep in the ship"
            cardDetail_5="Difficulty: easy"
            cardPrice="$297"
          />
        </div>

        <div className="basis-[30%]">
          {/* card gradientImg, gradientColor, cardHeading, cardDetail_1, cardDetail_2, 
          cardDetail_3, cardDetail_4, cardDetail_5, cardPrice*/}
          <Card
            gradientImg="bg-nat-6"
            gradientColor="bg-gradient-to-tr from-lime-400 to-green-500"
            cardHeading="The Forest Hiker"
            cardDetail_1="6 day tours"
            cardDetail_2="up tp 30 people"
            cardDetail_3="2 tour guides"
            cardDetail_4="Sleep in the ship"
            cardDetail_5="Difficulty: medium"
            cardPrice="$697"
          />
        </div>

        <div className="basis-[30%]">
          {/* card gradientImg, gradientColor, cardHeading, cardDetail_1, cardDetail_2, 
          cardDetail_3, cardDetail_4, cardDetail_5, cardPrice*/}
          <Card
            gradientImg="bg-nat-7"
            gradientColor="bg-gradient-to-tr from-blue-400 to-purple-500"
            cardHeading="The Snow Advanture"
            cardDetail_1="9 day tours"
            cardDetail_2="up tp 30 people"
            cardDetail_3="2 tour guides"
            cardDetail_4="Sleep in the ship"
            cardDetail_5="Difficulty: hard"
            cardPrice="$897"
          />
        </div>
      </div>
    </section>
  );
}
