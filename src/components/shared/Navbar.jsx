import logo from "../../assets/images/logo/logo.svg";
export default function Navbar() {
  return (
    <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent bg-red-200">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="flex w-full items-center justify-between px-2 md:px-4 py-3">
            <a
              href="/"
              className="navbar-logo block w-30 md:w-60 max-w-full pl-4"
            >
              <img src={logo} alt="logo" className="header-logo h-11 md:h-12" />
            </a>

            <ul className="hidden lg:flex ">
              <li className="group relative">
                <a
                  href="/"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70"
                >
                  Home
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#about"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                >
                  About
                </a>
              </li>
              <li className="group relative">
                <a
                  href="#pricing"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                >
                  Pricing
                </a>
              </li>

              <li className="group relative">
                <a
                  href="#blogs"
                  className="ud-menu-scroll mx-8 flex py-2 text-base font-medium text-dark group-hover:text-primary dark:text-white lg:ml-7 lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 lg:text-white lg:group-hover:text-white lg:group-hover:opacity-70 xl:ml-10"
                >
                  Blog
                </a>
              </li>
            </ul>

            <div className="sm:flex">
              <a
                href="signin"
                className="flex-1 loginBtn px-[22px] py-2 text-sm md:text-base font-medium text-white hover:opacity-70"
              >
                Sign In
              </a>
              <a
                href="signup"
                className="signUpBtn text-sm rounded-md bg-white bg-opacity-20 px-6 py-2 md:text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-100 hover:text-dark"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
