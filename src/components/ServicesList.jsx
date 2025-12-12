import {
  FaLaptop,
  FaDesktop,
  FaVirus,
  FaDatabase,
  FaNetworkWired,
  FaMobile,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  {
    id: 1,
    icon: <FaLaptop className="text-4xl text-primary" />,
    title: "Laptop Repair",
    description:
      "Complete laptop repair services including screen replacement, keyboard fixes, battery issues, and hardware upgrades.",
    features: [
      "Screen Replacement",
      "Keyboard Repair",
      "Battery Replacement",
      "Hardware Upgrades",
    ],
    price: "From $79",
    duration: "1-2 days",
  },
  {
    id: 2,
    icon: <FaDesktop className="text-4xl text-primary" />,
    title: "Desktop Repair",
    description:
      "Comprehensive desktop computer repair and upgrade services for optimal performance.",
    features: [
      "Motherboard Repair",
      "Power Supply",
      "Hardware Installation",
      "System Assembly",
    ],
    price: "From $69",
    duration: "1-3 days",
  },
  {
    id: 3,
    icon: <FaVirus className="text-4xl text-primary" />,
    title: "Virus Removal",
    description:
      "Complete malware and virus removal with system optimization and protection setup.",
    features: [
      "Virus Removal",
      "Malware Cleanup",
      "System Optimization",
      "Security Setup",
    ],
    price: "From $99",
    duration: "2-4 hours",
  },
  {
    id: 4,
    icon: <FaDatabase className="text-4xl text-primary" />,
    title: "Data Recovery",
    description:
      "Professional data recovery services for damaged drives and corrupted systems.",
    features: [
      "Hard Drive Recovery",
      "SSD Data Recovery",
      "Corrupted Files",
      "Backup Solutions",
    ],
    price: "From $149",
    duration: "2-5 days",
  },
];

const ServicesList = () => {
  return (
    <section className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Servises</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive computer repair and IT services with guaranteed quality
          and quick turnaround times.
        </p>
      </div>

      <div className="space-y-8">
        {services.map((service) => {
          return (
            <div
              key={service.id}
              className="card lg:card-side bg-base-100 shadow-xl"
            >
              <figure className="lg:w-1/4 p-8 bg-primary bg-opacity-10">
                <div className="flex items-center justify-center h-full">
                  {service.icon}
                </div>
              </figure>
              <div className="card-body lg:w-3/4">
                <h2 className="card-title text-2xl">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                <div className="grid grid-cols-2 gap-4 my-4">
                  {service.features.map((feature, index) => {
                    return (
                      <div className="flex items-center gap-2" key={index}>
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="tetx-sm">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="card-actions justify-between items-center">
                  <div className="flex items-center gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <FaClock className="text items-center" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaShieldAlt className="text items-center" />
                      <span>90-Day Warranty</span>
                    </div>

                    <div className="text-lg font-bold text-primary">
                      {service.price}
                    </div>
                  </div>
                  <Link to="/book-repair" className="btn btn-primary">
                    book Service
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesList;
