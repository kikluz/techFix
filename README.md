# Computer Repair Shop Website Tutorial

Let's create a modern computer repair shop website using similar components and patterns from the e-commerce store.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Setup & Installation](#setup--installation)
4. [Project Structure](#project-structure)
5. [Step-by-Step Implementation](#step-by-step-implementation)

---

## Project Overview

Build a professional computer repair shop website with:

- Service catalog and pricing
- Booking system
- Repair status tracking
- Customer testimonials
- Contact and location information

**Live Demo**: [TechFix Pro](https://techfix-pro.netlify.app/)

---

## Tech Stack

### Frontend

- **React 18** with Vite
- **Tailwind CSS** + **DaisyUI** for styling
- **React Router DOM** for routing
- **Redux Toolkit** for state management
- **React Query** for API calls
- **React Hook Form** for forms

---

## Setup & Installation

### Step 1: Create Vite Project

```bash
npm create vite@latest techfix-pro -- --template react
cd techfix-pro
```

### Step 2: Install Dependencies

```bash
# Core dependencies
npm install axios@1.4.0 dayjs@1.11.9 @reduxjs/toolkit@1.9.5 @tanstack/react-query@4.32.6 @tanstack/react-query-devtools@4.32.6 react-icons@4.10.1 react-redux@8.1.2 react-router-dom@6.14.2 react-toastify@9.1.3 react-hook-form@7.48.2

# Development dependencies
npm install -D tailwindcss postcss autoprefixer daisyui@latest @tailwindcss/typography
npx tailwindcss init -p
```

### Step 3: Configure Tailwind CSS

[tailwind](https://v3.tailwindcss.com/docs/guides/vite)

**tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["corporate", "business"],
  },
};
```

**index.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .align-element {
    @apply mx-auto max-w-6xl px-8;
  }
}
```

###  Install react-icons

```bash
# Using npm
npm install react-icons

# Using yarn
yarn add react-icons

# Using pnpm
pnpm add react-icons
```

---

## Project Structure

```
src/
├── components/          # Reusable components
├── features/           # Redux slices
│   ├── booking/
│   └── user/
├── pages/              # Page components
├── utils/              # Utilities and API config
├── store.js            # Redux store
└── main.jsx            # App entry point
```

Project Structure Final

```
src/
├── components/
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── NavLinks.jsx
│   ├── Hero.jsx
│   ├── ServicesGrid.jsx
│   ├── ServicesList.jsx
│   ├── Pricing.jsx
│   ├── WhyChooseUs.jsx
│   ├── BookingForm.jsx
│   ├── StatusTracker.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── index.js
├── features/
│   └── booking/
│       └── bookingSlice.js
├── pages/
│   ├── HomeLayout.jsx
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── BookRepair.jsx
│   ├── RepairStatus.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Error.jsx
│   └── index.js
├── store.js
├── App.jsx
└── main.jsx
```

---

## Step-by-Step Implementation

### Step 1: Create Pages Structure

**pages/HomeLayout.jsx**

```jsx
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header } from "../components";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <div className="h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-lg" />
        </div>
      ) : (
        <section className="align-element py-12">
          <Outlet />
        </section>
      )}
    </>
  );
};
export default HomeLayout;
```

**pages/Home.jsx**

```jsx
import { Hero, ServicesGrid, WhyChooseUs } from "../components";

const Home = () => {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <WhyChooseUs />
    </>
  );
};
export default Home;
```

**pages/Services.jsx**

```jsx
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
```

**pages/BookRepair.jsx**

```jsx
import BookingForm from "../components/BookingForm";

const BookRepair = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Book a Repair</h1>
      <BookingForm />
    </div>
  );
};
export default BookRepair;
```

**pages/RepairStatus.jsx**

```jsx
import StatusTracker from "../components/StatusTracker";

const RepairStatus = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Repair Status</h1>
      <StatusTracker />
    </div>
  );
};
export default RepairStatus;
```

**pages/About.jsx**

```jsx
import { Team, Testimonials } from "../components";

const About = () => {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About TechFix Pro</h1>
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
```

**pages/Contact.jsx**

```jsx
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <ContactForm />
    </div>
  );
};
export default Contact;
```

**pages/index.js**

```jsx
export { default as HomeLayout } from "./HomeLayout";
export { default as Home } from "./Home";
export { default as Services } from "./Services";
export { default as BookRepair } from "./BookRepair";
export { default as RepairStatus } from "./RepairStatus";
export { default as About } from "./About";
export { default as Contact } from "./Contact";
export { default as Error } from "./Error";
```

### Step 2: Configure React Router

**App.jsx**

```jsx
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Home,
  Services,
  BookRepair,
  RepairStatus,
  About,
  Contact,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "book-repair",
        element: <BookRepair />,
      },
      {
        path: "repair-status",
        element: <RepairStatus />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

### Step 3: Create Header and Navigation

**components/Header.jsx**

```jsx
import { FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-primary text-primary-content py-2">
      <div className="align-element flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center gap-4 mb-2 sm:mb-0">
          <div className="flex items-center gap-1">
            <FaPhone className="text-xs" />
            <span>(555) 123-TECH</span>
          </div>
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-xs" />
            <span>123 Tech Street, City</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <FaClock className="text-xs" />
          <span>Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
```

**components/NavLinks.jsx**

```jsx
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "/services", text: "services" },
  { id: 3, url: "/book-repair", text: "book repair" },
  { id: 4, url: "/repair-status", text: "repair status" },
  { id: 5, url: "/about", text: "about" },
  { id: 6, url: "/contact", text: "contact" },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <NavLink className="capitalize font-medium" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
```

**components/Navbar.jsx**

```jsx
import { FaWrench, FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold">
            <FaWrench className="text-primary text-2xl" />
            <span>TechFix Pro</span>
          </NavLink>

          {/* Mobile Dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">
            <NavLinks />
          </ul>
        </div>

        {/* CTA Button */}
        <div className="navbar-end">
          <NavLink to="/book-repair" className="btn btn-primary">
            Book Now
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
```

### Step 4: Create Hero Section

**components/Hero.jsx**

```jsx
import { Link } from "react-router-dom";
import { FaClock, FaShieldAlt, FaTools } from "react-icons/fa";

const Hero = () => {
  return (
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
  );
};
export default Hero;
```

### Step 5: Create Services Components

**components/ServicesGrid.jsx**

```jsx
import { Link } from "react-router-dom";
import {
  FaLaptop,
  FaDesktop,
  FaVirus,
  FaDatabase,
  FaNetworkWired,
  FaMobile,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaLaptop className="text-4xl text-primary" />,
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
          Comprehensive computer repair services for all your tech needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
          >
            <div className="card-body items-center text-center">
              {service.icon}
              <h3 className="card-title">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <div className="card-actions justify-between items-center w-full mt-4">
                <span className="font-bold text-primary">{service.price}</span>
                <Link to="/book-repair" className="btn btn-primary btn-sm">
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        ))}
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
```

### Step 6: Create Booking Form

**components/BookingForm.jsx**

```jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendar, FaUser, FaPhone, FaLaptop } from "react-icons/fa";

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Laptop Repair",
    "Desktop Repair",
    "Virus Removal",
    "Data Recovery",
    "Network Setup",
    "Device Setup",
    "Other",
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Booking data:", data);
    setIsSubmitting(false);
    // Show success message
    alert("Booking submitted successfully! We'll contact you soon.");
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">Schedule Your Repair</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaUser />
                  Full Name *
                </span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-error text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaPhone />
                  Phone Number *
                </span>
              </label>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                className="input input-bordered"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && (
                <span className="text-error text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Address *</span>
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="input input-bordered"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-error text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Service Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaLaptop />
                  Service Needed *
                </span>
              </label>
              <select
                className="select select-bordered"
                {...register("service", {
                  required: "Please select a service",
                })}
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <span className="text-error text-sm mt-1">
                  {errors.service.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaCalendar />
                  Preferred Date *
                </span>
              </label>
              <input
                type="date"
                className="input input-bordered"
                {...register("date", { required: "Please select a date" })}
              />
              {errors.date && (
                <span className="text-error text-sm mt-1">
                  {errors.date.message}
                </span>
              )}
            </div>
          </div>

          {/* Device Information */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Device Information</span>
            </label>
            <input
              type="text"
              placeholder="e.g., MacBook Pro 2020, Dell Inspiron, etc."
              className="input input-bordered"
              {...register("device")}
            />
          </div>

          {/* Problem Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Problem Description *</span>
            </label>
            <textarea
              placeholder="Please describe the issue you're experiencing..."
              className="textarea textarea-bordered h-24"
              {...register("description", {
                required: "Please describe the problem",
                minLength: {
                  value: 10,
                  message: "Please provide more details about the issue",
                },
              })}
            />
            {errors.description && (
              <span className="text-error text-sm mt-1">
                {errors.description.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="form-control mt-8">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Submitting...
                </>
              ) : (
                "Schedule Repair"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default BookingForm;
```

### Step 7: Create Status Tracker

**components/StatusTracker.jsx**

```jsx
import { useState } from "react";
import {
  FaSearch,
  FaClipboardCheck,
  FaTools,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

const StatusTracker = () => {
  const [repairId, setRepairId] = useState("");
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const statusSteps = [
    {
      id: 1,
      name: "Received",
      icon: <FaClipboardCheck />,
      description: "We've received your device",
    },
    {
      id: 2,
      name: "Diagnosis",
      icon: <FaSearch />,
      description: "Diagnosing the issue",
    },
    {
      id: 3,
      name: "Repair",
      icon: <FaTools />,
      description: "Repair in progress",
    },
    {
      id: 4,
      name: "Testing",
      icon: <FaCheckCircle />,
      description: "Quality testing",
    },
    {
      id: 5,
      name: "Ready",
      icon: <FaTruck />,
      description: "Ready for pickup/delivery",
    },
  ];

  const checkStatus = async (e) => {
    e.preventDefault();
    if (!repairId.trim()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock status based on repair ID
    const mockStatus = {
      repairId: repairId,
      currentStep: 3, // Repair in progress
      estimatedCompletion: "2024-01-20",
      technician: "Mike Johnson",
      notes: "Replacing motherboard. Parts have arrived.",
    };

    setStatus(mockStatus);
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Search Form */}
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title">Check Repair Status</h2>
          <p className="text-gray-600">
            Enter your repair ID to check the status
          </p>

          <form onSubmit={checkStatus} className="flex gap-4 mt-4">
            <input
              type="text"
              placeholder="Enter Repair ID (e.g., TRK-12345)"
              className="input input-bordered flex-1"
              value={repairId}
              onChange={(e) => setRepairId(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isLoading || !repairId.trim()}
            >
              {isLoading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Check Status"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Status Display */}
      {status && (
        <div className="space-y-6">
          {/* Status Overview */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title">Repair #{status.repairId}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Technician:</strong> {status.technician}
                </div>
                <div>
                  <strong>Est. Completion:</strong> {status.estimatedCompletion}
                </div>
                <div>
                  <strong>Current Status:</strong>{" "}
                  {statusSteps[status.currentStep - 1].name}
                </div>
              </div>
              {status.notes && (
                <div className="mt-4 p-4 bg-warning bg-opacity-10 rounded-lg">
                  <strong>Technician Notes:</strong> {status.notes}
                </div>
              )}
            </div>
          </div>

          {/* Progress Steps */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="card-title mb-6">Repair Progress</h3>
              <ul className="steps steps-vertical lg:steps-horizontal w-full">
                {statusSteps.map((step, index) => (
                  <li
                    key={step.id}
                    className={`step ${
                      index < status.currentStep ? "step-primary" : ""
                    } ${index === status.currentStep - 1 ? "font-bold" : ""}`}
                  >
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">{step.icon}</span>
                      <span>{step.name}</span>
                      <span className="text-xs text-gray-500 mt-1 text-center">
                        {step.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Help Text */}
      {!status && (
        <div className="alert alert-info">
          <div>
            <h3 className="font-bold">Can't find your Repair ID?</h3>
            <div className="text-xs">
              Your Repair ID can be found on your receipt or booking
              confirmation email. If you can't find it, please{" "}
              <a href="/contact" className="link">
                contact us
              </a>
              .
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default StatusTracker;
```

### Step 8: Create Additional Components

**components/WhyChooseUs.jsx**

```jsx
import { FaAward, FaClock, FaShieldAlt, FaUsers } from "react-icons/fa";

const features = [
  {
    icon: <FaAward className="text-4xl text-primary" />,
    title: "Certified Experts",
    description:
      "Our technicians are certified professionals with years of experience",
  },
  {
    icon: <FaClock className="text-4xl text-primary" />,
    title: "Quick Turnaround",
    description: "Most repairs completed within 24-48 hours",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary" />,
    title: "90-Day Warranty",
    description: "All repairs come with a 90-day warranty for peace of mind",
  },
  {
    icon: <FaUsers className="text-4xl text-primary" />,
    title: "Customer Focused",
    description: "We prioritize clear communication and customer satisfaction",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-200 rounded-2xl">
      <div className="align-element">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Choose TechFix Pro?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best computer repair experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
```

**components/Testimonials.jsx**

```jsx
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Small Business Owner",
    content:
      "TechFix Pro saved my business when our server crashed. They recovered all our data and had us back online in hours!",
    rating: 5,
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Graphic Designer",
    content:
      "Amazing service! Fixed my MacBook Pro screen same day. The staff was professional and the price was fair.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "College Student",
    content:
      "Quick virus removal at a great price. My laptop runs faster than ever. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
        <p className="text-lg text-gray-600">Don't just take our word for it</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="rating rating-sm mb-4">
                {[...Array(5)].map((_, i) => (
                  <input
                    key={i}
                    type="radio"
                    name={`rating-${testimonial.id}`}
                    className="mask mask-star-2 bg-orange-400"
                    checked={i < testimonial.rating}
                    readOnly
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonials;
```

### Step 9: Update Components Index

**components/index.js**

```jsx
export { default as Header } from "./Header";
export { default as Navbar } from "./Navbar";
export { default as NavLinks } from "./NavLinks";
export { default as Hero } from "./Hero";
export { default as ServicesGrid } from "./ServicesGrid";
export { default as WhyChooseUs } from "./WhyChooseUs";
export { default as BookingForm } from "./BookingForm";
export { default as StatusTracker } from "./StatusTracker";
export { default as Testimonials } from "./Testimonials";
```

### Step 10: Create Error Page

**pages/Error.jsx**

```jsx
import { useRouteError, Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center">
        <FaExclamationTriangle className="text-6xl text-warning mx-auto mb-4" />
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          We apologize for the inconvenience. The page you're looking for isn't
          available.
        </p>
        <div className="space-x-4">
          <Link to="/" className="btn btn-primary">
            <FaHome className="mr-2" />
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Error;
```

### Step 11: Update Main.jsx

**main.jsx**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

import { ToastContainer } from "react-toastify";
import { store } from "./store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
        <ToastContainer position="top-center" />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
```

### Step 12: Create Store

**store.js**

```jsx
import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./features/booking/bookingSlice";

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
});
```

**features/booking/bookingSlice.js**

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push(action.payload);
    },
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addBooking, setCurrentBooking, setLoading } = bookingSlice;
export default bookingSlice.reducer; // This is the default expo
```

This is an excellent computer repair shop website tutorial! You've created a comprehensive, professional-looking site with all the essential features. Let me add the missing pieces and provide some enhancements to complete the project.

## Missing Pieces to Complete

### Step 13: Complete the Booking Slice

**features/booking/bookingSlice.js** (complete the file)

```jsx
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookings: [],
  currentBooking: null,
  isLoading: false,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.bookings.push({
        ...action.payload,
        id: `TRK-${Date.now()}`,
        status: "received",
        createdAt: new Date().toISOString(),
      });
    },
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateBookingStatus: (state, action) => {
      const { id, status } = action.payload;
      const booking = state.bookings.find((booking) => booking.id === id);
      if (booking) {
        booking.status = status;
      }
    },
  },
});

export const {
  addBooking,
  setCurrentBooking,
  setLoading,
  updateBookingStatus,
} = bookingSlice.actions;
export default bookingSlice.reducer;
```

### Step 14: Create ServicesList Component

**components/ServicesList.jsx**

```jsx
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
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Comprehensive computer repair and IT services with guaranteed quality
          and quick turnaround times.
        </p>
      </div>

      <div className="space-y-8">
        {services.map((service) => (
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
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="card-actions justify-between items-center">
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <FaClock className="text-primary" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaShieldAlt className="text-primary" />
                    <span>90-Day Warranty</span>
                  </div>
                  <div className="text-lg font-bold text-primary">
                    {service.price}
                  </div>
                </div>
                <Link to="/book-repair" className="btn btn-primary">
                  Book This Service
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesList;
```

### Step 15: Create Pricing Component

**components/Pricing.jsx**

```jsx
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
```

### Step 16: Create Team Component

**components/Team.jsx**

```jsx
const team = [
  {
    id: 1,
    name: "Mike Johnson",
    role: "Lead Technician",
    experience: "12 years",
    specialty: "Hardware Repair & Data Recovery",
    image: "👨‍💼",
    bio: "Mike specializes in complex hardware issues and data recovery with over a decade of experience.",
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Software Specialist",
    experience: "8 years",
    specialty: "Virus Removal & System Optimization",
    image: "👩‍💻",
    bio: "Sarah is our software expert, handling everything from virus removal to system performance tuning.",
  },
  {
    id: 3,
    name: "David Rodriguez",
    role: "Network Engineer",
    experience: "10 years",
    specialty: "Network Setup & Security",
    image: "👨‍🔧",
    bio: "David handles all network-related issues from home setups to small business networks.",
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Customer Service Manager",
    experience: "6 years",
    specialty: "Client Relations & Support",
    image: "👩‍💼",
    bio: "Emily ensures every customer receives exceptional service and support throughout their repair journey.",
  },
];

const Team = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Certified professionals dedicated to providing the best computer
          repair service
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <div
            key={member.id}
            className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="card-body items-center text-center">
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="card-title">{member.name}</h3>
              <p className="text-primary font-semibold">{member.role}</p>
              <div className="badge badge-outline mb-2">
                {member.experience} experience
              </div>
              <p className="text-sm font-medium mb-2">{member.specialty}</p>
              <p className="text-gray-600 text-sm">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Team;
```

### Step 17: Create ContactForm Component

**components/ContactForm.jsx**

```jsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Contact form data:", data);
    setIsSubmitting(false);
    alert("Thank you for your message! We'll get back to you within 24 hours.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Contact Information */}
      <div className="lg:col-span-1 space-y-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title mb-4">Get In Touch</h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaPhone className="text-primary text-xl" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">(555) 123-TECH</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-primary text-xl" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600">support@techfixpro.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary text-xl mt-1" />
                <div>
                  <p className="font-semibold">Address</p>
                  <p className="text-gray-600">
                    123 Tech Street
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaClock className="text-primary text-xl mt-1" />
                <div>
                  <p className="font-semibold">Business Hours</p>
                  <p className="text-gray-600">
                    Monday - Friday: 9AM - 6PM
                    <br />
                    Saturday: 10AM - 4PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-primary text-primary-content">
          <div className="card-body">
            <h3 className="card-title">Emergency Service</h3>
            <p>Need immediate assistance? Call our emergency line:</p>
            <p className="text-2xl font-bold">(555) 123-EMERGENCY</p>
            <p className="text-sm">
              Available 24/7 for critical business systems
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-error text-sm mt-1">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Last Name *</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-error text-sm mt-1">
                      {errors.lastName.message}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email *</span>
                  </label>
                  <input
                    type="email"
                    className="input input-bordered"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-error text-sm mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="tel"
                    className="input input-bordered"
                    {...register("phone")}
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject *</span>
                </label>
                <select
                  className="select select-bordered"
                  {...register("subject", {
                    required: "Please select a subject",
                  })}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <span className="text-error text-sm mt-1">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message *</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-32"
                  placeholder="Please describe your inquiry..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Please provide more details",
                    },
                  })}
                />
                {errors.message && (
                  <span className="text-error text-sm mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
```

### Step 18: Update Components Index

**components/index.js** (final version)

```jsx
export { default as Header } from "./Header";
export { default as Navbar } from "./Navbar";
export { default as NavLinks } from "./NavLinks";
export { default as Hero } from "./Hero";
export { default as ServicesGrid } from "./ServicesGrid";
export { default as ServicesList } from "./ServicesList";
export { default as Pricing } from "./Pricing";
export { default as WhyChooseUs } from "./WhyChooseUs";
export { default as BookingForm } from "./BookingForm";
export { default as StatusTracker } from "./StatusTracker";
export { default as Team } from "./Team";
export { default as Testimonials } from "./Testimonials";
export { default as ContactForm } from "./ContactForm";
```

### Step 19: Add Footer Component

**components/Footer.jsx**

```jsx
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
      <div className="align-element py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover">Laptop Repair</a>
              </li>
              <li>
                <a className="link link-hover">Desktop Repair</a>
              </li>
              <li>
                <a className="link link-hover">Virus Removal</a>
              </li>
              <li>
                <a className="link link-hover">Data Recovery</a>
              </li>
              <li>
                <a className="link link-hover">Network Setup</a>
              </li>
              <li>
                <a className="link link-hover">Device Setup</a>
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
```

### Step 20: Update HomeLayout with Footer

**pages/HomeLayout.jsx** (final version)

```jsx
import { Outlet, useNavigation } from "react-router-dom";
import { Navbar, Header } from "../components";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <div className="min-h-screen flex items-center justify-center">
          <span className="loading loading-ring loading-lg" />
        </div>
      ) : (
        <main>
          <section className="align-element py-12 min-h-screen">
            <Outlet />
          </section>
        </main>
      )}
      <Footer />
    </>
  );
};
export default HomeLayout;
```

## Final Project Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Navbar.jsx
│   ├── NavLinks.jsx
│   ├── Hero.jsx
│   ├── ServicesGrid.jsx
│   ├── ServicesList.jsx
│   ├── Pricing.jsx
│   ├── WhyChooseUs.jsx
│   ├── BookingForm.jsx
│   ├── StatusTracker.jsx
│   ├── Team.jsx
│   ├── Testimonials.jsx
│   ├── ContactForm.jsx
│   ├── Footer.jsx
│   └── index.js
├── features/
│   └── booking/
│       └── bookingSlice.js
├── pages/
│   ├── HomeLayout.jsx
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── BookRepair.jsx
│   ├── RepairStatus.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Error.jsx
│   └── index.js
├── store.js
├── App.jsx
└── main.jsx
```

## Deployment

To deploy your computer repair shop website:

### Netlify Deployment

```bash
# Build the project
npm run build

# Deploy to Netlify
npm install -g netlify-cli
netlify deploy --dir=dist --prod
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## Features Summary

✅ **Complete Website Structure**

- Responsive navigation and layout
- Professional design with Tailwind CSS and DaisyUI

✅ **Service Management**

- Service catalog with pricing
- Detailed service pages
- Transparent pricing plans

✅ **Booking System**

- Interactive booking form with validation
- Service selection and scheduling
- Form state management

✅ **Repair Tracking**

- Status tracker with progress steps
- Repair ID lookup
- Real-time status updates

✅ **Business Information**

- Team member profiles
- Customer testimonials
- Contact information and form

✅ **Professional Features**

- 90-day warranty messaging
- Quick turnaround times
- Certified technicians
- Emergency services

This complete computer repair shop website provides all the essential features customers expect while maintaining a professional, modern design that builds trust and credibility.
