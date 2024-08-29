import Image from "next/image";
// import GradientBackground from "../component/GradientBackground";
import Button from "../component/Button";

export default function Header() {
  return (
    <header
    className="relative clip-path-custom bg-cover h-[95vh] 
    bg-[linear-gradient(to_right_bottom,rgba(52,211,153,0.8),rgba(163,230,53,0.8)),url('/img/hero-small.jpg')]">
      {/* t-4 = 1rem */}
      <div className="absolute top-16 left-16 z-20">
        <Image
          src="/img/logo-white.png"
          alt="logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="absolute move_to_center">
        <h1 className="text-white uppercase mb-14">
          <span className="block text-7xl font-normal tracking-[2rem] move-in-left py-6">
            Outdoors
          </span>
          <span className="block text-xl font-bold tracking-[1rem] move-in-right">
            is what life going on
          </span>
        </h1>

        <Button href="#" variant="white" size="medium">
          Discount some
        </Button>
      </div>
    </header>
  );
}
