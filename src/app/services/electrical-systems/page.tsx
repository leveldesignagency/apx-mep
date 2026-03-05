"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { Zap, Shield, Lightbulb, CheckCircle, ArrowRight, Power } from "lucide-react";
export default function ElectricalSystemsPage() {
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
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 ${font-title} ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Electrical
                <br />
                <span className="text-4xl lg:text-6xl opacity-70">Systems</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Advanced electrical engineering solutions for power distribution, lighting systems, and smart building technologies. 
                From high-voltage installations to intelligent control systems, we ensure safe, efficient, and reliable electrical infrastructure.
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
                  <Zap className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-70">Electrical Systems Image Placeholder</p>
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
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Our Electrical Engineering Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Power className="w-8 h-8" />,
                title: "Power Distribution",
                description: "High-voltage power distribution systems, transformers, and electrical infrastructure for industrial and commercial facilities."
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Lighting Systems",
                description: "LED lighting solutions, smart lighting controls, and energy-efficient illumination systems for optimal visibility and ambiance."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Safety Systems",
                description: "Fire alarm systems, emergency lighting, and electrical safety installations to ensure compliance and protection."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smart Building",
                description: "Building automation systems, IoT integration, and intelligent electrical controls for modern smart buildings."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Maintenance & Testing",
                description: "Comprehensive electrical testing, maintenance programs, and compliance inspections for ongoing safety and reliability."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Renewable Energy",
                description: "Solar panel installations, wind power systems, and renewable energy integration for sustainable electrical solutions."
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
      
      {/* Technical Specifications */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Voltage Ranges
              </h3>
              <ul className="space-y-4">
                {[
                  "Low Voltage (LV): Up to 1000V AC",
                  "Medium Voltage (MV): 1kV to 35kV",
                  "High Voltage (HV): 35kV to 230kV",
                  "Extra High Voltage (EHV): Above 230kV"
                ].map((item, index) => (
                  <li key={index} className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Compliance & Standards
              </h3>
              <ul className="space-y-4">
                {[
                  "IET Wiring Regulations (BS 7671)",
                  "NICEIC Approved Contractor",
                  "ISO 9001 Quality Management",
                  "Health & Safety Executive (HSE) Compliance"
                ].map((item, index) => (
                  <li key={index} className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
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
          <h2 className={`text-4xl font-bold mb-6 ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Need Expert Electrical Engineering Services?
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Our certified electrical engineers are ready to design, install, and maintain your electrical systems with the highest standards of safety and efficiency.
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

