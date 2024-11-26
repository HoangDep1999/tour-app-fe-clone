import NavBar from "../NavBar/NavBar";

function AppHeader() {
  return (
    <>
      <div className="container relative mx-auto h-[25rem] w-full rounded-xl bg-[url('./assets/images/dulichdep.jpg')] bg-cover bg-center px-4 pt-5">
        <NavBar />
        <div className="absolute text-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] transform text-neutral-50">
          <div>
            <span className=" font-medium text-4xl">Helping Others</span>
          </div>
          <div>
            <span className="font-medium text-6xl uppercase">Live & Travel</span>
          </div>
          <div>
            <span className="font-medium">Special offers to suit your plan</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppHeader;
