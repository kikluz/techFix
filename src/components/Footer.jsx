import { Link } from "react-router-dom";
import {
  FaTools,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="align-element py-12 pr-2 pl-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-xl font-bold">
              <FaTools className="text-primary text-2xl" />
              <span>TechFix Pro</span>
            </Link>
            <p className="text-sm">
              Professional computer repair services with guaranteed quality and
              quick turnaround times.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="link link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="link link-hover">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/book-repair" className="link link-hover">
                  Book Repair
                </Link>
              </li>
              <li>
                <Link to="/repair-status" className="link link-hover">
                  Repair Status
                </Link>
              </li>
              <li>
                <Link to="/about" className="link link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link link-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <span>(555) 123-TECH</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span>support@techfixpro.com</span>
              </div>
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>
                  123 Tech Street
                  <br />
                  Suite 100
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-base-300 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} TechFix Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
