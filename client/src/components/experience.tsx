import { Briefcase, Code, Award, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { useState } from 'react';
import { ImageWithFallback } from '@/components/ui/image-with-fallback';

export function Experience() {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  
  const experienceCredentials = [
    {
      title: "Corizo intenship certificate",
      description: "Professional LinkedIn presence showcasing Corizo internship",
      imageUrl: "/attached_assets/corizo%20li%20_1751970802230.jpg",
      color: "text-blue-400"
    },
    {
      title: "Corizo LOR Document",
      description: "Letter of Recommendation from Corizo Edutech",
      imageUrl: "/attached_assets/LOR Corizo_1751970728640.pdf",
      color: "text-indigo-400"
    },
    {
      title: "Prodigy InfoTech LOR",
      description: "Letter of Recommendation from Prodigy InfoTech",
      imageUrl: "/attached_assets/prodigy infotech Letter of Recommendation_1751970745885.pdf",
      color: "text-purple-400"
    },
    {
      title: "Campus ambassador certificate",
      description: "Campus-based technical training certification",
      imageUrl: "/attached_assets/campuss_1751968636489.png",
      color: "text-pink-400"
    }
  ];
  
  const experiences = [
    {
      title: "Web Development Trainee",
      company: "Corizo, Chennai",
      period: "September 2024 - November 2024",
      description: "Developed \"Foodie\", a full-stack multi-user web application with comprehensive user and admin modules, featuring cart management, payments, and analytics.",
      icon: Briefcase,
      color: "text-indigo-400"
    },
    {
      title: "Web Developer Intern",
      company: "Prodigy Infotech (Online)",
      period: "June 2024 - July 2024",
      description: "Designed and developed multiple frontend projects including responsive landing pages, interactive applications, and weather app with live API integration.",
      icon: Code,
      color: "text-purple-400"
    }
  ];

  const certifications = [
    {
      title: "Oracle SQL Specialist",
      description: "Oracle Database SQL Certified Specialist",
      color: "text-orange-400",
      imageUrl: "/attached_assets/oraclespl_1751968622048.png"
    },
    {
      title: "FreeCodeCamp JavaScript Developer",
      description: "JavaScript Algorithms & Data Structures (Beta)",
      color: "text-yellow-400",
      imageUrl: "/attached_assets/freejava_1751968636483.png"
    },
    {
      title: "IBM SQL & Relational DB",
      description: "SQL and Relational Databases 101",
      color: "text-blue-400",
      imageUrl: "/attached_assets/ibmsql_1751968626175.png"
    },
    {
      title: "CISCO Networking & Cybersecurity",
      description: "CCNA: Enterprise Networking, Security, and Automation",
      color: "text-cyan-400",
      imageUrl: "/attached_assets/networking_1751968636486.png"
    },
    {
      title: "DevTown Campus Ambassador",
      description: "Leadership & Community",
      color: "text-purple-400",
      imageUrl: "/attached_assets/campuss_1751968636489.png"
    },
    {
      title: "SWAYAM Python Programming",
      description: "Programming in Python - 4 Credit Course",
      color: "text-green-400",
      imageUrl: "/attached_assets/python_1751968636488.png"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
            Experience & Achievements
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Integrated Timeline with LOR Documents */}
          <div>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 animate-pulse"></div>
              
              <div className="space-y-16">
                {/* Corizo Experience with LOR */}
                <div className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* Company Details - Left */}
                    <div className="text-right pr-8">
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center justify-end mb-3">
                          <Briefcase className="h-6 w-6 text-indigo-400 mr-2" />
                          <h3 className="text-xl font-semibold text-white">Web Development Trainee</h3>
                        </div>
                        <h4 className="text-lg text-indigo-400 mb-2">Corizo, Chennai</h4>
                        <p className="text-gray-400 text-sm mb-3">September 2024 - November 2024</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Developed "Foodie", a full-stack multi-user web application with comprehensive user and admin modules, featuring cart management, payments, and analytics.
                        </p>
                      </div>
                    </div>
                    
                    {/* LOR Document - Right */}
                    <div className="pl-8">
                      <Card 
                        className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                        onClick={() => window.open('/attached_assets/LOR Corizo_1751970728640.pdf', '_blank')}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Award className="h-6 w-6 mr-3 text-indigo-400" />
                            <h4 className="font-semibold text-white">Letter of Recommendation</h4>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">Official recommendation from Corizo Edutech</p>
                          <div className="text-indigo-400 text-sm font-medium">View PDF →</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden ml-12">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 mb-4">
                      <div className="flex items-center mb-3">
                        <Briefcase className="h-6 w-6 text-indigo-400 mr-2" />
                        <h3 className="text-xl font-semibold text-white">Web Development Trainee</h3>
                      </div>
                      <h4 className="text-lg text-indigo-400 mb-2">Corizo, Chennai</h4>
                      <p className="text-gray-400 text-sm mb-3">September 2024 - November 2024</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Developed "Foodie", a full-stack multi-user web application with comprehensive user and admin modules, featuring cart management, payments, and analytics.
                      </p>
                    </div>
                    
                    <Card 
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('/attached_assets/LOR Corizo_1751970728640.pdf', '_blank')}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <Award className="h-6 w-6 mr-3 text-indigo-400" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">Letter of Recommendation</h4>
                            <p className="text-gray-400 text-sm">Official recommendation from Corizo Edutech</p>
                          </div>
                          <div className="text-indigo-400 text-sm">View PDF</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center z-10 animate-pulse">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Prodigy InfoTech Experience with LOR */}
                <div className="relative">
                  {/* Desktop Layout */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
                    {/* LOR Document - Left */}
                    <div className="pr-8">
                      <Card 
                        className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                        onClick={() => window.open('/attached_assets/prodigy infotech Letter of Recommendation_1751970745885.pdf', '_blank')}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Award className="h-6 w-6 mr-3 text-purple-400" />
                            <h4 className="font-semibold text-white">Letter of Recommendation</h4>
                          </div>
                          <p className="text-gray-400 text-sm mb-3">Official recommendation from Prodigy InfoTech</p>
                          <div className="text-purple-400 text-sm font-medium">View PDF →</div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Company Details - Right */}
                    <div className="pl-8">
                      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center mb-3">
                          <Code className="h-6 w-6 text-purple-400 mr-2" />
                          <h3 className="text-xl font-semibold text-white">Web Developer Intern</h3>
                        </div>
                        <h4 className="text-lg text-purple-400 mb-2">Prodigy Infotech (Online)</h4>
                        <p className="text-gray-400 text-sm mb-3">June 2024 - July 2024</p>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Designed and developed multiple frontend projects including responsive landing pages, interactive applications, and weather app with live API integration.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden ml-12">
                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 mb-4">
                      <div className="flex items-center mb-3">
                        <Code className="h-6 w-6 text-purple-400 mr-2" />
                        <h3 className="text-xl font-semibold text-white">Web Developer Intern</h3>
                      </div>
                      <h4 className="text-lg text-purple-400 mb-2">Prodigy Infotech (Online)</h4>
                      <p className="text-gray-400 text-sm mb-3">June 2024 - July 2024</p>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Designed and developed multiple frontend projects including responsive landing pages, interactive applications, and weather app with live API integration.
                      </p>
                    </div>
                    
                    <Card 
                      className="bg-gray-800/50 backdrop-blur-sm border-gray-700/50 cursor-pointer hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105"
                      onClick={() => window.open('/attached_assets/prodigy infotech Letter of Recommendation_1751970745885.pdf', '_blank')}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <Award className="h-6 w-6 mr-3 text-purple-400" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-white">Letter of Recommendation</h4>
                            <p className="text-gray-400 text-sm">Official recommendation from Prodigy InfoTech</p>
                          </div>
                          <div className="text-purple-400 text-sm">View PDF</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-1/2 top-6 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center z-10 animate-pulse">
                    <Code className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View Credentials Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setSelectedCert({ title: "Experience Credentials", description: "Professional credentials and achievements from internships", imageUrl: "experience-grid" })}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Credentials
            </button>
          </div>

          {/* Certifications */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-8 text-center text-indigo-400">
              Certifications & Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 project-card"
                  onClick={() => setSelectedCert(cert)}
                >
                  <CardContent className="p-4 flex items-center">
                    <Award className={`h-6 w-6 mr-4 ${cert.color}`} />
                    <div className="flex-1">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <p className="text-gray-400 text-sm">{cert.description}</p>
                    </div>
                    <div className="text-gray-400 text-sm">
                      Click to view
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certification Modal */}
      {selectedCert && (
        <Dialog open={true} onOpenChange={() => setSelectedCert(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-800 border-gray-700">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-indigo-400 mb-4">
                {selectedCert.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="space-y-4">
              
              {/* Certificate Images - Side by Side Grid View */}
              {selectedCert.imageUrl === "experience-grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {experienceCredentials.filter(cred => !cred.imageUrl.includes('attached_assets')).map((cred, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-2">
                      <ImageWithFallback
                        src={cred.imageUrl}
                        alt={cred.title}
                        className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        fallbackIcon="award"
                        fallbackText={cred.title}
                      />
                      <p className="text-sm text-center mt-2 text-gray-300">{cred.title}</p>
                    </div>
                  ))}
                </div>
              ) : selectedCert.imageUrl === "grid" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certifications.filter(cert => !cert.imageUrl.includes('attached_assets')).map((cert, index) => (
                    <div key={index} className="bg-gray-700 rounded-lg p-2">
                      <ImageWithFallback
                        src={cert.imageUrl}
                        alt={cert.title}
                        className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                        fallbackIcon="award"
                        fallbackText={cert.title}
                      />
                      <p className="text-sm text-center mt-2 text-gray-300">{cert.title}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-700 rounded-lg p-4 text-center">
                  <ImageWithFallback
                    src={selectedCert.imageUrl}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[600px] mx-auto rounded-lg shadow-lg"
                    fallbackIcon="award"
                    fallbackText={selectedCert.title}
                  />
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
