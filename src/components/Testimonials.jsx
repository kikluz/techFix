import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "Software Engineer",
    content:
      "I had an amazing experience with TechFix Pro. They fixed my laptop in no time!",
    rating: 5,
  },
  {
    id: 2,
    name: "Deku Midoriya",
    role: "student",
    content:
      "Amazing service! My phone screen was replaced quickly and professionally.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emina Smith",
    role: "College Student",
    content:
      "Queick virus repair saved my semester! Highly recommend TechFix Pro.",
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
