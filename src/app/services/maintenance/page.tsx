"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { Wrench, Clock, Shield, CheckCircle, ArrowRight, Phone, Calendar } from "lucide-react";
export default function MaintenancePage() {
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
                Maintenance
                <br />
                <span className="text-4xl lg:text-6xl opacity-70">& Support</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Keep your systems running at peak performance with our comprehensive maintenance and support services. 
                From preventive maintenance to emergency repairs, we ensure maximum uptime, reliability, and efficiency 
                for all your mechanical and electrical systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Request Service
                </button>
                <button className={`px-8 py-4 rounded-lg font-semibold border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}>
                  Emergency Call
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-96 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <Wrench className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-70">Maintenance & Support Image Placeholder</p>
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
            Maintenance & Support Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Preventive Maintenance",
                description: "Scheduled maintenance programs to prevent breakdowns and extend equipment lifespan through regular inspections and servicing."
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Emergency Repairs",
                description: "24/7 emergency response team for urgent repairs and system failures to minimize downtime and operational disruption."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "System Inspections",
                description: "Comprehensive safety and compliance inspections to ensure all systems meet regulatory standards and safety requirements."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Predictive Maintenance",
                description: "Advanced monitoring and analytics to predict potential failures before they occur, reducing unexpected downtime."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Performance Optimization",
                description: "Continuous system optimization to improve efficiency, reduce energy consumption, and enhance overall performance."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Remote Monitoring",
                description: "24/7 remote monitoring services with real-time alerts and proactive maintenance recommendations."
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
      
      {/* Service Levels */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Service Level Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Maintenance",
                price: "From £299/month",
                features: [
                  "Monthly system inspections",
                  "Basic cleaning and servicing",
                  "Emergency call-out (4-hour response)",
                  "Annual safety compliance check",
                  "Basic reporting and documentation"
                ],
                popular: false
              },
              {
                title: "Comprehensive Care",
                price: "From £599/month",
                features: [
                  "Bi-weekly system inspections",
                  "Full cleaning and servicing",
                  "Emergency call-out (2-hour response)",
                  "Quarterly safety compliance checks",
                  "Detailed reporting and analytics",
                  "Remote monitoring included"
                ],
                popular: true
              },
              {
                title: "Premium Support",
                price: "From £999/month",
                features: [
                  "Weekly system inspections",
                  "Comprehensive cleaning and servicing",
                  "Emergency call-out (1-hour response)",
                  "Monthly safety compliance checks",
                  "Advanced reporting and analytics",
                  "24/7 remote monitoring",
                  "Dedicated account manager"
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative p-8 rounded-xl ${
                plan.popular 
                  ? (theme === 'dark' 
                      ? 'bg-white text-black border-2 border-white' 
                      : 'bg-black text-white border-2 border-black')
                  : (theme === 'dark' 
                      ? 'bg-gray-800 border border-gray-700' 
                      : 'bg-white border border-gray-200')
              }`}>
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-semibold ${
                    theme === 'dark' 
                      ? 'bg-black text-white' 
                      : 'bg-white text-black'
                  }`}>
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-4 ${
                  plan.popular 
                    ? (theme === 'dark' ? 'text-black' : 'text-white')
                    : (theme === 'dark' ? 'text-white' : 'text-black')
                }`}>
                  {plan.title}
                </h3>
                <div className={`text-3xl font-bold mb-6 ${
                  plan.popular 
                    ? (theme === 'dark' ? 'text-black' : 'text-white')
                    : (theme === 'dark' ? 'text-white' : 'text-black')
                }`}>
                  {plan.price}
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${
                      plan.popular 
                        ? (theme === 'dark' ? 'text-gray-800' : 'text-gray-200')
                        : (theme === 'dark' ? 'text-gray-300' : 'text-gray-600')
                    }`}>
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* Emergency Response */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl font-bold mb-6 ${font-title} ${
                theme === 'dark' ? 'text-white' : 'text-black'
              }`}>
                24/7 Emergency Response
              </h2>
              <p className={`text-xl mb-8 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                When systems fail, every minute counts. Our emergency response team is available 
                24/7 to provide rapid diagnosis and repair services, minimizing downtime and 
                protecting your operations.
              </p>
              <div className="space-y-4">
                {[
                  "Average response time: 1-2 hours",
                  "Fully equipped mobile service units",
                  "Certified emergency technicians",
                  "Real-time status updates",
                  "Follow-up maintenance scheduling"
                ].map((item, index) => (
                  <div key={index} className={`flex items-center ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className={`p-8 rounded-xl ${
              theme === 'dark' 
                ? 'bg-black border border-gray-700' 
                : 'bg-white border border-gray-200'
            }`}>
              <div className="text-center">
                <Phone className="w-16 h-16 mx-auto mb-6 text-red-500" />
                <h3 className={`text-2xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  Emergency Hotline
                </h3>
                <p className={`text-xl mb-6 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  020 4568 5986
                </p>
                <p className={`text-sm ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Available 24/7 for urgent repairs and system failures
                </p>
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
            Keep Your Systems Running Smoothly
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Don't wait for a breakdown. Proactive maintenance saves time, money, and prevents 
            costly emergency repairs. Contact us today to discuss your maintenance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              Schedule Maintenance
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

