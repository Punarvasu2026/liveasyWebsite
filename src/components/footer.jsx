import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import CargoProLogo from "../assets/CargoProLogoWhite.png"; // Adjust the path as necessary

const Footer = () => {
  return (
    <footer className="bg-[#304DAF] text-white px-4 pt-10 pb-10 md:px-20 md:pt-20 md:pb-20">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Section */}
        <div className="md:w-[450px] flex flex-col gap-6 w-full">
          {/* added w-full for mobile full width */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={CargoProLogo} // <-- Replace with your logo path or import
                alt="CargoPro Logo"
                className="w-8 h-8 object-contain"
              />
              <h2 className="text-xl font-semibold">CargoPro</h2>
            </div>
            <p className="text-sm leading-6 mt-2">
              Unlock Seamless Real-Time Insights <br />
              Across Your Business with Our Unified <br />
              TMS Platform
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-[17px]">Get in Touch</h3>
            <p className="text-sm">+91 89052 46537</p>
            <a
              href="mailto:hello@cargopro.ai"
              className="text-sm underline hover:text-gray-200"
            >
              hello@cargopro.ai
            </a>
          </div>
        </div>

        {/* Link Sections */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-[80px] flex-1 text-sm w-full">
          {/* Company */}
          <div className="flex flex-col gap-5 md:gap-5">
            <h4 className="font-bold text-[17px]">Company</h4>
            <ul className="[&>li]:mb-0 [&>li+li]:mt-[16px]">
              <li>
                Why CargoPro
                {/* <a href="#" className="hover:underline">
                  Why CargoPro?
                </a> */}
              </li>
              <li>
                Contact Us
                {/* <a href="#" className="hover:underline">
                  Contact Us
                </a> */}
              </li>
              <li>
                Blog
                {/* <a href="#" className="hover:underline">
                  Blog
                </a> */}
              </li>
              <li>
                FAQ
                {/* <a href="#" className="hover:underline">
                  FAQ
                </a> */}
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="flex flex-col gap-5 md:gap-5">
            <h4 className="font-bold text-[17px]">Solutions</h4>
            <ul className="[&>li]:mb-0 [&>li+li]:mt-[16px]">
              <li>
                Services
                {/* <a href="#" className="hover:underline">
                  Services
                </a> */}
              </li>
              <li>
                Support
                {/* <a href="#" className="hover:underline">
                  Support
                </a> */}
              </li>
              <li>
                Free Demo
                {/* <a href="#" className="hover:underline">
                  Free Demo
                </a> */}
              </li>
              <li>
                Testimonals
                {/* <a href="#" className="hover:underline">
                  Testimonials
                </a> */}
              </li>
              <li>
                Download Brochure
                {/* <a href="#" className="hover:underline">
                  Download Brochure
                </a> */}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-5 md:gap-5">
            <h4 className="font-bold text-[17px]">Legal</h4>
            <ul className="[&>li]:mb-0 [&>li+li]:mt-[16px]">
              <li>
                Terms of Services
                {/* <a href="#" className="hover:underline">
                  Terms of Service
                </a> */}
              </li>
              <li>
                Privacy Policy
                {/* <a href="#" className="hover:underline">
                  Privacy Policy / GDPR
                </a> */}
              </li>
              <li>
                Cookie Policy
                {/* <a href="#" className="hover:underline">
                  Cookie Policy
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="max-w-[1440px] mx-auto mt-10 flex justify-end gap-4 px-4 md:px-0">
        {[
          {
            icon: FaLinkedinIn,
            link: "https://www.linkedin.com/company/cargopro-ai/",
          },
          {
            icon: FaWhatsapp,
            link: "https://wa.me/+918905246537", // Replace with your WhatsApp number
          },
        ].map(({ icon: Icon, link }, idx) => (
          <a
            key={idx}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-black rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
          >
            <Icon className="text-white text-sm" />
          </a>
        ))}
      </div>

      {/* Divider */}
      <div className="max-w-[1440px] mx-auto mt-6 border-t border-white/30 pt-4 px-4 md:px-0">
        {/* added px-4 for mobile spacing */}
        <p className="text-center text-sm">
          ©CargoPro 2025. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
