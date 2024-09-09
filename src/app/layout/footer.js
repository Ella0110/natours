import Button from "@/app/component/Button";
import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-32 text-base text-gray-400">
      <div className="text-center mb-16">
        <picture className="w-32 h-auto inline-block">
          <Image
            src={`${nextConfig.basePath}/img/logo-green-2x.png`}
            alt="Full logo"
            width={200}
            height={200}
            className="w-32 h-auto"
          />
        </picture>
      </div>
      {/* row */}
      <div className="flex flex-wrap justify-between max-w-[75rem] my-0 mx-auto">
        {/* col-1-of-2 */}
        <div className="w-[45%]">
          <div className="border-t-2 border-solid border-gray-500 pt-4 inline-block">
            <ul className="">
              {["Company", "Contact us", "Carrers", "Privacy policy"].map(
                (src, index) => (
                  <li key={index} className="inline-block mr-4">
                    <a
                      href="#"
                      className="text-gray-300 bg-zinc-900 uppercase inline-block transition-all
                            hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                            active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]"
                    >
                      {src}
                    </a>
                  </li>
                )
              )}
              <li className="inline-block">
                <a
                  href="#"
                  className="text-gray-300 bg-zinc-900 uppercase inline-block transition-all
                            hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                            active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-[45%]">
          <p className="border-t-2 border-solid border-gray-500 text-gray-300 pt-4 w-4/5 float-right">
            Built by{" "}
            <a
              href="#"
              className="
                        text-gray-300 bg-zinc-900 uppercase inline-block transition-all
                        hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                        active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]
                        "
            >
              Ella
            </a>{" "}
            as part of an online practice project for the{" "}
            <a
              href="#"
              className="
                        text-gray-300 bg-zinc-900 uppercase inline-block transition-all
                        hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                        active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]
                        "
            >
              Advanced CSS and Sass
            </a>{" "}
            course. Copyright &copy; Jonas Schmedtmann. You are 100% allowed to
            use this webpage for both personal and commercial use, but NOT to
            claim it as your own design. Attribution to the original creator,
            Jonas Schmedtmann, is appreciated!
          </p>
        </div>
      </div>
    </footer>
  );
}
