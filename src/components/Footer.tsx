import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "@/assets/logo-png.png";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex justify-center border-t border-gray-200">
      <div className="container w-full py-10 lg:px-[8%]">
        <div className="grid max-md:divide-y max-md:gap-3 md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex max-[540px]:justify-center justify-start pb-4 md:pb-0">
            <Link to="/" className="flex items-center gap-2 group">
              <img src={logo} alt="" className="w-[160px]" />
            </Link>
          </div>
          <div>
            <h2 className="text-accent font-bold text-lg">Quick Links</h2>
            <ul className="space-y-1.5 mt-4 md:mt-6 pb-4 md:pb-0">
              <li
                className="cursor-pointer "
                onClick={() => navigate("/")}
              >
               Home
              </li>
              <li
                className="cursor-pointer "
                onClick={() => navigate("/portfolio")}
              >
                Portfolio
              </li>
              <li
                className="cursor-pointer "
                onClick={() => navigate("/courses")}
              >
                Courses
              </li>
              <li
                className="cursor-pointer "
                onClick={() => navigate("/blogs")}
              >
               Blogs
              </li>
              <li
                className="cursor-pointer "
                onClick={() => navigate("/contact-us")}
              >
               Contact Us
              </li>
            
            </ul>
          </div>
          <div>
            <h2 className="text-accent font-bold text-lg">SOCIALS</h2>
            <div className="space-y-2 mt-4 md:mt-6 pb-4 md:pb-0">
              <a
                href="https://www.facebook.com/CSbyKK"
                target="_blank"
                className="cursor-pointer flex items-center gap-2"
              >
                <div className="w-[35px] aspect-[1/1] flex justify-center items-center bg-accent rounded-full">
                  <Facebook className="text-white" size={20} />
                </div>
                <span>Facebook</span>
              </a>

              <a
              href="https://www.instagram.com/computersciencebykabeerkalhoro/"
                target="_blank"
               className="cursor-pointer flex items-center gap-2">
                <div className="w-[35px] aspect-[1/1] flex justify-center items-center bg-accent rounded-full">
                  <Instagram className="text-white" size={18} />
                </div>
                <span>Instagram</span>
              </a>

              <a
              href="https://www.youtube.com/@ComputerScienceByKabeerKalhoro"
                target="_blank"
              className="cursor-pointer flex items-center gap-2">
                <div className="w-[35px] aspect-[1/1] flex justify-center items-center bg-accent rounded-full">
                  <Youtube className="text-white" size={18} />
                </div>
                <span>Youtube</span>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-accent font-bold text-lg">CONTACT</h2>

            <div className="mt-5 leading-relaxed grid gap-2">
              <a
                href="mailto:cswithkabeerkalhoro@gmail.com"
                className="text-black hover:underline "
              >
                Email: <br /> cswithkabeerkalhoro@gmail.com
              </a>
              <a href="tel:03402591525">
                Call Us: <br /> +92340 2591525
              </a>
              <a className="cursor-pointer ">Karachi, Pakistan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
