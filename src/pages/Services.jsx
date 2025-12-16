import React from "react";
import { ServicesList, Pricing } from "../components";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <>
      <div className="space-y-16">
        <ServicesList />
        {/* <Pricing /> */}
        <div className="text-center mt-12 pb-4">
          <p className="text-gray-600 mb-4">
            Not sure which service you need? We offer free initial
            consultations!
          </p>
          <Link to="/contact" className="btn btn-outline">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
};

export default Services;
