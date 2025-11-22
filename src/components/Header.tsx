import { useState } from "react";
import {
  CircleDot,
  Github,
  GitPullRequest,
  Menu,
  Plus,
  Search,
} from "lucide-react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            {/* Mobile hamburger */}
            <button
              aria-label="Open menu"
              className="md:hidden p-2 rounded hover:bg-gray-800"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <Menu />
            </button>

            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-gray-900 flex items-center justify-center">
                <Github size={18} />
              </div>
              <span className="font-bold hidden sm:inline">Ronald De Mesa</span>
            </div>

            {/* Search (hidden on small screens) */}
            <div className="hidden md:block ml-4">
              <div className="relative">
                <input
                  className="bg-gray-900 text-sm rounded px-3 py-1 w-72 focus:outline-none"
                  placeholder="Search or jump to..."
                />
                <Search
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Nav items (desktop) */}
            <nav className="hidden md:flex items-center gap-4 text-sm">
              <a className="px-3 py-1 rounded hover:bg-gray-900">Overview</a>
              <a className="px-3 py-1 rounded hover:bg-gray-900">
                Repositories
              </a>
              <a className="px-3 py-1 rounded hover:bg-gray-900">Projects</a>
              <a className="px-3 py-1 rounded hover:bg-gray-900 hidden lg:inline">
                Packages
              </a>
              <a className="px-3 py-1 rounded hover:bg-gray-900 hidden lg:inline">
                Stars
              </a>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800"
                aria-label="Create"
              >
                <Plus size={16} />
              </button>

              <button
                className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800"
                aria-label="Notifications"
              >
                <CircleDot size={16} />
              </button>

              <button
                className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded hover:bg-gray-800"
                aria-label="Pull requests"
              >
                <GitPullRequest size={16} />
              </button>

              <button
                className="p-2 rounded hover:bg-gray-800 md:hidden"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Open search"
              >
                <Search size={16} />
              </button>

              <button
                className="p-1 rounded-full border border-gray-700 w-8 h-8 flex items-center justify-center bg-gray-900"
                aria-label="Profile"
              >
                {/* avatar placeholder */}
                <span className="text-sm">R</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        {searchOpen && (
          <div className="md:hidden py-2">
            <input
              className="w-full bg-gray-900 px-3 py-2 rounded text-sm focus:outline-none"
              placeholder="Search or jump to..."
            />
          </div>
        )}

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden mt-2 pb-4 border-b border-gray-800">
            <div className="flex flex-col gap-2">
              <a className="px-3 py-2 rounded hover:bg-gray-800">Overview</a>
              <a className="px-3 py-2 rounded hover:bg-gray-800">
                Repositories
              </a>
              <a className="px-3 py-2 rounded hover:bg-gray-800">Projects</a>
              <a className="px-3 py-2 rounded hover:bg-gray-800">Packages</a>
              <a className="px-3 py-2 rounded hover:bg-gray-800">Stars</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
