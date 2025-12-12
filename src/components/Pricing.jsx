import { FaCheck, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Basic Diagnostic",
    price: "$49",
    description: "Perfect for simple issues and diagnostics",
    features: [
      "System Diagnostic",
      "Virus Scan",
      "Performance Check",
      "30-minute Consultation",
    ],
    excluded: ["Hardware Repair", "Data Recovery", "Priority Service"],
    popular: false,
  },
  {
    name: "Standard Repair",
    price: "$129",
    description: "Most popular for common computer issues",
    features: [
      "Full System Diagnostic",
      "Virus & Malware Removal",
      "Hardware Installation",
      "Software Setup",
      "1-hour Support",
      "60-Day Warranty",
    ],
    excluded: ["Data Recovery", "Complex Hardware Issues"],
    popular: true,
  },
  {
    name: "Premium Service",
    price: "$249",
    description: "Complete solution for complex issues",
    features: [
      "Everything in Standard",
      "Data Backup & Transfer",
      "Complex Hardware Repair",
      "Priority Service",
      "Onsite Support Available",
      "90-Day Warranty",
      "24/7 Emergency Support",
    ],
    excluded: [],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-16 bg-base-200 rounded-2xl">
      <div className="align-element">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No hidden fees. All prices include parts and labor unless specified.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-base-100 shadow-xl relative ${
                plan.popular ? "ring-2 ring-primary transform scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="badge badge-primary absolute -top-3 left-1/2 transform -translate-x-1/2">
                  Most Popular
                </div>
              )}

              <div className="card-body">
                <h3 className="card-title text-2xl justify-center">
                  {plan.name}
                </h3>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-gray-500">/service</span>
                </div>
                <p className="text-center text-gray-600 mb-6">
                  {plan.description}
                </p>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <FaCheck className="text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}

                  {plan.excluded.map((excluded, excludedIndex) => (
                    <div
                      key={excludedIndex}
                      className="flex items-center gap-3 opacity-50"
                    >
                      <FaTimes className="text-error flex-shrink-0" />
                      <span className="text-sm line-through">{excluded}</span>
                    </div>
                  ))}
                </div>

                <div className="card-actions justify-center mt-4">
                  <Link to="/book-repair" className="btn btn-primary w-full">
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which service you need? We offer free initial
            consultations!
          </p>
          <Link to="/contact" className="btn btn-outline">
            Get Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Pricing;
