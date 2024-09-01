import Button from "@/app/component/Button";

export default function Section_Book() {
  return (
    <section className="p-40 bg-gradient-to-tr from-lime-500 to-green-500">
      <div className="max-w-[70rem] mx-auto">
        <div className="bg-nat-10 bg-cover bg-center rounded-sm shadow-xl">
          <div className="w-1/2 p-10">
            <form action="#">
              <div className="my-10">
                <h2 className="heading-secondary">Start booking now</h2>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Full name"
                  id="name"
                  required
                  className="text-base p-3 text-inherit rounded-sm block border-b-2 border-b-transparent
                                w-4/5 transition-all bg-white bg-opacity-50 border-none focus:shadow-sm peer
                                focus:outline-none focus:border-b-[3px] focus:border-b-green-600 focus:border-solid "
                />
                <label
                  for="name"
                  className="text-sm font-medium ml-3 mt-1 block transition-all
                  peer-placeholder-shown:opacity-0 peer-placeholder-shown:-translate-y-9"
                // group-focus-within:opacity-100 group-focus-within:translate-y-1"
                >
                  Full name
                </label>
              </div>

              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  required
                  className="text-base p-3 text-inherit rounded-sm block border-b-2 border-b-transparent
                                w-4/5 transition-all bg-white bg-opacity-50 border-none focus:shadow-sm peer
                                focus:outline-none focus:border-b-[3px] focus:border-b-green-600 focus:border-solid "
                />
                <label
                  for="email"
                  className="text-sm font-medium ml-3 mt-1 block transition-all
                  peer-placeholder-shown:opacity-0 peer-placeholder-shown:-translate-y-9"
                // group-focus-within:opacity-100 group-focus-within:translate-y-1"
                >
                  Email
                </label>
              </div>

              <div className="mb-6">
                <div className="w-1/2 inline-block relative">
                  <input type="radio" id="small" name="size" 
                  className="appearance-none peer w-8 h-8 border-[4px] border-green-500 rounded-full" />
                  <div className="absolute w-4 h-4 rounded-full  top-2 left-2 z-20 
                  pointer-events-none peer-checked:bg-green-500"></div>
                  <label for="small" className="absolute text-base cursor-pointer pl-4 top-1">
                      Small tour group
                  </label>
                </div>

                <div className="w-1/2 inline-block relative">
                  <input type="radio" id="large" name="size" 
                  className="appearance-none peer w-8 h-8 border-[4px] border-green-500 rounded-full" />
                  <div className="absolute w-4 h-4 rounded-full  top-2 left-2 z-20 
                  pointer-events-none peer-checked:bg-green-500"></div>
                  <label for="large" className="absolute text-base cursor-pointer pl-4 top-1">
                      Large tour group
                  </label>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </section>
    //
  );
}


                      {/* <span className="h-4 w-4 
                         peer-checked/small:bg-green-500
                      outline-[6px] outline outline-offset-4 outline-green-500
                      rounded-full inline-block absolute -top-1 left-0"></span> */}

                                        {/* border-solid border-[6px] border-green-500  */}