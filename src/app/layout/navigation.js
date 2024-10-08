export default function Navigation() {
  return (
    <navigation>
      <input type="checkbox" className="hidden peer" id="navi-toggle" />
      <label
        for="navi-toggle"
        className=" flex items-center justify-center bg-white h-16 w-16 fixed top-8 right-8 lg:top-12 lg:right-12 rounded-full z-40
          shadow-lg cursor-pointer group"
      >
        {/* !!! new knowledge:group-[.peer:checked+&]: !!!*/}
        <span
          className="absolute top-[38%] w-8 h-[2px] bg-slate-600 inline-block 
          group-hover:top-[35%] group-[.peer:checked+&]:rotate-[135deg] group-[.peer:checked+&]:top-1/2
          "
        >
          &nbsp;
        </span>
        <span
          className="absolute top-1/2 w-8 h-[2px] bg-slate-600 inline-block
          group-[.peer:checked+&]:hidden"
        >
          &nbsp;
        </span>
        <span
          className="absolute top-[62%] w-8 h-[2px] bg-slate-600 inline-block
          group-hover:top-[65%] group-[.peer:checked+&]:rotate-[-135deg] group-[.peer:checked+&]:top-1/2"
        >
          &nbsp;
        </span>
      </label>
      <div
        className="h-12 w-12 rounded-full fixed top-9 right-9 lg:top-14 lg:right-14 z-20 transition-transform duration-500
      bg-gradient-radial from-lime-400 to-emerald-500 peer-checked:scale-[2000]"
      >
        &nbsp;
      </div>

      <nav
        className="h-[100vh] w-full fixed top-0 left-0 z-30 opacity-0 hidden transition-all duration-700
      move-in-left peer-checked:opacity-100 peer-checked:block"
      >
        <ul className="absolute move_to_center w-full">

          {
            [
              "About Natour",
              "Your benifits",
              "Popular tours",
              "Stories",
              "Book now"
            ].map((src, index) => (
              <li key={index} className="my-5 md:my-10">
                <a
                  href="#"
                  className="inline-block text-2xl md:text-3xl font-light text-white py-2 px-5 uppercase bg-button-gradient transition-all 
                  duration-500 hover:bg-right hover:text-green-500 hover:translate-x-2 active:bg-right 
                  active:text-green-500 active:translate-x-2"
                >
                  <span className="mr-3">0{index+1}</span>{src}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </navigation>
  );
}
