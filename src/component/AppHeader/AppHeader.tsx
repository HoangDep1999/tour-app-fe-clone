import NavBar from "../NavBar/NavBar";

function AppHeader() {
  return (
    <>
      <div className="container relative mx-auto h-[25rem] w-full rounded-xl bg-[url('./assets/images/dulichdep.jpg')] bg-cover bg-center px-4 pt-5">
        <NavBar />
        <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform text-center text-neutral-50">
          <div>
            <span className="text-4xl font-medium">Helping Others</span>
          </div>
          <div>
            <span className="text-6xl font-medium uppercase">
              Live & Travel
            </span>
          </div>
          <div>
            <span className="font-medium">
              Special offers to suit your plan
            </span>
          </div>
        </div>
        <div className="absolute left-1/2 top-[350px] w-[90%] max-w-[1200px] translate-x-[-50%] transform rounded-xl bg-white p-20 shadow-md">
          <div className="absolute left-0 right-0 top-0 h-[3rem] rounded-t-lg">
            <div className="absolute bottom-0 left-5 top-[15px] flex w-[15rem] items-center bg-white">
              <div className="p-3">
                <button className="text-gray flex cursor-pointer items-center justify-between px-4 py-2 font-medium hover:text-blue-500 focus:border-b-4 focus:border-blue-500 focus:outline-none">
                  Flights
                </button>
              </div>
              <div className="p-3">
                <button className="text-gray flex cursor-pointer items-center justify-between px-4 py-2 font-medium hover:text-blue-500 focus:border-b-4 focus:border-blue-500 focus:outline-none">
                  Stays
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
