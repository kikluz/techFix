import React from "react";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
const About = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 mt-8">About TechFix Pro</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          With over 10 years of experience, we provide professional computer
          repair services with quick turnaround times and guaranteed quality.
        </p>
      </div>
      <Team />
      <Testimonials />
    </div>
  );
};

export default About;
