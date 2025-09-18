import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Users, Globe, Target, CheckCircle, Star, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#consultation-form';
    }
  };

  const stats = [
    { id: 'experience', number: '2+', label: 'Years of Experience', description: 'Helping students achieve their dreams' },
    { id: 'students', number: '500+', label: 'Students Placed', description: 'Successfully placed in top universities' },
    { id: 'universities', number: '20+', label: 'Partner Universities', description: 'Across 15+ countries worldwide' },
    { id: 'visa', number: '90%', label: 'Visa Success Rate', description: 'Highest in the industry' },
  ];

  const values = [
    {
      id: 'excellence',
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service delivery and student guidance.',
    },
    {
      id: 'integrity',
      icon: Users,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our interactions.',
    },
    {
      id: 'innovation',
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously innovate our services to provide cutting-edge solutions for students.',
    },
    {
      id: 'student-centric',
      icon: Award,
      title: 'Student-Centric',
      description: 'Every decision we make is focused on the best interests of our students and their success.',
    },
  ];

  const team = [
    {
      id: 'ahmad-zahid',
      name: 'Ahmad Zahid',
      position: 'Founder & CEO',
      education: 'Bachelors in Education Policy',
      experience: '2+ years in international education',
      description: 'Visionary leader with extensive experience in global education policies and student mobility.',
    },
  ];

  const achievements = [
    { id: 'award-2023', title: 'Best Education Consultant Award 2023' },
    { id: 'excellence', title: 'Excellence in Student Services Recognition' },
    { id: 'top-10', title: 'Top 10 Study Abroad Consultants Globally' },
    { id: 'innovation', title: 'International Education Innovation Award' },
    { id: 'student-choice', title: 'Student Choice Award Winner 2022-2023' },
  ];

  return (
    <>
      <Head>
        <title>About Abroad Academics | International Education Consultants</title>
        <meta
          name="description"
          content="Learn about Abroad Academics, your trusted partner in international education since 2023."
        />
        <meta name="keywords" content="study abroad, education consulting, international education" />
        <meta property="og:title" content="About Abroad Academics" />
        <meta
          property="og:description"
          content="Discover our mission, vision, and achievements in helping students study abroad."
        />
      </Head>
      <div className="min-h-screen bg-black">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-orange-600 to-orange-800"
          role="region"
          aria-labelledby="hero-heading"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center text-white">
              <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                About Abroad Academics
              </h1>
              <p className="text-lg sm:text-xl">Your trusted partner in international education since 2023</p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900" role="region" aria-labelledby="stats-heading">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-0">
              {stats.map((stat) => (
                <div key={stat.id} className="text-center">
                  <div className="text-4xl font-bold text-orange-500 mb-2">{stat.number}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{stat.label}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20" role="region" aria-labelledby="story-heading">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 id="story-heading" className="text-4xl font-bold text-orange-500 mb-6">
                  Our Story
                </h2>
                <p className="text-lg sm:text-xl text-gray-300">From humble beginnings to global recognition</p>
              </div>
              <div className="space-y-8 text-gray-300 leading-relaxed">
                <p className="text-base sm:text-lg">
                  Founded in 2023, Abroad Academics began as a small consultancy with a big dream: to make
                  quality international education accessible to students from all backgrounds. What started
                  as a passionate endeavor by a group of education enthusiasts has grown into one of the
                  most trusted names in international education consulting.
                </p>
                <p className="text-base sm:text-lg">
                  In just two years, we have helped over 500 students achieve their dreams of studying
                  abroad. Our success stories span prestigious universities in the UK, USA, Canada,
                  Australia, Germany, and beyond. We take pride in our personalized approach, ensuring
                  each student receives guidance tailored to their unique aspirations and circumstances.
                </p>
                <p className="text-base sm:text-lg">
                  Today, Abroad Academics stands as a beacon of excellence, with partnerships with over 20
                  universities worldwide and a track record that speaks for itself. Our commitment to
                  student success remains unwavering as we evolve with the global education landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-900" role="region" aria-labelledby="mission-vision-heading">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="bg-black rounded-lg p-8 border border-orange-500">
                <h3 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To empower students with comprehensive guidance, support, and resources needed to
                  successfully pursue international education opportunities that align with their
                  academic goals and career aspirations, while ensuring a seamless and stress-free
                  experience.
                </p>
              </div>
              <div className="bg-black rounded-lg p-8 border border-orange-500">
                <h3 className="text-3xl font-bold text-orange-500 mb-6">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  To be the world’s leading international education consultancy, recognized for our
                  innovative approaches, exceptional student outcomes, and commitment to making quality
                  education accessible globally, fostering a more educated and interconnected world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20" role="region" aria-labelledby="values-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="values-heading" className="text-4xl font-bold text-orange-500 mb-6">
                Our Core Values
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 min-w-0">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.id}
                    className="bg-gray-900 rounded-lg p-6 border border-orange-500 text-center hover:border-orange-400 transition-all duration-300"
                  >
                    <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-black" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-gray-900" role="region" aria-labelledby="team-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="team-heading" className="text-4xl font-bold text-orange-500 mb-6">
                Our Leadership Team
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">Meet the experts guiding your educational journey</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto min-w-0">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="bg-black rounded-lg p-6 border border-orange-500"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-black font-bold text-2xl">{member.name.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-orange-500 font-semibold">{member.position}</p>
                  </div>
                  <div className="space-y-2 text-sm text-gray-300 mb-4">
                    <p>
                      <strong>Education:</strong> {member.education}
                    </p>
                    <p>
                      <strong>Experience:</strong> {member.experience}
                    </p>
                  </div>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20" role="region" aria-labelledby="achievements-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="achievements-heading" className="text-4xl font-bold text-orange-500 mb-6">
                Our Achievements
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">Recognition that speaks to our commitment</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 min-w-0">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center space-x-3 bg-gray-900 p-4 rounded-lg border border-orange-500"
                  >
                    <Star className="h-6 w-6 text-orange-500 flex-shrink-0" aria-hidden="true" />
                    <span className="text-white font-semibold">{achievement.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-900" role="region" aria-labelledby="why-choose-us-heading">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="why-choose-us-heading" className="text-4xl font-bold text-orange-500 mb-6">
                Why Choose Abroad Academics?
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">What sets us apart in the industry</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 min-w-0">
                {[
                  { id: 'counseling', title: 'Personalized counseling for every student' },
                  { id: 'visa', title: '90% visa success rate' },
                  { id: 'universities', title: 'Partnerships with 20+ universities' },
                  { id: 'guidance', title: 'Expert guidance at every step' },
                  { id: 'scholarships', title: 'Scholarship assistance programs' },
                  { id: 'support', title: '24/7 student support' },
                  { id: 'post-arrival', title: 'Post-arrival assistance' },
                  { id: 'career', title: 'Career guidance and placement support' },
                ].map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-3">
                    <CheckCircle
                      className="h-6 w-6 text-orange-500 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-white text-sm sm:text-base">{feature.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 bg-gradient-to-r from-orange-600 to-orange-700"
          role="region"
          aria-labelledby="cta-heading"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 id="cta-heading" className="text-4xl font-bold text-black mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg sm:text-xl text-black mb-8 opacity-90">
              Join hundreds of successful students who have achieved their dreams with Abroad Academics
            </p>
            <Button
              onClick={scrollToConsultation}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-lg"
              aria-label="Book a free consultation call"
            >
              <MessageCircle className="mr-2 h-5 w-5" aria-hidden="true" />
              Book Free Consultation Call
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default About;
