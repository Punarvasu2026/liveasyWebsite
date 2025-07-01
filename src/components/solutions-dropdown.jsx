import React from "react";
import { Link } from "react-router-dom";

const solutions = [
  {
    name: "Freight Sourcing and Reverse Auction",
    path: "/freight-sourcing-and-reverse-auction",
  },
  {
    name: "Indent Automation",
    path: "/indent-automation",
  },
  {
    name: "In-Plant Vehicle Movement and Optimization",
    path: "/in-plant-vehicle-movement-and-optimization",
  },
  {
    name: "Tracking",
    path: "/tracking",
  },
  {
    name: "Proof of Delivery",
    path: "/proof-of-delivery",
  },
  {
    name: "Invoicing",
    path: "/invoicing",
  },
  {
    name: "Dashboard and Analytics",
    path: "/dashboard-analytics",
  },
];

const SolutionsDropdown = ({ closeMobileMenu, isMobile }) => {
  // For mobile, simple vertical block, for desktop absolute dropdown box
  if (isMobile) {
    return (
      <div className="pl-4 space-y-2">
        {solutions.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            onClick={closeMobileMenu}
            className="block text-primaryBlue hover:text-blue-700"
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 mt-2 w-80 bg-white shadow-md rounded-md py-2 text-sm z-50">
      {solutions.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          onClick={closeMobileMenu}
          className="block px-4 py-2 hover:bg-gray-100 text-primaryBlue"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SolutionsDropdown;
