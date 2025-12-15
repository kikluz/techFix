import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    content:
      "I had an amazing experience with TechFix Pro. They fixed my laptop in no time and the service was exceptional! The technician was knowledgeable and courteous.",
    rating: 5,
  },
  {
    id: 2,
    name: "Deku Midoriya",
    role: "Student",
    content:
      "Amazing service! My phone screen was replaced quickly and professionally. Will definitely come back for future repairs. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emina Smith",
    role: "College Student",
    content:
      "Quick virus repair saved my semester! Highly recommend TechFix Pro for any computer issues. They were fast, efficient, and affordable.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setFade(true);
    }, 300);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
      setFade(true);
    }, 300);
  };

  const handleDotClick = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
          <p className="text-lg text-gray-600">
            Hear what our customers have to say
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <div
            className={`card bg-base-100 shadow-xl transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="card-body p-8 md:p-12">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <FaQuoteRight className="text-5xl text-primary opacity-20" />
              </div>

              {/* Content */}
              <div className="text-center mb-8">
                <p className="text-xl md:text-2xl italic text-gray-700 mb-6">
                  "{currentTestimonial.content}"
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-2xl text-yellow-400" />
                  ))}
                </div>

                {/* Author */}
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </p>
                  <p className="text-gray-600">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-8 mt-10">
            <button
              onClick={handlePrev}
              className="btn btn-circle btn-outline hover:btn-primary transition-all"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-xl" />
            </button>

            {/* Indicators */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn btn-circle btn-outline hover:btn-primary transition-all"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-gray-600">
              {currentIndex + 1} / {testimonials.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
