import Logo from "../assets/logo-text.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-[#e1e4e6] sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center h-20 text-[#475569]">

        <div>
          <a href="#">
            <img src={Logo} alt="Dev Stack" />
          </a>
        </div>

        <ul className="flex justify-center items-center gap-5">
          <li className="text-[#DB2777]">
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#technologies">Technologies</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex justify-center items-center gap-5">
          <a href="#">Sign In</a>

          <a
            href="#"
            className="rounded-full px-3 py-1 text-white bg-linear-to-r from-[#f97316] via-[#ec4899] to-[#7C3AED] shadow-[0px_1px_2px_0px_#fbcfe8]"
          >
            Sign Up
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
