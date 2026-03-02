'use client';
import { 
  FaReact, 
  FaServer, 
  FaPlug, 
  FaChartLine, 
  FaCreditCard, 
  FaCloudUploadAlt 
} from "react-icons/fa";

export default function Services() {
  const services = [
    { 
      title: "Frontend Development", 
      description: "Responsive UI using React and modern frontend tools.", 
      icon: <FaReact size={24} /> 
    },
    { 
      title: "Backend Development", 
      description: "Robust server-side APIs with Node.js & Express.", 
      icon: <FaServer size={24} /> 
    },
    { 
      title: "API Integration", 
      description: "Integrate third-party APIs and services seamlessly.", 
      icon: <FaPlug size={24} /> 
    },
    { 
      title: "Dashboard Development", 
      description: "Custom admin dashboards for easy management.", 
      icon: <FaChartLine size={24} /> 
    },
    { 
      title: "Payment Integration", 
      description: "Secure payment gateways for online transactions.", 
      icon: <FaCreditCard size={24} /> 
    },
    { 
      title: "Website Deployment", 
      description: "Deploy and maintain live web applications.", 
      icon: <FaCloudUploadAlt size={24} /> 
    },
  ];

  return (
    <section className="bg-[#0f0f0f] py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-32">

        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Services
          </h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">
            What I can do for your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-[#1B1B1B] p-8 sm:p-10 rounded-2xl 
                         hover:-translate-y-2 hover:shadow-xl 
                         transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center 
                              bg-primary/20 text-primary 
                              rounded-full mb-6 
                              group-hover:bg-primary group-hover:text-white 
                              transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-primary transition">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}