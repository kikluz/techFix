import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaPhone, FaMapMarkerAlt, FaClock, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset, // Added to clear the form
  } = useForm({ mode: "onChange" });
  // ? State to manage submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  }); // For better feedback

  // Load environment variables (secured)
  const EMAILJS_PUBLIC_KEY = import.meta.env.EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = import.meta.env.EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.EMAILJS_TEMPLATE_ID;

  // ? Initialize EmailJS with emvironment variables
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const onSubmit = async (data) => {
    // ? CHeck if Emails is configured
    if (!EMAILJS_PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
      setSubmitStatus({
        success: false,
        message:
          "Email service is not configured properly. Please contact support.",
      });
      return;
    }
    // ? Reset status and set submitting state
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    // Prepare the template parameters for EmailJS
    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone || "Not provided",
      subject: data.subject,
      message: data.message,
      to_name: "TechFix Pro", // Your business name
    };

    try {
      // Send the email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully!");
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
      reset(); // Clear all form fields
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        success: false,
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  maxLength={1000}
                  aria-invalid={errors.message ? "true" : "false"}
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
                  disabled={isSubmitting || !isValid}
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
                {/* Add a status message area */}
                {submitStatus.message && (
                  <div
                    role="status"
                    aria-live="polite"
                    className={`mt-4 text-center ${
                      submitStatus.success ? "text-success" : "text-error"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactForm;
