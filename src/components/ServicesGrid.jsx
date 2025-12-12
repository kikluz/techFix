import React from "react";
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaDesktop,
  FaVirus,
  FaDatabase,
  FaNetworkWired,
  FaMobile,
} from "react-icons/fa";

// ? Data for services
const services = [
  {
    id: 1,
    icon: <FaLaptop />,
    title: "Laptop Repair",
    description: "Screen replacement, keyboard fixes, battery issues, and more",
    price: "From $79",
  },
  {
    id: 2,
    icon: <FaDesktop className="text-4xl text-primary" />,
    title: "Desktop Repair",
    description: "Hardware upgrades, motherboard issues, power supply problems",
    price: "From $69",
  },
  {
    id: 3,
    icon: <FaVirus className="text-4xl text-primary" />,
    title: "Virus Removal",
    description: "Complete malware and virus removal with system optimization",
    price: "From $99",
  },
  {
    id: 4,
    icon: <FaDatabase className="text-4xl text-primary" />,
    title: "Data Recovery",
    description: "Recover lost files from damaged drives and corrupted systems",
    price: "From $149",
  },
  {
    id: 5,
    icon: <FaNetworkWired className="text-4xl text-primary" />,
    title: "Network Setup",
    description: "Home and office network installation and troubleshooting",
    price: "From $129",
  },
  {
    id: 6,
    icon: <FaMobile className="text-4xl text-primary" />,
    title: "Device Setup",
    description: "Smartphone, tablet, and peripheral device configuration",
    price: "From $49",
  },
];

const ServicesGrid = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive computer rapair services to keep your devices running!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((servise) => {
          return (
            <div
              key={servise.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="card-body items-center text-center">
                {servise.icon}
                <h3 className="card-title">{servise.title}</h3>
                <p className="text-gray-600">{servise.description}</p>
                <div className="card-actions justify-between items-center w-full mt-4">
                  <span className="font-bold text-primary">
                    {servise.price}
                  </span>
                  <Link to="/book-repair" className="btn btn-sm btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link to="/services" className="btn btn-outline btn-lg">
          View All Services
        </Link>
      </div>
    </section>
  );
};

export default ServicesGrid;
