import React, { useRef, useState, useEffect } from "react";
import ReviewCard from "./review-card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    stars: 5,
    text: `“CargoPro Logistics has completely transformed our logistics operations. Their user-friendly platform and exceptional support team have streamlined our processes and improved efficiency significantly.”`,
  },
  {
    stars: 4,
    text: `“The user interface is intuitive, making transactions a breeze. Whether I’m making purchases, tracking my products or managing shipments of goods.”`,
  },
  {
    stars: 5,
    text: `“CargoPro has helped us reduce turnaround time dramatically. The insights are powerful and real-time visibility makes logistics stress-free.”`,
  },
];

const ReviewCarousel = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  useEffect(() => {
    updateScrollButtons();
    const el = scrollRef.current;
    if (!el) return;

    const handleResize = () => updateScrollButtons();
    window.addEventListener("resize", handleResize);
    el.addEventListener("scroll", updateScrollButtons);
    return () => {
      window.removeEventListener("resize", handleResize);
      el.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = window.innerWidth < 768 ? 280 + 32 : 450 + 32;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F8F9FC] w-full py-10 px-4 md:px-20 md:py-20">
      <div className="max-w-[1200px] mx-auto space-y-8">
        <h2 className="text-center text-[24px] md:text-[32px] font-semibold text-[#223678]">
          What Our Clients Have to Say About CargoPro
        </h2>

        <div className="relative">
          {/* Carousel container */}
          <div ref={scrollRef} className="flex gap-8 overflow-hidden">
            {reviews.map((review, index) => (
              <ReviewCard key={index} stars={review.stars} text={review.text} />
            ))}
          </div>

          {/* Desktop navigation arrows */}
          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-[-50px]">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`p-2 rounded-full border shadow ${
                canScrollLeft
                  ? "bg-white hover:bg-gray-100"
                  : "bg-gray-200 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-[-50px]">
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`p-2 rounded-full border shadow ${
                canScrollRight
                  ? "bg-white hover:bg-gray-100"
                  : "bg-gray-200 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Mobile navigation arrows */}
        <div className="md:hidden flex justify-center gap-4 mt-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border shadow ${
              canScrollLeft
                ? "bg-white hover:bg-gray-100"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border shadow ${
              canScrollRight
                ? "bg-white hover:bg-gray-100"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
