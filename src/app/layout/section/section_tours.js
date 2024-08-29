import Button from "@/app/component/Button";
import Card from "@/app/component/card";

export default function Section_Tours() {
  return (
    <section className="pt-60 pb-60 -mt-40 bg-white">
      <div className="text-center mb-20">
        <h2 className="heading-secondary">Most Popular Tours</h2>
      </div>
      <div className="flex flex-wrap justify-between max-w-[70rem] mx-auto">
        {/* 1/3 card */}
        <div className="basis-[30%]">
          {/* card gradientImg, gradientColor, cardHeading, cardDetail_1, cardDetail_2, 
          cardDetail_3, cardDetail_4, cardDetail_5, cardPrice*/}
          <Card
          gradientImg = "bg-[linear-gradient(to_right_bottom,rgba(255,185,0),rgba(255,119,48)),url('/img/nat-5.jpg')]"
          gradientColor = "bg-gradient-to-tr from-yellow-400 to-orange-500"
          cardHeading = "The Sea Explorer"
          cardDetail_1 = "3 day tours"
          cardDetail_2 = "up tp 30 people"
          cardDetail_3 = "2 tour guides"
          cardDetail_4 = "Sleep in the ship"
          cardDetail_5 = "Difficulty: easy"
          cardPrice = "$297"/> 
        </div>

        <div className="basis-[30%]">
          {/* card gradientImg, gradientColor, cardHeading, cardDetail_1, cardDetail_2, 
          cardDetail_3, cardDetail_4, cardDetail_5, cardPrice*/}
          <Card
          gradientImg = "bg-[linear-gradient(to_right_bottom,rgba(52,211,153),rgba(163,230,53)),url('/img/nat-6.jpg')]"
          gradientColor = "bg-gradient-to-tr from-lime-400 to-green-500"
          cardHeading = "The Forest Hiker"
          cardDetail_1 = "3 day tours"
          cardDetail_2 = "up tp 30 people"
          cardDetail_3 = "2 tour guides"
          cardDetail_4 = "Sleep in the ship"
          cardDetail_5 = "Difficulty: easy"
          cardPrice = "$697"/> 
        </div>

        <div className="basis-[30%]">
          {/* card gradientImg, gradientColor, cardHeading, cardDetail_1, cardDetail_2, 
          cardDetail_3, cardDetail_4, cardDetail_5, cardPrice*/}
          <Card
          gradientImg = "bg-[linear-gradient(to_right_bottom,rgba(41,151,255),rgba(86,67,250)),url('/img/nat-7.jpg')]"
          gradientColor = "bg-gradient-to-tr from-blue-400 to-purple-500"
          cardHeading = "The Snow Advanture"
          cardDetail_1 = "3 day tours"
          cardDetail_2 = "up tp 30 people"
          cardDetail_3 = "2 tour guides"
          cardDetail_4 = "Sleep in the ship"
          cardDetail_5 = "Difficulty: easy"
          cardPrice = "$897"/> 
        </div>
      </div>
    </section>
  );
}
