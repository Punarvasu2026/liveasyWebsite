import React, { useState, useRef, useEffect } from "react";

const SignUpDropdown = ({ isMobile = false }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${isMobile ? "w-full" : ""}`} ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className={`${
          isMobile
            ? "w-full border border-blue-700 text-blue-700"
            : "text-blue-700 border border-blue-700"
        } rounded-full py-2 px-4 hover:bg-blue-50 transition`}
      >
        Sign Up
      </button>

      {open && (
        <div
          className={`${
            isMobile
              ? "mt-2 space-y-1"
              : "absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg"
          } z-50`}
        >
          <a
            href="https://shipper.cargopro.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50"
          >
            Shipper
          </a>
          <a
            href="https://transporter.cargopro.ai/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="block w-full text-left px-4 py-2 text-blue-700 hover:bg-blue-50"
          >
            Transporter
          </a>
        </div>
      )}
    </div>
  );
};

export default SignUpDropdown;
