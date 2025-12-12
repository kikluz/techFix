import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt, FaTools } from "react-icons/fa";

const Hero = () => {
  const heroImage = "../assets/nova-hero.png"; // Replace with your image path
  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Professional Computer Repair</h1>
            <p className="py-6 text-lg">
              Fast, reliable, and affordable computer repair services. We fix
              laptops, desktops, and all your tech needs with guaranteed quality
              and quick turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-repair" className="btn btn-primary btn-lg">
                Book a Repair
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Our Services
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <FaClock className="text-3xl text-primary mb-2" />
                <h3 className="font-bold">Quick Service</h3>
                <p className="text-sm">Same-day repairs available</p>
              </div>
              <div className="flex flex-col items-center">
                <FaShieldAlt className="text-3xl text-primary mb-2" />
                <h3 className="font-bold">90-Day Warranty</h3>
                <p className="text-sm">All repairs guaranteed</p>
              </div>
              <div className="flex flex-col items-center">
                <FaTools className="text-3xl text-primary mb-2" />
                <h3 className="font-bold">Expert Technicians</h3>
                <p className="text-sm">Certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero min-h-[70vh] bg-base-200 rounded-2xl">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold">Professional Computer Repair</h1>
            <p className="py-6 text-lg">
              Fast, reliable, and affordable computer repair services. We fix
              laptops, desktops, and all your tech needs with guaranteed quality
              and quick turnaround.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-repair" className="btn btn-primary btn-lg">
                Book a Repair
              </Link>
              <Link to="/services" className="btn btn-outline btn-lg">
                Our Services
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="flex flex-col items-center">
                <FaClock className="text-3xl text-primary mb-2" />
                <h3 className="font-bold">Quick Service</h3>
                <p className="text-sm">Same-day repairs available</p>
              </div>
              <div className="flex flex-col items-center">
                <FaShieldAlt className="text-3xl text-primary mb-2" />
                <h3 className="font-bold">90-Day Warranty</h3>
                <p className="text-sm">All repairs guaranteed</p>
              </div>
              <div className="flex flex-col items-center">
                <FaTools className="text-3xl text-primary mb-2" />
                <h3 className="font-bold">Expert Technicians</h3>
                <p className="text-sm">Certified professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
