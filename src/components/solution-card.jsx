import React from 'react';

const SolutionCard = ({ title, description, iconActive, iconInactive }) => {
  return (
    <div
      className="group rounded-xl p-6 border-2 bg-grey text-gray-800 border-gray-200 hover:shadow-md
        hover:bg-[#2d55fb] hover:text-white transition duration-300 cursor-pointer"
    >
      <div className="mb-4">
        <img
          src={iconInactive}
          alt={`${title} icon`}
          className="w-10 h-10 group-hover:hidden"
        />
        <img
          src={iconActive}
          alt={`${title} icon active`}
          className="w-10 h-10 hidden group-hover:block"
        />
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-white text-gray-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed group-hover:text-white/90 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default SolutionCard;
