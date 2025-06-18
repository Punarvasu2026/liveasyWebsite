import React from 'react';
import GradientDecoration from '../assets/gradient-decoration.png'; // update the path as needed

const ReviewCard = ({ stars = 5, text }) => {
  return (
    <div className="
      relative bg-[#DRD2E3] border border-[#E5E7EB] rounded-[12px]
      w-[280px] h-[320px] md:w-[450px] md:h-[280.25px]
      p-[20px] md:p-[40px] flex flex-col justify-start gap-6
      font-inter text-[#1A1A1A] overflow-hidden shrink-0
    ">
      {/* Stars */}
      <div className="text-[#FF991F] text-xl leading-none z-10">
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
      </div>

      {/* Review Text */}
      <p className="text-[14px] md:text-[16px] leading-[1.75] font-normal z-10">
        {text}
      </p>

      {/* Gradient Decoration Image */}
      <img
        src={GradientDecoration}
        alt="Decoration"
        className="absolute bottom-0 right-0 w-[90px] md:w-[120px] z-0"
      />
    </div>
  );
};

export default ReviewCard;
