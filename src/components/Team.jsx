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
