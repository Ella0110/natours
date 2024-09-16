import Button from "@/app/component/Button";
import Image from "next/image";
import nextConfig from "../../../next.config.mjs";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 py-32 text-gray-400">
      <div className="text-center mb-16">
        <picture className="w-32 h-auto inline-block">
          <Image
            src={`${nextConfig.basePath}/img/logo-green-2x.png`}
            alt="Full logo"
            width={200}
            height={200}
            className="w-32 h-auto hidden md:block"
          />

          <Image
            src={`${nextConfig.basePath}/img/logo-green-small-1x.png`}
            alt="Full logo"
            width={200}
            height={200}
            className="w-32 h-auto block md:hidden"
          />
        </picture>
      </div>
      {/* row */}
      <div className="flex flex-col p-10 md:flex-row gap-9 md:gap-0 items-center md:items-start md:justify-between max-w-[78rem] my-0 mx-auto">
        {/* col-1-of-2 */}
        <div className="w-3/4 md:w-[45%]">
          <div className="border-t-2 border-solid w-full border-gray-500 pt-4 inline-block">
            <ul className="flex items-center flex-wrap justify-center">
              {["Career", "Contact us", "Privacy policy"].map(
                (src, index) => (
                  <li key={index} className="inline-block mr-4">
                    <a
                      href="#"
                      className="text-gray-300 whitespace-nowrap bg-zinc-900 uppercase inline-block transition-all
                            hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                            active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]"
                    >
                      {src}
                    </a>
                  </li>
                )
              )}
              <li className="inline-block mr-4">
                <a
                  href="https://www.linkedin.com/in/ella-chunmeiwu/"
                  className="text-gray-300 bg-zinc-900 uppercase inline-block transition-all
                            hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                            active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]"
                >
                  LinkedIn
                </a>
              </li>
              <li className="inline-block">
                <a
                  href="https://github.com/Ella0110"
                  className="text-gray-300 bg-zinc-900 uppercase inline-block transition-all
                            hover:text-green-700 hover:shadow-xl hover:rotate-6 hover:scale-[1.3]
                            active:text-green-700 active:shadow-xl active:rotate-6 active:scale-[1.3]"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-3/4 md:w-[45%]">
          <p className="border-t-2 border-solid border-gray-500 text-gray-300 pt-4 float-right">
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
