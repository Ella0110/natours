import Image from "next/image";
import Button from "../component/Button";
import nextConfig from "../../../next.config.mjs";

export default function Header() {
  return (
    <header
    className="relative clip-path-custom bg-cover h-[95vh] bg-hero">
      {/* t-4 = 1rem */}
      <div className="absolute top-16 left-16 z-20">
        <Image
          src={`${nextConfig.basePath}/img/logo-white.png`}
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
