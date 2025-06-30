import React from "react";
import { Clock, HelpCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="w-full bg-gradient-to-br from-[#191818] to-[#14204A] px-10 lg:px-40 py-32 overflow-x-hidden">
      <div className="w-full max-w-[1120px] mx-auto flex flex-col lg:flex-row gap-[216px]">
        {/* Left Section */}
        <div className="w-full max-w-[384px] flex flex-col gap-10">
          {/* Text Box */}
          <div className="w-[319px] flex flex-col gap-6">
            <p className="font-outfit text-white text-[16px] font-normal leading-none">
              JOIN THE JOURNEY
            </p>
            <h2 className="font-outfit text-white text-[50px] font-semibold leading-none">
              Contact us
            </h2>
            <p className="text-white text-sm font-normal leading-relaxed">
              We’re here to help—share your thoughts or inquiGet our exclusive
              offers and latest updates about our products. You can reach us out
              anytime via <br />
              <a
                href="mailto:&#105;&#110;&#102;&#111;&#64;&#99;&#97;&#114;&#103;&#111;&#112;&#114;&#111;&#46;&#97;&#105;"
                className="underline hover:text-gray-200"
              >
                &#105;&#110;&#102;&#111;&#64;&#99;&#97;&#114;&#103;&#111;&#112;&#114;&#111;&#46;&#97;&#105;
              </a>
            </p>
          </div>

          <div
            className="w-[384px] h-[182px] border rounded-[24px] flex items-center justify-center overflow-hidden"
            style={{ border: "1px solid #FFFFFF14" }}
          >
            <img
              src="/images/Careers/contact-us.webp"
              alt="Contact Illustration"
              loading="lazy"
              className="object-contain h-full"
            />
          </div>

          {/* 24/7 and FAQ Section */}
          <div className="flex flex-col sm:flex-row gap-20 w-full max-w-[384px] mt-4">
            {/* 24/7 Support */}
            <div>
              <div className="flex items-center gap-2">
                <Clock size={20} className="text-white" />
                <h3 className="text-white text-[20px] font-bold">24/7</h3>
              </div>
              <a href="#" className="text-blue-400 underline text-sm">
                Support Center
              </a>
              <p className="text-white text-sm">
                Get help and resources for using UI Wiki
              </p>
            </div>

            {/* FAQs */}
            <div>
              <div className="flex items-center gap-2">
                <HelpCircle size={20} className="text-white" />
                <h3 className="text-white text-[20px] font-bold">FAQs</h3>
              </div>
              <a href="#" className="text-blue-400 underline text-sm">
                Read all FAQ’s
              </a>
              <p className="text-white text-sm">
                Browse answers to common questions
              </p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full max-w-[520px] bg-[#1D2B53] p-[60px] rounded-[24px] flex flex-col gap-6">
          <div className="flex flex-col gap-6">
            <label className="text-white text-sm uppercase">Full Name</label>
            <input
              type="text"
              placeholder="Jonnie Dawson"
              className="p-3 rounded bg-[#0F1C3F] text-white border border-[#2A3A64] outline-none"
            />
            <label className="text-white text-sm uppercase">Email</label>
            <input
              type="email"
              placeholder="hello@cargopro.ai"
              className="p-3 rounded bg-[#0F1C3F] text-white border border-[#2A3A64] outline-none"
            />
            <label className="text-white text-sm uppercase">Message</label>
            <textarea
              placeholder="I’d love to learn more about your services"
              rows="4"
              className="p-3 rounded bg-[#0F1C3F] text-white border border-[#2A3A64] outline-none"
            />
            <button className="mt-4 py-3 rounded-full bg-[#375AFF] text-white font-medium hover:bg-[#2746D2] transition">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
