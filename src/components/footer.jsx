import React from "react";
import { Link } from "react-router-dom"; // <-- import Link
import { FaLinkedinIn, FaYoutube, FaTimes } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#304DAF] text-white px-6 md:px-20 py-10 md:py-20 text-sm">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-[1.2fr_1fr_0.9fr_1.6fr] gap-10">
        {/* Logo + Contact Section */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/CargoProLogoWhite.webp"
                alt="CargoPro Logo"
                loading="lazy"
                className="w-8 h-8 object-contain"
              />
              <h2 className="text-xl font-semibold">CargoPro</h2>
            </div>
            <p className="text-sm mt-2 leading-6">
              Unlock Seamless Real-Time Insights <br />
              Across Your Business with Our Unified <br />
              Platform
            </p>
          </div>
          <div>
            <h3 className="font-bold text-[15px] mb-1">Get in Touch</h3>
            <p className="mb-1">+91 89052 46537</p>
            <a
              href="mailto:&#105;&#110;&#102;&#111;&#64;&#99;&#97;&#114;&#103;&#111;&#112;&#114;&#111;&#46;&#97;&#105;"
              className="hover:underline hover:text-gray-200"
            >
              &#105;&#110;&#102;&#111;&#64;&#99;&#97;&#114;&#103;&#111;&#112;&#114;&#111;&#46;&#97;&#105;
            </a>
          </div>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-[15px] mb-2">Company</h4>
          <Link to="/#whyChooseCargoPro" className="hover:underline">
            Why CargoPro?
          </Link>

          <Link to="/careers#contact-us" className="hover:underline">
            Contact Us
          </Link>
          <Link to="/blogs" className="hover:underline">
            Blog
          </Link>
          {/* For external or no-route links, keep anchor or handle appropriately */}
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <a href="#" className="hover:underline">
            Download Brochure
          </a>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-[15px] mb-2">Legal</h4>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy / GDPR
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-[15px]">Subscribe to our newsletter</h4>

          <div className="bg-[#405EDB] rounded-md p-4 w-full max-w-full">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center border border-white/30 rounded-md overflow-hidden bg-[#405EDB]"
              style={{ gap: 0 }}
            >
              <input
                type="email"
                name="email"
                aria-label="Email address"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 text-white bg-transparent placeholder-white text-sm outline-none focus:outline-none focus:ring-0 border-none rounded-none m-0"
              />
              <button
                type="submit"
                className="bg-white text-[#304DAF] text-sm font-medium px-6 py-2 hover:bg-gray-100 transition-colors border-none rounded-none flex-shrink-0 m-0"
                style={{ minWidth: "80px" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-[1440px] mx-auto flex justify-end gap-4 mt-10 px-6 md:px-20">
        {[
          { icon: FaYoutube, link: "#" },
          {
            icon: FaLinkedinIn,
            link: "https://www.linkedin.com/company/cargopro-ai/",
          },
          { icon: FaTimes, link: "#" },
        ].map(({ icon: Icon, link }, index) => (
          <a
            key={index}
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Icon className="text-white text-sm" />
          </a>
        ))}
      </div>

      {/* Bottom Divider */}
      <div className="max-w-[1440px] mx-auto border-t border-white/30 mt-6 pt-4 px-6 md:px-20">
        <p className="text-center text-sm">
          ©CargoPro 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
