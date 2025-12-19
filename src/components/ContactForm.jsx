import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch,
  } = useForm({ mode: "onChange" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    message: "",
  });

  const [isConfigured, setIsConfigured] = useState(false);

  // CORRECTED: Use consistent environment variable names
  // All Vite environment variables must start with VITE_
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

  // Watch message for character count
  const messageValue = watch("message", "");

  // Initialize EmailJS and check configuration
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID) {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      setIsConfigured(true);
      console.log("✅ EmailJS configured successfully");
    } else {
      console.warn("⚠️ EmailJS not configured. Missing environment variables.");
      console.log({
        hasPublicKey: !!EMAILJS_PUBLIC_KEY,
        hasServiceId: !!EMAILJS_SERVICE_ID,
        hasTemplateId: !!EMAILJS_TEMPLATE_ID,
      });
    }
  }, [EMAILJS_PUBLIC_KEY, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID]);

  const onSubmit = async (data) => {
    // Check if EmailJS is configured - CORRECTED variable names
    if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
      setSubmitStatus({
        success: false,
        message:
          "Email service is not configured. Please check environment variables.",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: "" });

    const templateParams = {
      from_name: `${data.firstName} ${data.lastName}`,
      from_email: data.email,
      phone: data.phone || "Not provided",
      subject: data.subject,
      message: data.message,
      to_name: "TechFix Pro",
      timestamp: new Date().toISOString(),
    };

    try {
      // CORRECTED: Use the actual variable names
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("✅ Email sent successfully:", result);
      setSubmitStatus({
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      console.error("❌ Failed to send email:", error);

      let errorMessage = "Oops! Something went wrong. Please try again later.";

      // Provide specific error messages
      if (error.status === 412) {
        errorMessage =
          "EmailJS authentication error. Please check Gmail connection.";
      } else if (error.status === 400) {
        errorMessage = "Invalid template or service configuration.";
      }

      setSubmitStatus({
        success: false,
        message: errorMessage,
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

            {/* Configuration Status */}
            <div className="mt-6 p-4 bg-base-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">Email Service Status</span>
                <span
                  className={`badge ${
                    isConfigured ? "badge-success" : "badge-warning"
                  }`}
                >
                  {isConfigured ? "Active" : "Not Configured"}
                </span>
              </div>
              <p className="text-sm text-gray-600">Powered by EmailJS</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="lg:col-span-2">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Send us a Message</h2>

            {/* Configuration Warning */}
            {!isConfigured && (
              <div className="alert alert-warning mb-6">
                <FaExclamationTriangle />
                <div>
                  <h3 className="font-bold">EmailJS Not Configured</h3>
                  <div className="text-sm">
                    <p>
                      Create a <code>.env</code> file in your project root with:
                    </p>
                    <pre className="mt-2 p-2 bg-base-300 rounded text-xs">
                      VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
                      <br />
                      VITE_EMAILJS_SERVICE_ID=your_service_id_here
                      <br />
                      VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`alert ${
                  submitStatus.success ? "alert-success" : "alert-error"
                } mb-6`}
              >
                <div className="flex items-center gap-2">
                  {submitStatus.success ? (
                    <FaCheckCircle className="text-xl" />
                  ) : (
                    <FaExclamationTriangle className="text-xl" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">First Name *</span>
                  </label>
                  <input
                    type="text"
                    className={`input input-bordered ${
                      errors.firstName ? "input-error" : ""
                    }`}
                    {...register("firstName", {
                      required: "First name is required",
                      minLength: {
                        value: 2,
                        message: "Minimum 2 characters",
                      },
                    })}
                  />
                  {errors.firstName && (
                    <span className="text-error text-sm mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" />
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
                    className={`input input-bordered ${
                      errors.lastName ? "input-error" : ""
                    }`}
                    {...register("lastName", {
                      required: "Last name is required",
                      minLength: {
                        value: 2,
                        message: "Minimum 2 characters",
                      },
                    })}
                  />
                  {errors.lastName && (
                    <span className="text-error text-sm mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" />
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
                    className={`input input-bordered ${
                      errors.email ? "input-error" : ""
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-error text-sm mt-1 flex items-center gap-1">
                      <FaExclamationTriangle className="text-xs" />
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
                  <label className="label">
                    <span className="label-text-alt text-gray-500">
                      Optional
                    </span>
                  </label>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject *</span>
                </label>
                <select
                  className={`select select-bordered ${
                    errors.subject ? "select-error" : ""
                  }`}
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
                  <span className="text-error text-sm mt-1 flex items-center gap-1">
                    <FaExclamationTriangle className="text-xs" />
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message *</span>
                </label>
                <textarea
                  className={`textarea textarea-bordered h-32 ${
                    errors.message ? "textarea-error" : ""
                  }`}
                  placeholder="Please describe your inquiry..."
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message:
                        "Please provide more details (minimum 10 characters)",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Message too long (maximum 1000 characters)",
                    },
                  })}
                />
                {errors.message && (
                  <span className="text-error text-sm mt-1 flex items-center gap-1">
                    <FaExclamationTriangle className="text-xs" />
                    {errors.message.message}
                  </span>
                )}
                <label className="label">
                  <span className="label-text-alt text-gray-500">
                    {messageValue.length}/1000 characters
                  </span>
                </label>
              </div>

              <div className="form-control mt-8">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={isSubmitting || !isValid || !isConfigured}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner"></span>
                      Sending...
                    </>
                  ) : !isConfigured ? (
                    "Configure EmailJS First"
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
