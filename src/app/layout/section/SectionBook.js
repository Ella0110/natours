import Button from "@/app/component/Button";
import Radio from "@/app/component/Radio";

export default function SectionBook() {
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
                  name=""
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
                <Radio 
                  radioName="Small tour group"
                />

                <Radio 
                  radioName="Large tour group"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    //
  );
}