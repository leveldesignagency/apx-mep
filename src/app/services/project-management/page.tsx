"use client"

import { useTheme } from "@/contexts/ThemeContext";
import { Target, Calendar, Users, CheckCircle, ArrowRight, BarChart3, Clock } from "lucide-react";
export default function ProjectManagementPage() {
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
                Project
                <br />
                <span className="text-4xl lg:text-6xl opacity-70">Management</span>
              </h1>
              <p className={`text-xl mb-8 leading-relaxed ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Deliver complex engineering projects on time, within budget, and to the highest standards. 
                Our experienced project managers coordinate all aspects of your project from initial planning 
                through final commissioning, ensuring seamless execution and exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'bg-white text-black hover:bg-gray-200' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}>
                  Start Your Project
                </button>
                <button className={`px-8 py-4 rounded-lg font-semibold border transition-all duration-300 ${
                  theme === 'dark' 
                    ? 'border-white text-white hover:bg-white hover:text-black' 
                    : 'border-black text-black hover:bg-black hover:text-white'
                }`}>
                  View Project Portfolio
                </button>
              </div>
            </div>
            <div className="relative">
              <div className={`w-full h-96 rounded-2xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'
              } flex items-center justify-center`}>
                <div className="text-center">
                  <Target className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-lg opacity-70">Project Management Image Placeholder</p>
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
            Project Management Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Project Planning",
                description: "Comprehensive project planning including scope definition, timeline development, resource allocation, and risk assessment."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Schedule Management",
                description: "Detailed scheduling, milestone tracking, and progress monitoring to ensure projects stay on time and within budget."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Coordination",
                description: "Expert coordination of multidisciplinary teams including engineers, contractors, suppliers, and stakeholders."
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Budget Control",
                description: "Comprehensive budget management, cost tracking, and financial reporting to ensure projects remain profitable."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Quality Assurance",
                description: "Rigorous quality control processes and compliance monitoring to ensure all deliverables meet the highest standards."
              },
              {
                icon: <ArrowRight className="w-8 h-8" />,
                title: "Risk Management",
                description: "Proactive risk identification, assessment, and mitigation strategies to minimize project delays and cost overruns."
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
      
      {/* Project Phases */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Our Project Management Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                phase: "Initiation",
                step: "01",
                description: "Project scope definition, stakeholder identification, and initial feasibility assessment.",
                duration: "1-2 weeks"
              },
              {
                phase: "Planning",
                step: "02",
                description: "Detailed project planning, resource allocation, timeline development, and risk assessment.",
                duration: "2-4 weeks"
              },
              {
                phase: "Execution",
                step: "03",
                description: "Project implementation with continuous monitoring, quality control, and stakeholder communication.",
                duration: "Project dependent"
              },
              {
                phase: "Closure",
                step: "04",
                description: "Project completion, final testing, documentation, and handover to client operations.",
                duration: "1-2 weeks"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold ${
                  theme === 'dark' 
                    ? 'bg-white text-black' 
                    : 'bg-black text-white'
                }`}>
                  {phase.step}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {phase.phase}
                </h3>
                <p className={`mb-4 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {phase.description}
                </p>
                <div className={`text-sm font-semibold ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {phase.duration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Separator */}
      <div className="w-full h-[0.75px] bg-black dark:bg-white"></div>
      
      {/* Success Metrics */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Project Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "98%",
                label: "On-Time Delivery",
                description: "Projects completed within scheduled timeline"
              },
              {
                number: "95%",
                label: "Budget Adherence",
                description: "Projects completed within allocated budget"
              },
              {
                number: "99%",
                label: "Client Satisfaction",
                description: "High satisfaction rate with project outcomes"
              },
              {
                number: "500+",
                label: "Projects Completed",
                description: "Successfully delivered engineering projects"
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
      
      {/* Project Types */}
      <section className={`py-20 ${
        theme === 'dark' ? 'bg-black' : 'bg-white'
      }`} style={{ backgroundColor: theme === 'dark' ? '#000000' : '#ffffff' }}>
        <div className="container mx-auto px-6">
          <h2 className={`text-4xl font-bold mb-12 text-center ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Project Types We Manage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Facilities",
                description: "Large-scale industrial projects including manufacturing plants, processing facilities, and production lines.",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Commercial Buildings",
                description: "Office complexes, retail spaces, and commercial facilities with complex MEP systems.",
                icon: <Calendar className="w-8 h-8" />
              },
              {
                title: "Infrastructure Projects",
                description: "Public infrastructure including power stations, water treatment facilities, and transportation systems.",
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: "Renewable Energy",
                description: "Solar farms, wind energy projects, and other renewable energy infrastructure developments.",
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: "Retrofit Projects",
                description: "Upgrading existing facilities with modern systems, energy efficiency improvements, and compliance updates.",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "Emergency Repairs",
                description: "Rapid response projects for system failures, emergency repairs, and critical infrastructure restoration.",
                icon: <ArrowRight className="w-8 h-8" />
              }
            ].map((project, index) => (
              <div key={index} className={`p-8 rounded-xl ${
                theme === 'dark' 
                  ? 'bg-black border border-gray-700' 
                  : 'bg-white border border-gray-200'
              }`}>
                <div className={`mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {project.icon}
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-black'
                }`}>
                  {project.title}
                </h3>
                <p className={`${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
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
          <h2 className={`text-4xl font-bold mb-6 ${font-title} ${
            theme === 'dark' ? 'text-white' : 'text-black'
          }`}>
            Ready To Start Your Next Project?
          </h2>
          <p className={`text-xl mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let our experienced project managers handle the complexity while you focus on your business. 
            Contact us today to discuss your project requirements and get a detailed project plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}>
              Discuss Your Project
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

