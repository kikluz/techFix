import React from "react";
import { FaAward, FaClock, FaShieldAlt, FaUsers } from "react-icons/fa";

// ? An array of features to display  data
const features = [
  {
    icon: <FaAward className="text-4xl text-primary " />,
    title: "Certified Technicians",
    description:
      "Our team consists of certified professionals with years of experience.",
  },
  {
    icon: <FaClock className="text-4xl text-primary " />,
    title: "Quick Turnaround",
    description: "Most repairs completed within 24-48 hours",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary " />,
    title: "90-Day Warranty",
    description:
      "We stand by our work with a comprehensive warranty on all repairs.",
  },
  {
    icon: <FaUsers className="text-4xl text-primary " />,
    title: "Customer Satisfaction",
    description:
      "We prioritize our customers and strive for 5-star service every time.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-200 rounded-2xl">
      <div className="align-element">
        <div className="text-center mb:12">
          <h2 className="text-4xl from-bold mb-4">Why Choose TechFix Pro?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            we are committed to providing top-notch repair services with a focus
            on quality, speed, and customer satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-2">
          {features.map((feature, index) => {
            return (
              <div className="text-center" key={index}>
                <div className="flex justify-center">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
