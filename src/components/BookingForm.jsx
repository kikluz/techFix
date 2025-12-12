import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaCalendar, FaUser, FaPhone, FaLaptop } from "react-icons/fa";

const BookingForm = () => {
  // ? React Hook Form setup with validation rules
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // ? State to manage form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ? List of services for dropdown
  const services = [
    "Laptop Repair",
    "Desktop Repair",
    "Virus Removal",
    "Data Recovery",
    "Network Setup",
    "Device Setup",
    "Other",
  ];

  // ? Handler for form submission using async to simulate API call
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    // ? Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data Submitted: ", data);
    setIsSubmitting(false);
    // ? show success message or redirect
    alert("Booking submitted successfully!");
  };

  // ? JSX for the booking form display
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl mb-6">Schedule Your Repair</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="grid grid-col-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaUser /> Full Name *
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

            {/* Phone Number */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaPhone /> Phone Number *
                </span>
              </label>
              <input
                type="tel"
                placeholder="(123) 456-7890"
                className="input input-bordered"
                {...register("phone", { required: "phone is required" })}
              />
              {errors.phone && (
                <span className="text-error text-sm mt-1">
                  {errors.phone.message}
                </span>
              )}
            </div>

            {/*  Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaLaptop /> Email Number *
                </span>
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="input input-bordered"
                {...register("email", {
                  required: "email is required",
                  pattern: {
                    // ? Simple email regex pattern for validation email format
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
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

            {/* Service Selection  */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaLaptop /> Service Needed *
                </span>
              </label>
              <select
                className="select select-bordered"
                {...register("service", { required: "Service is required" })}
              >
                <option value="">Select a service</option>
                {services.map((service, index) => {
                  return (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  );
                })}
              </select>
              {errors.service && (
                <span className="text-error text-sm mt-1">
                  {errors.service.message}
                </span>
              )}
            </div>

            {/* Date */}
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
                {...register("date", { required: "Date is required" })}
              />
              {errors.date && (
                <span className="text-error text-sm">
                  {errors.date.message}
                </span>
              )}
            </div>

            {/* Device Info */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  <FaLaptop />
                  Device Information
                </span>
              </label>
              <input
                type="text"
                placeholder="e.g., Laptop model, issues"
                className="input input-bordered"
                {...register("device")}
              />
              {errors.date && (
                <span className="text-error text-sm">
                  {errors.device.message}
                </span>
              )}
            </div>

            {/* Problem Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center gap-2">
                  Proble Description *
                </span>
              </label>
              <textarea
                placeholder="Describe the issue you're experiencing"
                className="textarea textarea-bordered"
                {...register("description", {
                  required: "Description is required",
                  minLength: {
                    value: 10,
                    message:
                      "Description should be at least 10 characters long",
                  },
                })}
              />
              {errors.description && (
                <span className="text-error text-sm">
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
