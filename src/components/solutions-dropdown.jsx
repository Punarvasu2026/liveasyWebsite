import React from "react";
import { Link } from "react-router-dom"; // Make sure React Router is set up

const solutions = [
  {
    name: "Freight Sourcing and Reverse Auction",
    path: "/freight-sourcing-and-reverse-auction",
  },
  { name: "Indent Automation", path: "/indent-automation" },
  { name: "Invoicing", path: "/invoicing" },
  {
    name: "In-Plant Vehicle Movement and Optimization",
    path: "/in-plant-vehicle-movement-and-optimization",
  },
  { name: "Dashboard and Analytics", path: "/dashboard-analytics" },
  { name: "Tracking", path: "/tracking" },
  { name: "Proof of Delivery", path: "/proof-of-delivery" },
];

const SolutionsDropdown = () => {
  return (
    <div className="absolute top-8 left-0 w-80 bg-white shadow-lg rounded-md py-2 text-sm z-20">
      {solutions.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SolutionsDropdown;
