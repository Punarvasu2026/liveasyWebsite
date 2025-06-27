import React from "react";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const ContentSection = ({
  sections,
  wrappingUp,
  shareUrl = window.location.href,
}) => {
  const shareTitle = "Check out this insightful blog on CargoPro.ai!";
  const encodedTitle = encodeURIComponent(shareTitle);
  const encodedUrl = encodeURIComponent(shareUrl);

  useEffect(() => {
    // Trigger Facebook SDK to parse new elements
    if (window.FB) {
      window.FB.XFBML.parse();
    }
    // Trigger Twitter SDK to parse new elements
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="w-full max-w-[1440px] px-[80px] py-[40px] flex flex-col gap-[60px]">
      {sections.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              isEven ? "md:flex-row-reverse" : ""
            } items-center gap-[80px] w-full max-w-[1280px] mx-auto`}
          >
            <img
              src={section.image}
              alt={section.heading}
              loading="lazy"
              className={`${
                isEven ? "h-[412px]" : "h-[435px]"
              } w-[618px] object-cover ${isEven ? "rounded-[12px]" : ""}`}
            />
            <div className="w-[582px] flex flex-col gap-[40px]">
              <h2 className="w-[582px] font-sora font-semibold text-[40px] leading-[100%] text-[#22377C]">
                {index + 1}. {section.heading}
              </h2>
              <p className="w-[582px] font-dm-sans font-normal text-[18px] leading-[30px] text-[#40474F]">
                {section.paragraph}
              </p>
            </div>
          </div>
        );
      })}

      {/* Wrapping Up Section */}
      {wrappingUp && (
        <div className="w-full max-w-[1280px] flex flex-col gap-[20px] mt-10 mx-auto">
          <h2 className="font-sora font-semibold text-[40px] leading-[100%] text-[#22377C]">
            {wrappingUp.title}
          </h2>

          {wrappingUp.description && (
            <p className="font-dm-sans text-[18px] leading-[30px] text-[#40474F]">
              {wrappingUp.description}
            </p>
          )}

          {wrappingUp.footerText && (
            <div className="flex flex-col gap-[16px]">
              <p className="font-dm-sans font-semibold text-[24px] leading-[30px] text-[#40474F]">
                {wrappingUp.footerText}
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 items-center mt-2 flex-wrap">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`}
                  aria-label="Share on Facebook"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 md:w-10 md:h-10 bg-black shadow-md rounded-full flex items-center justify-center hover:bg-[#f0f0f0]"
                >
                  <FaFacebookF className="text-[#22377C] w-5 h-5" />
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                  aria-label="Share on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 md:w-10 md:h-10 bg-black shadow-md rounded-full flex items-center justify-center hover:bg-[#f0f0f0]"
                >
                  <FaLinkedinIn className="text-[#22377C] w-5 h-5" />
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                  aria-label="Share on Twitter"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 md:w-10 md:h-10 bg-black shadow-md rounded-full flex items-center justify-center hover:bg-[#f0f0f0]"
                >
                  <FaTwitter className="text-[#22377C] w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
                  aria-label="Share on WhatsApp"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="w-10 h-10 md:w-10 md:h-10 bg-black shadow-md rounded-full flex items-center justify-center hover:bg-[#f0f0f0]"
                >
                  <FaWhatsapp className="text-[#22377C] w-5 h-5" />
                </a>
                <a
                  href={`mailto:?subject=Check this out from CargoPro.ai&body=${encodedTitle}%0A${encodedUrl}`}
                  aria-label="Share via Email"
                  className="w-10 h-10 md:w-10 md:h-10 bg-black shadow-md rounded-full flex items-center justify-center hover:bg-[#f0f0f0]"
                >
                  <FaEnvelope className="text-[#22377C] w-5 h-5" />
                </a>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContentSection;
