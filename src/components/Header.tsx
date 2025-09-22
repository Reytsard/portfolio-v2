function Header() {
  return (
    <header className="border-1 text-white bg-black">
      <div className="flex place-content-between p-4">
        <div className="flex gap-[20px]">
          <div className="w-[30px] h-[30px] border-1 rounded ">
            {/* <FontAwesomeIcon /> */}
          </div>
          <div className="w-[30px] h-[30px] rounded-full border-1">logo</div>
          <div className="font-bold">Ronald De Mesa</div>
        </div>
        <div className="flex gap-3">
          <div className="w-[30px] h-[30px] border-1 rounded">search</div>
          <div className="hidden md:flex">
            <div className="border width-[50px] h-[30px] rounded flex">
              <div className="h-full border-e-2">github</div>
              <div className="w-[23px]">{"<"}</div>
            </div>
            <div>|</div>
            <div className="flex gap-3">
              <div className="border width-[50px] h-[30px] rounded flex">
                <div>plus</div>
                <div>down</div>
              </div>
              <div className="w-[30px] h-[30px] border-1 rounded">issues</div>
              <div className="w-[30px] h-[30px] border-1 rounded">PRs</div>
            </div>
          </div>
          <div className="w-[30px] h-[30px] border-1 rounded">inbox</div>
          <div className="w-[30px] h-[30px] rounded-full border-1">icon</div>
        </div>
      </div>
      <div className="h-[55px] flex p-3 align-items-center justify-content-end">
        <div className="flex gap-5">
          <div className="h-[40px]">Overview</div>
          <div className="h-[40px]">Repository</div>
          <div className="h-[40px]">Projects</div>
          <div className="h-[40px]">Packages</div>
          <div className="h-[40px]">Stars</div>
        </div>
        {/* place overview, repositories, projects,packages, stars{" "}
        <div>
          create way to check width and create overflow button for other options
        </div> */}
      </div>
    </header>
  );
}

export default Header;
