import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo1.png";
import name from "../../assets/images/logoName1.png";
import icon11 from "../../assets/images/icon11.png";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSnapchat } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

;



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to a specific section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scrolling when the route changes
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      scrollToSection(id);
    }
  }, [location]);

  // Check if a link is active based on pathname and hash
  const isLinkActive = (path, hash = "") => {
    if (hash) {
      return location.pathname === path && location.hash === hash;
    }
    return location.pathname === path && !location.hash;
  };

  const getLinkClassName = (isActive) => {
    return `text-gray-600 text-4xl hover:text-gray-900 transition-colors duration-300 relative after:content-['|'] after:mx-4 after:text-gray-300 ${
      isActive ? "text-gray-900" : ""
    }`;
  };

  const getLinkStyle = (isActive) => {
    return isActive ? { transform: "translateY(-5px)", color: "black" } : undefined;
  };
  const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 border-b border-gray-200 shadow-sm transition-all duration-500 ${
    isScrolled ? "bg-white/70 backdrop-blur-md" : "bg-white"
  }`}
>

      {/* Top Bar (Social Icons and Contact Info) */}
      <div className="w-full bg-gray-100 py-2">
        <div className="mx-auto max-w-[1200px] flex items-center justify-between px-4">
          {/* Social Media Icons (Left) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/alaa_altamimi_law/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-br3 transition-colors duration-300"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578185773858"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-br3 transition-colors duration-300"
            >
              <FaFacebook className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%A7%D8%B0-%D8%A7%D9%84%D8%AF%D9%83%D8%AA%D9%88%D8%B1-%D8%B9%D9%84%D8%A7%D8%A1-%D8%A7%D9%84%D8%AA%D9%85%D9%8A%D9%85%D9%8A-295459170?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-br3 transition-colors duration-300"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="https://x.com/alaaaltami23401"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-br3 transition-colors duration-300"
            >
              <FaXTwitter className="text-xl" />
            </a>
            <a
               href="https://www.snapchat.com/add/yourusername"
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-br3 transition-colors duration-300"
             >
               <FaSnapchat className="text-xl" />
             </a>
             <a
               href="https://www.youtube.com/channel/UCYuMZv3s_Clx4JPJjf1IjnQ"
               target="_blank"
               rel="noopener noreferrer"
               className="text-gray-600 hover:text-br3 transition-colors duration-300"
             >
               <FaYoutube className="text-xl" />
             </a>
       
          </div>

          {/* Phone Number and Email (Right) */}
          <div className="flex items-center space-x-4">
            <a
  href="tel:+01066533070"
  className="hidden md:inline text-gray-600 hover:text-br3 transition-colors duration-300"
>
  المنصورة - امام مبني محافظة الدقهلية 
  برج خطاب - الدور الخامس
</a>
            <a
              href="tel:+01066533070"
              className="text-gray-600 hover:text-br3 transition-colors duration-300"
            >
              +20 01066533070
            </a>
            <a
              href="mailto:Alaa_etamemey@mans.edu.eg"
              className="text-gray-600 hover:text-br3 transition-colors duration-300"
            >
              Alaa_etamemey@mans.edu.eg
            </a>
          </div>
        </div>
      </div>

      {/* Main Header (Logo, Navigation, Hamburger) */}
      <div className="mx-auto w-full max-w-[1200px] h-20 flex items-center justify-between px-4">
        {/* Logo and Name (Left) */}
        <div className="flex items-center order-1">
          <NavLink
            to="/"
            className="flex items-center space-x-4"
            onClick={() => scrollToSection("home")}
          >
            <img src={logo} className="h-20  w-auto" alt="logo" />
            <img src={name} className="h-24 w-auto" alt="name" />
          </NavLink>
        </div>

        {/* Navigation Links (Centered) */}
        <nav className="hidden md:flex items-center space-x-8 font-arabFont4 justify-center flex-1 order-2">
          {/* المقالات */}
          <NavLink
            to="/#articles"
            className={getLinkClassName(isLinkActive("/", "#articles"))}
            style={getLinkStyle(isLinkActive("/", "#articles"))}
            onClick={() => scrollToSection("articles")}
          >
            المقالات
         
          </NavLink>

          {/* لماذا نحن */}
          <NavLink
            to="/#why-us"
            className={getLinkClassName(isLinkActive("/", "#why-us"))}
            style={getLinkStyle(isLinkActive("/", "#why-us"))}
            onClick={() => scrollToSection("why-us")}
          >
            لماذا نحن
    
          </NavLink>

          {/* خدماتنا */}
          <NavLink
            to="/#whoweare"
            className={getLinkClassName(isLinkActive("/", "#whoweare"))}
            style={getLinkStyle(isLinkActive("/", "#whoweare"))}
            onClick={() => scrollToSection("whoweare")}
          >
            خدماتنا
          
          </NavLink>

          {/* من نحن */}
          <NavLink
            to="/whoweare"
            className={`text-gray-600 text-4xl hover:text-gray-900 transition-colors duration-300 relative after:content-['|'] after:mx-4 after:text-gray-300 ${
              isLinkActive("/whoweare") ? "text-gray-900" : ""
            }`}
            style={getLinkStyle(isLinkActive("/whoweare"))}
          >
            من نحن
         
          </NavLink>

          {/* الرئيسية */}
          <NavLink
            to="/"
            className={`text-gray-600 text-4xl hover:text-gray-900 transition-colors duration-300 relative ${
              isLinkActive("/") ? "text-gray-900" : ""
            }`}
            style={getLinkStyle(isLinkActive("/"))}
            onClick={() => scrollToSection("home")}
          >
            الرئيسية
       
          </NavLink>
          {/* PDF Button */}
<a
  href="/cv.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-4 flex items-center"
>
  <img
    src={icon11}
    alt="PDF"
    className="w-8 h-8 hover:scale-110 transition-transform"
  />
</a>

        </nav>

        {/* Hamburger Icon (Right on Mobile) */}
        {/* Mobile Right Icons (Hamburger + CV) */}
<div className="md:hidden order-4 flex items-center space-x-3">
  {/* PDF Button */}
  <a
    href="/cv.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={icon11}
      alt="CV"
      className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer"
    />
  </a>

  {/* Hamburger Icon */}
  <button
    onClick={toggleMenu}
    className="text-gray-600 text-2xl focus:outline-none"
  >
    {isMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>

      </div>

      {/* Mobile Menu */}
     {isMenuOpen && (
  <nav
    className="md:hidden fixed top-25 left-0 w-full bg-white/70 backdrop-blur-lg shadow-lg transition-all duration-500 z-40"
  >
    <ul className="flex flex-col text-right items-start space-y-4 py-4 pl-8">
      <li>
        <NavLink
          to="/"
          className={`text-lg transition-colors duration-300 relative ${
            isLinkActive("/") ? "text-br3 font-bold" : "text-black hover:text-br3"
          }`}
          onClick={toggleMenu}
        >
          الرئيسية
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/whoweare"
          className={`text-lg transition-colors duration-300 relative ${
            isLinkActive("/whoweare") ? "text-br3 font-bold" : "text-black hover:text-br3"
          }`}
          onClick={toggleMenu}
        >
          من نحن
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/#whoweare"
          className={`text-lg transition-colors duration-300 relative ${
            isLinkActive("/", "#whoweare") ? "text-br3 font-bold" : "text-black hover:text-br3"
          }`}
          onClick={toggleMenu}
        >
          خدماتنا
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/#why-us"
          className={`text-lg transition-colors duration-300 ${
            isLinkActive("/", "#why-us") ? "text-br3 font-bold" : "text-black hover:text-br3"
          }`}
          onClick={toggleMenu}
        >
          لماذا نحن
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/#articles"
          className={`text-lg transition-colors duration-300 relative ${
            isLinkActive("/", "#articles") ? "text-br3 font-bold" : "text-black hover:text-br3"
          }`}
          onClick={toggleMenu}
        >
                المقالات
              </NavLink>
            </li>
            {/* Social Media Icons in Mobile Menu */}
            <a
  href="المنصورة-امام مبني محافظة الدقهلية-برج خطاب-الدور الخامس"
  className="block md:hidden text-gray-600 hover:text-br3 transition-colors duration-300 mb-2 text-right mr-4 leading-relaxed"
>
  المنصورة-امام مبني محافظة الدقهلية <br />
  برج خطاب - الدور الخامس
</a>

            <li className="flex items-center space-x-4 pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-br3 transition-colors duration-300"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-br3 transition-colors duration-300"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-br3 transition-colors duration-300"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              
              <a
                href="https://x.com/alaaaltami23401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-br3 transition-colors duration-300"
              >
                
                <FaXTwitter className="text-2xl" />
                
              </a>
              <a
                href="https://x.com/alaaaltami23401"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-br3 transition-colors duration-300"
              >
                
                <FaSnapchat className="text-2xl" />
                
              </a>
              <a
                href="https://www.youtube.com/channel/UCYuMZv3s_Clx4JPJjf1IjnQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-br3 transition-colors duration-300"
              >
                
                <FaYoutube className="text-2xl" />
                
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};