
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Users, Target, Award, Globe, CheckCircle, TrendingUp, Heart, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const achievements = [
    { number: "15+", label: "Years of Excellence", description: "Serving international education dreams" },
    { number: "9960+", label: "Students Guided", description: "Successfully placed in top universities" },
    { number: "180+", label: "Partner Universities", description: "Across 25+ countries worldwide" },
    { number: "98%", label: "Success Rate", description: "Student visa approval rate" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Student-Centric Approach",
      description: "Every decision we make is centered around our students' success and well-being"
    },
    {
      icon: CheckCircle,
      title: "Integrity & Transparency",
      description: "Honest guidance with complete transparency in all our processes and pricing"
    },
    {
      icon: TrendingUp,
      title: "Excellence in Service",
      description: "Committed to delivering the highest quality of service and support"
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Always updating our knowledge to provide the most current advice"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      position: "Founder & CEO",
      experience: "15+ years",
      expertise: "International Education Strategy",
      description: "Former university admissions officer with deep understanding of global education systems"
    },
    {
      name: "Michael Chen",
      position: "Head of Counseling",
      experience: "12+ years", 
      expertise: "Student Counseling & Career Guidance",
      description: "Certified education counselor specializing in STEM programs and scholarships"
    },
    {
      name: "Emma Wilson",
      position: "Visa & Immigration Expert",
      experience: "10+ years",
      expertise: "Visa Processing & Immigration Law",
      description: "Former immigration officer with expertise in student visa regulations worldwide"
    }
  ];

  const accreditations = [
    "QISAN (Quality in Student Assessment and Nostrification) Certified",
    "ICEF (International Consultants for Education and Fairs) Agent",
    "British Council Certified Education Counselor",
    "NAFSA (Association of International Educators) Member",
    "Education USA Advising Center Partner",
    "IDP Education Partner"
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Abroad Academics</h1>
            <p className="text-xl">Your trusted partner for international education excellence</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Who We Are</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Abroad Academics is a premier international education consultancy dedicated to helping students achieve their dreams of studying abroad. Founded in 2009, we have grown from a small team of passionate educators to a globally recognized consultancy with a proven track record of success.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our journey began with a simple mission: to democratize access to quality international education. We believe that every student, regardless of their background, deserves the opportunity to pursue world-class education and unlock their full potential.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, we partner with globally recognized institutions to ensure our students have access to the best opportunities for success. Our comprehensive support system guides students from the initial consultation through post-graduation career support, making us a true partner in their educational journey.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center bg-gray-900 rounded-lg p-6 border border-orange-500">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{achievement.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{achievement.label}</h3>
                  <p className="text-gray-300 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>

            {/* Core Values */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                      <div className="flex items-start space-x-4">
                        <div className="bg-orange-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-black" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                          <p className="text-gray-300">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Leadership Team */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Our Leadership Team</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-orange-500 font-semibold mb-1">{member.position}</p>
                    <p className="text-gray-400 text-sm mb-2">{member.experience} Experience</p>
                    <p className="text-gray-300 text-sm mb-3">{member.expertise}</p>
                    <p className="text-gray-400 text-xs">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Accreditations */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Accreditations & Memberships</h2>
              <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
                <div className="grid md:grid-cols-2 gap-4">
                  {accreditations.map((accreditation, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0" />
                      <span className="text-white">{accreditation}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500 mb-16">
              <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                To empower students worldwide by providing comprehensive guidance and support throughout their international education journey. We believe that quality education should be accessible to all, and we strive to break down barriers that prevent students from achieving their academic and career goals abroad. Through personalized counseling, expert guidance, and unwavering support, we transform dreams into reality.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <h3 className="text-2xl font-bold text-orange-500 mb-4 text-center">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-center">
                To be the world's most trusted and comprehensive international education consultancy, creating a global community of successful graduates who contribute positively to society. We envision a world where geographical boundaries do not limit educational opportunities, and where every student can access the education they deserve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey With Us?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Join thousands of successful students who have achieved their dreams with our expert guidance
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            Book Free Consultation Call
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
