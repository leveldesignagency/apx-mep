"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { Globe, Leaf, Recycle, CheckCircle, ArrowRight, TreePine, Wind } from "lucide-react";
export default function SustainabilityPage() {
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
                Sustainability
                <br />
                <span className="text-4xl lg:text-6xl opacity-70">Consulting</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Lead the green revolution with our comprehensive sustainability consulting services. 
                We help organizations develop and implement sustainable practices, achieve carbon neutrality, 
                and build resilient, environmentally responsible operations for a better future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Start Sustainability Journey
                </button>
                <button className={`px-8 py-4 rounded-lg font-semibold border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}>
                  Download ESG Report
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-96 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <Globe className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-70">Sustainability Consulting Image Placeholder</p>
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
            Sustainability Consulting Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Carbon Footprint Assessment",
                description: "Comprehensive analysis of your organization's carbon emissions and environmental impact across all operations."
              },
              {
                icon: <TreePine className="w-8 h-8" />,
                title: "Net Zero Strategy",
                description: "Development of actionable roadmaps to achieve carbon neutrality and net-zero emissions targets."
              },
              {
                icon: <Recycle className="w-8 h-8" />,
                title: "Circular Economy",
                description: "Implementation of circular economy principles to minimize waste and maximize resource efficiency."
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: "Renewable Energy",
                description: "Strategic planning and implementation of renewable energy solutions for sustainable power generation."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "ESG Reporting",
                description: "Comprehensive Environmental, Social, and Governance reporting to meet regulatory and stakeholder requirements."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Sustainability Training",
                description: "Employee training programs and workshops to build sustainability awareness and capability across your organization."
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
      
      {/* Impact Metrics */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Our Sustainability Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "500+",
                label: "Carbon Assessments Completed",
                description: "Comprehensive carbon footprint analyses across various industries"
              },
              {
                number: "2.5M",
                label: "Tonnes CO2 Reduced",
                description: "Total carbon emissions eliminated through our sustainability programs"
              },
              {
                number: "150+",
                label: "Net Zero Strategies",
                description: "Organizations successfully guided to carbon neutrality"
              },
              {
                number: "95%",
                label: "Client Satisfaction",
                description: "High satisfaction rate with our sustainability consulting services"
              }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className={`text-5xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {metric.number}
                </div>
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {metric.label}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* Framework Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Our Sustainability Framework
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className={`p-8 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                1. Assess
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Comprehensive evaluation of current environmental impact, 
                resource usage, and sustainability performance across all operations.
              </p>
            </div>
            <div className={`p-8 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                2. Strategize
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Development of customized sustainability strategies, 
                action plans, and roadmaps aligned with your business goals and values.
              </p>
            </div>
            <div className={`p-8 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-2xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                3. Implement
              </h3>
              <p className={`${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Hands-on implementation support with ongoing monitoring, 
                optimization, and continuous improvement of sustainability initiatives.
              </p>
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
            Ready To Build A Sustainable Future?
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Join the growing number of organizations committed to environmental responsibility. 
            Let us help you create a comprehensive sustainability strategy that delivers both 
            environmental and business benefits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              Start Sustainability Assessment
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

