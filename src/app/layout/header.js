import Image from "next/image";
import Button from "../component/Button";
import nextConfig from "../../../next.config.mjs";

export default function Header() {
  return (
    <header
    className="relative clip-path-custom bg-cover h-[95vh] bg-hero">
      {/* t-4 = 1rem */}
      <div className="absolute top-8 left-8 md:top-16 md:left-16 z-20">
        <Image
          src={`${nextConfig.basePath}/img/logo-white.png`}
          alt="logo"
          width={100}
          height={100}
          className="w-2/3 md:w-full"
        ></Image>
      </div>
      <div className="absolute move_to_center">
        <h1 className="text-white uppercase mb-14">
          <span className="block text-5xl md:text-7xl font-normal tracking-[0.5rem] md:tracking-[2rem] move-in-left py-6">
            Outdoors
          </span>
          <span className="block text-base md:text-xl font-bold tracking-[0.25rem] md:tracking-[1rem] move-in-right">
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
