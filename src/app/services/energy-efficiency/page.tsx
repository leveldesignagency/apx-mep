"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { Leaf, TrendingUp, BarChart3, CheckCircle, ArrowRight, Zap, Sun } from "lucide-react";
export default function EnergyEfficiencyPage() {
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
                Energy
                <br />
                <span className="text-4xl lg:text-6xl opacity-70">Efficiency</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Transform your energy consumption with cutting-edge efficiency solutions. Our comprehensive approach 
                combines advanced technology, smart systems, and sustainable practices to reduce costs, minimize 
                environmental impact, and maximize operational performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Get Energy Audit
                </button>
                <button className={`px-8 py-4 rounded-lg font-semibold border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}>
                  View Case Studies
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-96 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <Leaf className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-70">Energy Efficiency Image Placeholder</p>
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
            Energy Efficiency Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Energy Audits",
                description: "Comprehensive energy assessments to identify inefficiencies and optimization opportunities in your building systems."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Smart Controls",
                description: "Intelligent building automation systems that optimize energy consumption based on occupancy and usage patterns."
              },
              {
                icon: <Sun className="w-8 h-8" />,
                title: "Renewable Integration",
                description: "Solar panel installations, wind power systems, and renewable energy solutions for sustainable power generation."
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance Monitoring",
                description: "Real-time energy monitoring and analytics to track consumption, identify trends, and optimize performance."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "HVAC Optimization",
                description: "Advanced HVAC system upgrades and controls to reduce energy consumption while maintaining comfort levels."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "LED Lighting",
                description: "Energy-efficient LED lighting solutions with smart controls and daylight harvesting for maximum savings."
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
      
      {/* Benefits Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Why Choose Our Energy Solutions?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className={`text-2xl font-semibold mb-6 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Cost Savings
              </h3>
              <ul className="space-y-4">
                {[
                  "Average 30-50% reduction in energy costs",
                  "ROI typically achieved within 2-3 years",
                  "Reduced maintenance and operational expenses",
                  "Government incentives and rebates available"
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
                Environmental Impact
              </h3>
              <ul className="space-y-4">
                {[
                  "Significant reduction in carbon footprint",
                  "Compliance with environmental regulations",
                  "Enhanced corporate sustainability credentials",
                  "Contribution to net-zero carbon goals"
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
      
      {/* Case Study Section */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Manufacturing Facility
              </h3>
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Implemented comprehensive energy efficiency measures including LED lighting, 
                HVAC optimization, and smart controls.
              </p>
              <div className="flex justify-between items-center">
                <span className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  45% Energy Reduction
                </span>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  £180k Annual Savings
                </span>
              </div>
            </div>
            <div className={`p-8 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <h3 className={`text-xl font-semibold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                Office Complex
              </h3>
              <p className={`mb-4 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Complete building automation system with renewable energy integration 
                and advanced monitoring capabilities.
              </p>
              <div className="flex justify-between items-center">
                <span className={`text-2xl font-bold ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  60% Energy Reduction
                </span>
                <span className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  £320k Annual Savings
                </span>
              </div>
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
            Ready To Reduce Your Energy Costs?
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Start with a comprehensive energy audit and discover how much you can save with our 
            proven efficiency solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              Book Energy Audit
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

