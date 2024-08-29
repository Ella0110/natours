import Image from "next/image";
// import GradientBackground from "../component/GradientBackground";
import Button from "../component/Button";

export default function Header() {
  return (
    <header
      className="relative h-[95vh] clip-path-custom bg-cover bg-[url('/img/hero-small.jpg')] 
    before:content-[''] before:absolute before:inset-0 before:block before:bg-gradient-to-r
    before:from-emerald-400 before:to-lime-500 before:opacity-75 before:z-[-5]"
    >
      {/* t-4 = 1rem */}
      <div className="absolute top-16 left-16 z-20">
        <Image
          src="/img/logo-white.png"
          alt="logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
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
