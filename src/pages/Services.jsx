import React from "react";
import { ServicesList, Pricing } from "../components";
const Services = () => {
  return (
    <div className="space-y-16">
      <ServicesList />
      <Pricing />
    </div>
  );
};

export default Services;
