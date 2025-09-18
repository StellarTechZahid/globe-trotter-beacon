
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Target, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  const stats = [
    { number: "3+", label: "Years of Experience", description: "Helping students achieve their dreams" },
    { number: "500+", label: "Students Placed", description: "Successfully placed in top universities" },
    { number: "20+", label: "Partner Universities", description: "Across 15+ countries worldwide" },
    { number: "90%", label: "Visa Success Rate", description: "Highest in the industry" }
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery and student guidance."
    },
    {
      icon: Users,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our interactions."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "We continuously innovate our services to provide cutting-edge solutions for students."
    },
    {
      icon: Award,
      title: "Student-Centric",
      description: "Every decision we make is focused on the best interests of our students and their success."
    }
  ];

  const team = [
    {
      name: "Ahmad Zahid",
      position: "Founder & CEO",
      education: "Bachelors in Education Policy",
      experience: "2+ years in international education",
      description: "Visionary leader with extensive experience in global education policies and student mobility."
    },
    {
      name: "Under Recuritement",
      position: "N/A",
      education: "N/A",
      experience: "N/A",
      description: "N/A"
    },
    {
      name: "Under Recuritement",
      position: "N/A",
      education: "N/A",
      experience: "N/A",
      description: "N/A"
    }
  ];

  const achievements = [
    "Best Education Consultant Award 2023",
    "Excellence in Student Services Recognition",
    "Top 10 Study Abroad Consultants Globally",
    "International Education Innovation Award",
    "Student Choice Award Winner 2022-2023"
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
            <p className="text-xl">Your trusted partner in international education for over 15 years</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                <p className="text-gray-300 text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Story</h2>
              <p className="text-xl text-gray-300">From humble beginnings to global recognition</p>
            </div>
            
            <div className="space-y-8 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Founded in 2023, Abroad Academics began as a small consultancy with a big dream: to make quality international education accessible to students from all backgrounds. What started as a passionate endeavor by a group of education enthusiasts has grown into one of the most trusted names in international education consulting.
              </p>
              
              <p className="text-lg">
                Over the years, we have helped more than 500 students achieve their dreams of studying abroad. Our success stories span across prestigious universities in the UK, USA, Canada, Australia, Germany, and many other countries. We take pride in our personalized approach, ensuring that each student receives guidance tailored to their unique aspirations and circumstances.
              </p>
              
              <p className="text-lg">
                Today, Abroad Academics stands as a beacon of excellence in international education consulting, with partnerships with over 20+ universities worldwide and a track record that speaks for itself. Our commitment to student success remains unwavering as we continue to evolve and adapt to the changing landscape of global education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-black rounded-lg p-8 border border-orange-500">
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To empower students with comprehensive guidance, support, and resources needed to successfully pursue international education opportunities that align with their academic goals and career aspirations, while ensuring a seamless and stress-free experience throughout their journey.
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-8 border border-orange-500">
              <h3 className="text-3xl font-bold text-orange-500 mb-6">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                To be the world's leading international education consultancy, recognized for our innovative approaches, exceptional student outcomes, and unwavering commitment to making quality education accessible to students globally, thereby contributing to a more educated and interconnected world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center hover:border-orange-400 transition-all duration-300">
                  <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Leadership Team</h2>
            <p className="text-xl text-gray-300">Meet the experts guiding your educational journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-black rounded-lg p-6 border border-orange-500">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-orange-500 font-semibold">{member.position}</p>
                </div>
                
                <div className="space-y-2 text-sm text-gray-300 mb-4">
                  <p><strong>Education:</strong> {member.education}</p>
                  <p><strong>Experience:</strong> {member.experience}</p>
                </div>
                
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-300">Recognition that speaks to our commitment</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg border border-orange-500">
                  <Star className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-white font-semibold">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Why Choose Abroad Academics?</h2>
            <p className="text-xl text-gray-300">What sets us apart in the industry</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Personalized counseling for every student",
                "95% visa success rate",
                "Partnerships with 180+ universities",
                "Expert guidance at every step",
                "Scholarship assistance programs",
                "24/7 student support",
                "Post-arrival assistance",
                "Career guidance and placement support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-black mb-8 opacity-90">
            Join thousands of successful students who have achieved their dreams with Abroad Academics
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Book Free Consultation Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
