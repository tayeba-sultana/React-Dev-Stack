import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      
      className="border-t border-[#e5e7eb] bg-white"
    >
      <div className="container mx-auto px-5">

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-4">

          <div id="about">

            <a href="#">
              <img
                src={logo}
                alt="Dev Stack"
                className="h-9 w-auto"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#64748b]">
             Curated tools, technologies, and resources for developers building
             modern software.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#64748b]"
              >
                <FaGithub size={16} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#64748b]"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e5e7eb] text-[#64748b]"
              >
                <FaLinkedinIn size={16} />
              </a>

            </div>

          </div>

  
          <div>

            <h3 className="text-sm font-semibold text-[#1e293b]">
              Product
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#64748b]">
               
               <li>
                <a
                  href="#technologies"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                >
                  Projects
                </a>
              </li>

            </ul>

          </div>

         
          <div>

            <h3 className="text-sm font-semibold text-[#1e293b]">
              Company
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#64748b]">

              <li>
                <a
                  href="#about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                >
                  Careers
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="text-sm font-semibold text-[#1e293b]">
              Legal
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-[#64748b]">

              <li>
                <a
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                >
                  Terms of Service
                </a>
              </li>

            </ul>

          </div>

        </div>

        
        <div className="flex flex-col gap-4 border-t border-[#e5e7eb] py-6 text-sm text-[#64748b] md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">

            <a
              href="#"
            >
              Privacy
            </a>

            <a
              href="#"
            >
              Terms
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;






