import { useState } from "react";
import Logo from "@icons/Logo";
import HamburgerOpen from "@icons/HamburgerOpen";
import HamburgerClose from "@icons/HamburgerClose";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 lg:mx-4 mx-2 rounded-lg bg-[#D2E0FB] text-sm py-3 mt-2">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none" href="/">
              <Logo />
            </a>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                onClick={toggleMobileMenu}
                aria-expanded={isMenuOpen}>
                {isMenuOpen ? <HamburgerClose /> : <HamburgerOpen />}
              </button>
            </div>
          </div>
          <div id="navbar-with-collapse" className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
              <a className="font-medium text-gray-600 hover:text-blue-500" href="/faq" aria-current="page" target="_blank">
                FAQ
              </a>
              <a className="font-medium text-white bg-[#00A9FF] hover:bg-[#A0E9FF] px-4 py-2 rounded" href="/login">
                Login
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
