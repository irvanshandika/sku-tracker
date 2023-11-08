function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#D2E0FB] rounded-lg shadow mx-4 mt-[120px]">
        <div className="w-full mx-auto font-bold max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 ~ {year}{" "}
            <a href="/" className="hover:underline">
              S<span className="text-blue-500">K</span>U!
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
