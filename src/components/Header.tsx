import {
  ChevronDown,
  CircleDot,
  Github,
  GitPullRequest,
  Inbox,
  Menu,
  Plus,
  Search,
} from "lucide-react";

function Header() {
  return (
    <header className="text-white bg-black">
      <div className="flex place-content-between p-4">
        <div className="flex gap-4">
          <div className="w-[30px] h-[30px] border-1 rounded flex items-center align-center justify-center ">
            {/* <FontAwesomeIcon /> */}
            <Menu />
          </div>
          <div className="w-[30px] h-[30px] rounded-full border-1 flex items-center align-center justify-center">
            <Github size={18} />
          </div>
          <div className="font-bold">Ronald De Mesa</div>
        </div>
        <div className="flex gap-3">
          <div className="w-[30px] h-[30px] border-1 rounded flex items-center align-center justify-center">
            <Search size={"18"} />
          </div>
          <div className="hidden md:flex gap-3">
            <div className="border width-[50px] h-[30px] rounded flex">
              <div className="w-[40px] h-full border-e-2 flex items-center align-center justify-center">
                <Github size={18} />
              </div>
              <div className="w-[23px] flex items-center align-center justify-center">
                {"<"}
              </div>
            </div>
            <div>|</div>
            <div className="flex gap-3">
              <div className="border width-[50px] h-[30px] rounded flex">
                <div className="w-[30px] flex items-center align-center justify-center">
                  <Plus size={18} />
                </div>
                <div className="w-[30px] flex items-center align-center justify-center">
                  <ChevronDown size={18} />
                </div>
              </div>
              <div className="w-[30px] h-[30px] border-1 rounded flex items-center align-center justify-center">
                <CircleDot size={18} />
              </div>
              <div className="w-[30px] h-[30px] border-1 rounded flex items-center align-center justify-center">
                <GitPullRequest size={18} />
              </div>
            </div>
          </div>
          <div className="w-[30px] h-[30px] border-1 rounded flex items-center align-center justify-center">
            <Inbox size={18} />
          </div>
          <div className="w-[30px] h-[30px] rounded-full border-1">icon</div>
        </div>
      </div>
      <div className="h-[55px] flex p-3 align-items-center justify-content-center">
        <div className="flex gap-5">
          <div className="h-[30px] px-3 py-1 rounded hover:bg-gray-900 ">
            Overview
          </div>
          <div className="h-[30px] px-3 py-1 rounded hover:bg-gray-900 ">
            Repository
          </div>
          <div className="h-[30px] px-3 py-1 rounded hover:bg-gray-900 ">
            Projects
          </div>
          <div className="hidden h-[30px] px-3 py-1 rounded hover:bg-gray-900 ">
            Packages
          </div>
          <div className="hidden h-[30px] px-3 py-1 rounded hover:bg-gray-900 ">
            Stars
          </div>
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
