"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { Wrench, Cog, Settings, CheckCircle, ArrowRight } from "lucide-react";
export default function MechanicalEngineeringPage() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
      {/* Section Separator - Top */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* Hero Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 font-title ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Mechanical
                <br />
                <span className="text-4xl lg:text-6xl opacity-70">Engineering</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Comprehensive mechanical engineering solutions for industrial, commercial, and residential projects. 
                From HVAC systems to complex machinery installations, we deliver precision-engineered solutions 
                that optimize performance and efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Get Quote
                </button>
                <button className={`px-8 py-4 rounded-lg font-semibold border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}>
                  View Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-96 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <Wrench className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-70">Mechanical Engineering Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* Services Overview */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center font-title ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Our Mechanical Engineering Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cog className="w-8 h-8" />,
                title: "HVAC Systems",
                description: "Complete heating, ventilation, and air conditioning solutions for optimal indoor air quality and energy efficiency."
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Industrial Machinery",
                description: "Design, installation, and maintenance of complex industrial machinery and production equipment."
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Piping Systems",
                description: "Comprehensive piping design and installation for water, gas, and steam distribution systems."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "System Integration",
                description: "Seamless integration of mechanical systems with electrical and control systems for optimal performance."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Energy Optimization",
                description: "Advanced energy modeling and optimization to reduce operational costs and environmental impact."
              },
              {
                icon: <Cog className="w-8 h-8" />,
                title: "Maintenance Planning",
                description: "Comprehensive maintenance strategies to ensure long-term reliability and performance of mechanical systems."
              }
            ].map((service, index) => (
              <div key={index} className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                theme === 'dark' 
                  ? 'bg-black border border-gray-700 hover:border-white' 
                  : 'bg-white border border-gray-200 hover:border-black'
              }`}>
                <div className={`mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {service.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* Process Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center font-title ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Our Engineering Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Analysis & Planning",
                description: "Comprehensive site analysis and project planning to understand requirements and constraints."
              },
              {
                step: "02", 
                title: "Design & Engineering",
                description: "Detailed mechanical design using advanced CAD software and engineering calculations."
              },
              {
                step: "03",
                title: "Installation & Testing",
                description: "Professional installation with rigorous testing and quality assurance protocols."
              },
              {
                step: "04",
                title: "Commissioning & Support",
                description: "System commissioning and ongoing support to ensure optimal performance."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold ${
                  theme === 'dark' 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white'
                }`}>
                  {step.step}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {step.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* CTA Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-6 font-title ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Ready To Start Your Mechanical Engineering Project?
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Contact our expert mechanical engineers today for a comprehensive consultation and detailed project quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              Get Free Consultation
            </button>
            <button className={`px-8 py-4 rounded-lg font-semibold border transition-all duration-300 ${
              theme === 'dark' 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}>
              Call 020 4568 5986
            </button>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

