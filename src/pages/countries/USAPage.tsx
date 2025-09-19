import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const USAPage = () => {
  const quickLinks = [
    { name: 'Harvard University', id: 'harvard-university' },
    { name: 'Stanford University', id: 'stanford-university' },
    { name: 'Massachusetts Institute of Technology', id: 'mit' },
    { name: 'University of California, Berkeley', id: 'uc-berkeley' },
    { name: 'Yale University', id: 'yale-university' },
    { name: 'Princeton University', id: 'princeton-university' },
    { name: 'Columbia University', id: 'columbia-university' },
    { name: 'University of Chicago', id: 'university-of-chicago' },
    { name: 'University of Pennsylvania', id: 'university-of-pennsylvania' },
    { name: 'California Institute of Technology', id: 'caltech' },
    { name: 'Duke University', id: 'duke-university' },
    { name: 'Johns Hopkins University', id: 'johns-hopkins-university' },
    { name: 'Northwestern University', id: 'northwestern-university' },
    { name: 'University of California, Los Angeles', id: 'ucla' },
    { name: 'Cornell University', id: 'cornell-university' },
    { name: 'University of Michigan', id: 'university-of-michigan' },
    { name: 'University of Washington', id: 'university-of-washington' },
    { name: 'University of California, San Diego', id: 'uc-san-diego' },
    { name: 'University of Wisconsin-Madison', id: 'university-of-wisconsin-madison' },
    { name: 'Brown University', id: 'brown-university' },
    { name: 'University of Texas at Austin', id: 'ut-austin' },
    { name: 'University of Illinois at Urbana-Champaign', id: 'uiuc' },
    { name: 'University of California, Davis', id: 'uc-davis' },
    { name: 'University of California, Santa Barbara', id: 'uc-santa-barbara' },
    { name: 'University of North Carolina at Chapel Hill', id: 'unc-chapel-hill' },
    { name: 'University of Southern California', id: 'usc' },
    { name: 'University of Minnesota Twin Cities', id: 'university-of-minnesota' },
    { name: 'Boston University', id: 'boston-university' },
    { name: 'University of Maryland, College Park', id: 'university-of-maryland' },
    { name: 'Michigan State University', id: 'michigan-state-university' },
    { name: 'University of Florida', id: 'university-of-florida' },
    { name: 'University of Georgia', id: 'university-of-georgia' },
    { name: 'University of California, Irvine', id: 'uc-irvine' },
    { name: 'University of Massachusetts Amherst', id: 'umass-amherst' },
    { name: 'Ohio State University', id: 'ohio-state-university' },
    { name: 'Purdue University', id: 'purdue-university' },
    { name: 'Pennsylvania State University', id: 'penn-state' },
    { name: 'New York University', id: 'nyu' },
    { name: 'University of Virginia', id: 'university-of-virginia' },
    { name: 'University of Colorado Boulder', id: 'university-of-colorado-boulder' },
    { name: 'University of Rochester', id: 'university-of-rochester' },
    { name: 'University of Arizona', id: 'university-of-arizona' },
    { name: 'University of Iowa', id: 'university-of-iowa' },
    { name: 'Texas A&M University', id: 'texas-am-university' },
    { name: 'University of California, Riverside', id: 'uc-riverside' },
    { name: 'University of Connecticut', id: 'university-of-connecticut' },
    { name: 'Indiana University Bloomington', id: 'indiana-university-bloomington' },
    { name: 'University of Pittsburgh', id: 'university-of-pittsburgh' },
    { name: 'University of Oregon', id: 'university-of-oregon' },
    { name: 'Dartmouth College', id: 'dartmouth-college' },
    { name: 'Vanderbilt University', id: 'vanderbilt-university' },
    { name: 'University of Miami', id: 'university-of-miami' },
    { name: 'University of Notre Dame', id: 'university-of-notre-dame' },
    { name: 'University of Kansas', id: 'university-of-kansas' },
    { name: 'DePaul University', id: 'depaul-university' },
    { name: 'Columbus State University', id: 'columbus-state-university' },
    { name: 'University of Cincinnati', id: 'university-of-cincinnati' },
    { name: 'Oregon State University', id: 'oregon-state-university' },
    { name: 'University of New Haven', id: 'university-of-new-haven' },
    { name: 'Monroe College', id: 'monroe-college' },
    { name: 'New York Institute of Technology', id: 'nyit' },
    { name: 'San Francisco State University', id: 'sfsu' },
    { name: 'California State University, Long Beach', id: 'csulb' },
    { name: 'California State University, Fullerton', id: 'csuf' },
    { name: 'California State University, Northridge', id: 'csun' },
    { name: 'California State University, Sacramento', id: 'csus' },
    { name: 'California State University, San Bernardino', id: 'csusb' },
    { name: 'California State University, Los Angeles', id: 'csula' },
    { name: 'California State University, East Bay', id: 'csueb' },
    { name: 'California State University, Monterey Bay', id: 'csumb' },
    { name: 'California State University, Stanislaus', id: 'csustan' },
    { name: 'California State University, Channel Islands', id: 'csuci' },
    { name: 'California State University, Dominguez Hills', id: 'csudh' },
    { name: 'California State University, Bakersfield', id: 'csub' },
    { name: 'California State University, Chico', id: 'csuchico' },
    { name: 'California State University, Fresno', id: 'csufresno' },
    { name: 'California State University, San Marcos', id: 'csusm' },
    { name: 'California State Polytechnic University, Pomona', id: 'cal-poly-pomona' },
    { name: 'California State Polytechnic University, Humboldt', id: 'cal-poly-humboldt' },
    { name: 'University of Alabama', id: 'university-of-alabama' },
    { name: 'George Mason University', id: 'george-mason-university' },
    { name: 'University of Illinois Chicago', id: 'uic' },
    { name: 'Northeastern University', id: 'northeastern-university' },
    { name: 'University of South Florida', id: 'usf' },
    { name: 'Florida International University', id: 'fiu' },
    { name: 'University of Central Florida', id: 'ucf' },
    { name: 'University of Houston', id: 'university-of-houston' },
    { name: 'University of Oklahoma', id: 'university-of-oklahoma' },
    { name: 'Oklahoma State University', id: 'oklahoma-state-university' },
    { name: 'University of Nebraska-Lincoln', id: 'university-of-nebraska-lincoln' },
    { name: 'Iowa State University', id: 'iowa-state-university' },
    { name: 'University of Utah', id: 'university-of-utah' },
    { name: 'University of Nevada, Las Vegas', id: 'unlv' },
    { name: 'University of Nevada, Reno', id: 'unr' },
    { name: 'University of Idaho', id: 'university-of-idaho' },
    { name: 'Boise State University', id: 'boise-state-university' },
    { name: 'Washington State University', id: 'washington-state-university' },
    { name: 'Portland State University', id: 'portland-state-university' },
    { name: 'University of Portland', id: 'university-of-portland' },
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#consultation-form';
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in USA
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the United States. Start your American dream today with Abroad Academics - your trusted study abroad consultants since 2023!
            </p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 text-lg animate-fade-in delay-400"
            >
              Get Free Consultation →
            </Button>
          </div>
        </div>
      </section>

      {/* Your Pathway Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to American Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The United States is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in the USA opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your American dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose USA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose USA for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose United States for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to Harvard, Stanford, MIT, and many other top-ranked institutions that lead in research and innovation. Study abroad in USA with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Welcoming Environment</h3>
              <p className="text-gray-300">
                Experience the most multicultural and welcoming society with excellent quality of life and student support. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to OPT, STEM extension, and excellent career prospects with pathways to H1B visa. Top study abroad consultants ensure your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation Section */}
      <QuickNavigation links={quickLinks} />

      {/* Universities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top USA Universities for International Students</h2>
            <p className="text-gray-300">Explore USA's most prestigious universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* Harvard University */}
            <div id="harvard-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Harvard University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #4 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cambridge, Massachusetts</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1636</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The oldest university in the US, known for excellence across all disciplines and producing global leaders.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Harvard University Campus</span>
                </div>
              </div>
            </div>

            {/* Stanford University */}
            <div id="stanford-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Stanford University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Stanford University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #6 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Stanford, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 24%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1885</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for innovation, entrepreneurship, and research in Silicon Valley.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$55,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Massachusetts Institute of Technology */}
            <div id="mit" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Massachusetts Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cambridge, Massachusetts</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,500+ (International: 29%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1861</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A global leader in STEM, known for cutting-edge research and innovation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$55,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">MIT Campus</span>
                </div>
              </div>
            </div>

            {/* University of California, Berkeley */}
            <div id="uc-berkeley" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UC Berkeley Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of California, Berkeley</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #12 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Berkeley, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1868</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Famous for its academic rigor and vibrant campus culture, excelling in sciences and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Yale University */}
            <div id="yale-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Yale University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #23 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New Haven, Connecticut</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 21%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1701</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for its liberal arts education and historic campus, fostering global leaders.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$55,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Yale University Campus</span>
                </div>
              </div>
            </div>

            {/* Princeton University */}
            <div id="princeton-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Princeton University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Princeton University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #17 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Princeton, New Jersey</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,500+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1746</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its undergraduate focus and research opportunities in a picturesque campus setting.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Columbia University */}
            <div id="columbia-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Columbia University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #34 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New York City, New York</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 33,000+ (International: 36%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1754</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Located in NYC, Columbia excels in journalism, business, and international affairs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$55,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Columbia University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Chicago */}
            <div id="university-of-chicago" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Chicago Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Chicago</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #21 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chicago, Illinois</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1890</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its rigorous academics and contributions to economics and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$55,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Pennsylvania */}
            <div id="university-of-pennsylvania" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Pennsylvania</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #15 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Philadelphia, Pennsylvania</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 22,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1740</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Home to the Wharton School, excelling in business, law, and medicine.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Pennsylvania Campus</span>
                </div>
              </div>
            </div>

            {/* California Institute of Technology */}
            <div id="caltech" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Caltech Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">California Institute of Technology</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #10 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Pasadena, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,200+ (International: 27%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1891</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A world leader in science and engineering, known for its small size and high research output.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$55,000-$65,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Duke University */}
            <div id="duke-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Duke University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #61 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Durham, North Carolina</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1838</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its medical school, engineering, and vibrant campus life.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Duke University Campus</span>
                </div>
              </div>
            </div>

            {/* Johns Hopkins University */}
            <div id="johns-hopkins-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Johns Hopkins University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Johns Hopkins University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #32 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Baltimore, Maryland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1876</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leader in medical research and public health, with strong programs in engineering and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Northwestern University */}
            <div id="northwestern-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Northwestern University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #50 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Evanston, Illinois</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1851</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for journalism, business, and engineering, with a vibrant campus near Chicago.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Northwestern University Campus</span>
                </div>
              </div>
            </div>

            {/* University of California, Los Angeles */}
            <div id="ucla" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UCLA Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of California, Los Angeles</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #42 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Los Angeles, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 45,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1919</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A top public university known for its film school, medical center, and diverse programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Cornell University */}
            <div id="cornell-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Cornell University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #16 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ithaca, New York</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 24%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1865</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    An Ivy League university with strengths in engineering, agriculture, and hotel management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Cornell University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Michigan */}
            <div id="university-of-michigan" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Michigan Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Michigan</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #44 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ann Arbor, Michigan</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 48,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1817</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A top public university with strong programs in engineering, business, and medicine.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Washington */}
            <div id="university-of-washington" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Washington</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #76 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Seattle, Washington</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 52,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1861</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its computer science, medicine, and environmental science programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Washington Campus</span>
                </div>
              </div>
            </div>

            {/* University of California, San Diego */}
            <div id="uc-san-diego" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UC San Diego Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of California, San Diego</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #72 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: La Jolla, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1960</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Excels in biological sciences, engineering, and oceanography with a coastal campus.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Wisconsin-Madison */}
            <div id="university-of-wisconsin-madison" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Wisconsin-Madison</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #102 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Madison, Wisconsin</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 47,000+ (International: 13%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1848</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its research in agriculture, engineering, and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Wisconsin-Madison Campus</span>
                </div>
              </div>
            </div>

            {/* Brown University */}
            <div id="brown-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Brown University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Brown University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #79 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Providence, Rhode Island</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1764</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Offers a flexible curriculum and strong programs in liberal arts and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$50,000-$60,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 100+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Texas at Austin */}
            <div id="ut-austin" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Texas at Austin</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #66 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Austin, Texas</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1883</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A leading public university with strengths in engineering, business, and computer science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Texas at Austin Campus</span>
                </div>
              </div>
            </div>

            {/* University of Illinois at Urbana-Champaign */}
            <div id="uiuc" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UIUC Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Illinois at Urbana-Champaign</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #69 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Urbana-Champaign, Illinois</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 56,000+ (International: 23%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1867</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for its engineering, computer science, and agricultural programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$35,000-$45,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of California, Davis */}
            <div id="uc-davis" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of California, Davis</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #132 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Davis, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1905</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leader in veterinary medicine, agriculture, and environmental sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UC Davis Campus</span>
                </div>
              </div>
            </div>

            {/* University of California, Santa Barbara */}
            <div id="uc-santa-barbara" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UC Santa Barbara Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of California, Santa Barbara</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #178 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Santa Barbara, California</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 26,000+ (International: 14%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1891</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for its physics, engineering, and coastal research programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$40,000-$50,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of North Carolina at Chapel Hill */}
            <div id="unc-chapel-hill" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of North Carolina at Chapel Hill</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #109 Worldwide (QS 2026)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chapel Hill, North Carolina</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1789</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    A top public university with strengths in medicine, journalism, and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">$35,000-$45,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">TOEFL 80+, SAT/ACT</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UNC Chapel Hill Campus</span>
                </div>
              </div>
            </div>

            {/* University of Southern California */}
<div id="usc" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Southern California</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #125 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Los Angeles, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 49,000+ (International: 24%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1880</p>
      </div>
      <p className="text-gray-300 mb-6">
        A leading private research university with strengths in film, business, and engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$60,000-$65,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Southern California Campus</span>
    </div>
  </div>
</div>

{/* University of Minnesota Twin Cities */}
<div id="university-of-minnesota" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Minnesota Twin Cities</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #176 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Minneapolis, Minnesota</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 12%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1851</p>
      </div>
      <p className="text-gray-300 mb-6">
        A major public research university known for innovation in science, engineering, and social sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$33,000-$40,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Minnesota Twin Cities Campus</span>
    </div>
  </div>
</div>

{/* Boston University */}
<div id="boston-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Boston University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #108 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Boston, Massachusetts</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 36,000+ (International: 25%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1839</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private research university excelling in communications, business, and health sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$58,000-$62,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 90+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Boston University Campus</span>
    </div>
  </div>
</div>

{/* University of Maryland, College Park */}
<div id="university-of-maryland" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Maryland, College Park</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #152 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: College Park, Maryland</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 41,000+ (International: 10%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1856</p>
      </div>
      <p className="text-gray-300 mb-6">
        A top public university with strengths in engineering, computer science, and public policy.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$38,000-$42,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Maryland, College Park Campus</span>
    </div>
  </div>
</div>

{/* Michigan State University */}
<div id="michigan-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Michigan State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #159 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: East Lansing, Michigan</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1855</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for agriculture, education, and social sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$40,000-$45,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Michigan State University Campus</span>
    </div>
  </div>
</div>

{/* University of Florida */}
<div id="university-of-florida" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Florida</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #215 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Gainesville, Florida</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 55,000+ (International: 9%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1853</p>
      </div>
      <p className="text-gray-300 mb-6">
        A top public university with strong programs in agriculture, engineering, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$28,000-$33,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Florida Campus</span>
    </div>
  </div>
</div>

{/* University of Georgia */}
<div id="university-of-georgia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Georgia</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #319 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Athens, Georgia</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1785</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for its programs in agriculture, journalism, and veterinary medicine.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$31,000-$36,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Georgia Campus</span>
    </div>
  </div>
</div>

{/* University of California, Irvine */}
<div id="uc-irvine" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of California, Irvine</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #232 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Irvine, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 36,000+ (International: 17%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in computer science, engineering, and biological sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$43,000-$47,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of California, Irvine Campus</span>
    </div>
  </div>
</div>

{/* University of Massachusetts Amherst */}
<div id="umass-amherst" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Massachusetts Amherst</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #275 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Amherst, Massachusetts</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 32,000+ (International: 14%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1863</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in engineering, computer science, and social sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$36,000-$40,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Massachusetts Amherst Campus</span>
    </div>
  </div>
</div>

{/* Ohio State University */}
<div id="ohio-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Ohio State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #151 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Columbus, Ohio</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 60,000+ (International: 10%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1870</p>
      </div>
      <p className="text-gray-300 mb-6">
        A leading public university with strong programs in business, engineering, and health sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$35,000-$40,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Ohio State University Campus</span>
    </div>
  </div>
</div>

{/* Purdue University */}
<div id="purdue-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Purdue University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #86 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: West Lafayette, Indiana</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 16%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1869</p>
      </div>
      <p className="text-gray-300 mb-6">
        A top public university renowned for engineering, technology, and agriculture.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$31,000-$36,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Purdue University Campus</span>
    </div>
  </div>
</div>

{/* Pennsylvania State University */}
<div id="penn-state" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Pennsylvania State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #89 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: University Park, Pennsylvania</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 46,000+ (International: 10%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1855</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strong programs in engineering, business, and agriculture.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$38,000-$42,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Pennsylvania State University Campus</span>
    </div>
  </div>
</div>

{/* New York University */}
<div id="nyu" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">New York University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #43 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New York, New York</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 51,000+ (International: 28%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1831</p>
      </div>
      <p className="text-gray-300 mb-6">
        A leading private university with strengths in arts, business, and law.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$56,000-$60,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">New York University Campus</span>
    </div>
  </div>
</div>

{/* University of Virginia */}
<div id="university-of-virginia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Virginia</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #260 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Charlottesville, Virginia</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1819</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strong programs in law, business, and education.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$50,000-$55,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 90+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Virginia Campus</span>
    </div>
  </div>
</div>

{/* University of Colorado Boulder */}
<div id="university-of-colorado-boulder" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Colorado Boulder</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #317 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Boulder, Colorado</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 37,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1876</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for aerospace engineering, physics, and environmental sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$40,000-$45,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Colorado Boulder Campus</span>
    </div>
  </div>
</div>

{/* University of Rochester */}
<div id="university-of-rochester" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Rochester</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #140 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Rochester, New York</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 25%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1850</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private research university with strengths in optics, music, and medical research.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$58,000-$62,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Rochester Campus</span>
    </div>
  </div>
</div>

{/* University of Arizona */}
<div id="university-of-arizona" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Arizona</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #293 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Tucson, Arizona</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 49,000+ (International: 9%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1885</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strong programs in astronomy, optical sciences, and agriculture.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$37,000-$41,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Arizona Campus</span>
    </div>
  </div>
</div>

{/* University of Iowa */}
<div id="university-of-iowa" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Iowa</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #497 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Iowa City, Iowa</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1847</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for its writing programs, health sciences, and engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$31,000-$35,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Iowa Campus</span>
    </div>
  </div>
</div>

{/* Texas A&M University */}
<div id="texas-am-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Texas A&M University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #154 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: College Station, Texas</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 70,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1876</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strong programs in engineering, agriculture, and veterinary medicine.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$40,000-$45,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Texas A&M University Campus</span>
    </div>
  </div>
</div>

{/* University of California, Riverside */}
<div id="uc-riverside" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of California, Riverside</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #404 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Riverside, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 26,000+ (International: 14%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1954</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in environmental sciences, engineering, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$43,000-$47,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of California, Riverside Campus</span>
    </div>
  </div>
</div>

{/* University of Connecticut */}
<div id="university-of-connecticut" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Connecticut</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #444 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Storrs, Connecticut</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 32,000+ (International: 10%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1881</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strong programs in business, engineering, and education.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$39,000-$43,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Connecticut Campus</span>
    </div>
  </div>
</div>

{/* Indiana University Bloomington */}
<div id="indiana-university-bloomington" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Indiana University Bloomington</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #339 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bloomington, Indiana</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 45,000+ (International: 11%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1820</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for its business, music, and informatics programs.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$38,000-$42,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Indiana University Bloomington Campus</span>
    </div>
  </div>
</div>

{/* University of Pittsburgh */}
<div id="university-of-pittsburgh" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Pittsburgh</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #224 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Pittsburgh, Pennsylvania</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 33,000+ (International: 10%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1787</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in health sciences, engineering, and philosophy.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$36,000-$40,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Pittsburgh Campus</span>
    </div>
  </div>
</div>

{/* University of Oregon */}
<div id="university-of-oregon" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Oregon</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #351 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Eugene, Oregon</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 23,000+ (International: 14%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1876</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for its programs in journalism, architecture, and environmental studies.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$39,000-$43,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Oregon Campus</span>
    </div>
  </div>
</div>

{/* Dartmouth College */}
<div id="dartmouth-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Dartmouth College</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #219 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hanover, New Hampshire</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,700+ (International: 15%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1769</p>
      </div>
      <p className="text-gray-300 mb-6">
        An Ivy League institution with strengths in liberal arts, business, and engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$60,000-$65,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Dartmouth College Campus</span>
    </div>
  </div>
</div>

{/* Vanderbilt University */}
<div id="vanderbilt-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Vanderbilt University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #218 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Nashville, Tennessee</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 13,000+ (International: 12%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1873</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private research university with strengths in medicine, education, and engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$56,000-$60,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Vanderbilt University Campus</span>
    </div>
  </div>
</div>

{/* University of Miami */}
<div id="university-of-miami" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Miami</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #278 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Coral Gables, Florida</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 15%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1925</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private research university with strengths in marine science, business, and medicine.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$55,000-$59,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Miami Campus</span>
    </div>
  </div>
</div>

{/* University of Notre Dame */}
<div id="university-of-notre-dame" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Notre Dame</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #226 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Notre Dame, Indiana</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 11%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1842</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private Catholic university with strengths in business, engineering, and liberal arts.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$58,000-$62,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Notre Dame Campus</span>
    </div>
  </div>
</div>

{/* University of Kansas */}
<div id="university-of-kansas" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Kansas</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #387 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Lawrence, Kansas</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 27,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1865</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strong programs in education, pharmacy, and journalism.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$28,000-$32,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Kansas Campus</span>
    </div>
  </div>
</div>

{/* DePaul University */}
<div id="depaul-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">DePaul University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #801-850 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chicago, Illinois</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1898</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private university with strong programs in business, computer science, and performing arts.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$41,000-$45,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">DePaul University Campus</span>
    </div>
  </div>
</div>

{/* Columbus State University */}
<div id="columbus-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Columbus State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Columbus, Georgia</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1958</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with programs in education, business, and nursing.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$21,000-$25,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Columbus State University Campus</span>
    </div>
  </div>
</div>

{/* University of Cincinnati */}
<div id="university-of-cincinnati" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Cincinnati</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #691-700 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cincinnati, Ohio</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 46,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1819</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in engineering, medicine, and design.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$26,000-$30,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Cincinnati Campus</span>
    </div>
  </div>
</div>

{/* Oregon State University */}
<div id="oregon-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Oregon State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #398 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Corvallis, Oregon</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 33,000+ (International: 10%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1868</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for forestry, engineering, and marine sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$32,000-$36,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Oregon State University Campus</span>
    </div>
  </div>
</div>

{/* University of New Haven */}
<div id="university-of-new-haven" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of New Haven</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: West Haven, Connecticut</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 9,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1920</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private university with strengths in criminal justice, engineering, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$40,000-$44,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of New Haven Campus</span>
    </div>
  </div>
</div>

{/* Monroe College */}
<div id="monroe-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Monroe College</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: New Rochelle, New York</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,000+ (International: 20%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1933</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private college focused on business, health, and culinary arts.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$18,000-$22,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 70+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Monroe College Campus</span>
    </div>
  </div>
</div>

{/* New York Institute of Technology */}
<div id="nyit" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">New York Institute of Technology</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #801-850 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Old Westbury, New York</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 15%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1955</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private university with strengths in engineering, architecture, and health professions.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$38,000-$42,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">New York Institute of Technology Campus</span>
    </div>
  </div>
</div>

{/* San Francisco State University */}
<div id="sfsu" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">San Francisco State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: San Francisco, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 37,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1899</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for creative writing, cinema, and ethnic studies.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">San Francisco State University Campus</span>
    </div>
  </div>
</div>

{/* California State University, Long Beach */}
<div id="csulb" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Long Beach</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Long Beach, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1949</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in business, engineering, and health sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Long Beach Campus</span>
    </div>
  </div>
</div>

{/* California State University, Fullerton */}
<div id="csuf" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Fullerton</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Fullerton, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for business, communications, and performing arts.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Fullerton Campus</span>
    </div>
  </div>
</div>

{/* California State University, Northridge */}
<div id="csun" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Northridge</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Northridge, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 39,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1958</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in engineering, music, and cinema and television arts.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Northridge Campus</span>
    </div>
  </div>
</div>

{/* California State University, Sacramento */}
<div id="csus" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Sacramento</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sacramento, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 32,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1947</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for public administration, criminal justice, and nursing.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Sacramento Campus</span>
    </div>
  </div>
</div>

{/* California State University, San Bernardino */}
<div id="csusb" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, San Bernardino</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: San Bernardino, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 4%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in nursing, social work, and business administration.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, San Bernardino Campus</span>
    </div>
  </div>
</div>

{/* California State University, Los Angeles */}
<div id="csula" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Los Angeles</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Los Angeles, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 32,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1947</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for nursing, criminal justice, and engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Los Angeles Campus</span>
    </div>
  </div>
</div>

{/* California State University, East Bay */}
<div id="csueb" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, East Bay</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hayward, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in business, education, and health sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, East Bay Campus</span>
    </div>
  </div>
</div>

{/* California State University, Monterey Bay */}
<div id="csumb" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Monterey Bay</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Seaside, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,000+ (International: 4%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1994</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university focused on marine science, business, and social sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Monterey Bay Campus</span>
    </div>
  </div>
</div>

{/* California State University, Stanislaus */}
<div id="csustan" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Stanislaus</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Turlock, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 3%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in education, business, and nursing.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Stanislaus Campus</span>
    </div>
  </div>
</div>

{/* California State University, Channel Islands */}
<div id="csuci" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Channel Islands</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Camarillo, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,000+ (International: 3%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2002</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university focused on liberal studies, business, and environmental science.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Channel Islands Campus</span>
    </div>
  </div>
</div>

{/* California State University, Dominguez Hills */}
<div id="csudh" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Dominguez Hills</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Carson, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 4%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1960</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in nursing, business, and public administration.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Dominguez Hills Campus</span>
    </div>
  </div>
</div>

{/* California State University, Bakersfield */}
<div id="csub" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Bakersfield</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bakersfield, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 3%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university focused on business, education, and public policy.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Bakersfield Campus</span>
    </div>
  </div>
</div>

{/* California State University, Chico */}
<div id="csuchico" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Chico</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chico, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 15,000+ (International: 4%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1887</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for agriculture, business, and communication studies.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Chico Campus</span>
    </div>
  </div>
</div>

{/* California State University, Fresno */}
<div id="csufresno" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, Fresno</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Fresno, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1911</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university with strengths in agriculture, criminology, and nursing.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, Fresno Campus</span>
    </div>
  </div>
</div>

{/* California State University, San Marcos */}
<div id="csusm" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State University, San Marcos</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: San Marcos, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 4%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1989</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university focused on business, education, and health sciences.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State University, San Marcos Campus</span>
    </div>
  </div>
</div>

{/* California State Polytechnic University, Pomona */}
<div id="cal-poly-pomona" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State Polytechnic University, Pomona</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #801-850 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Pomona, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 29,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1938</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public polytechnic university known for engineering, agriculture, and hospitality management.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State Polytechnic University, Pomona Campus</span>
    </div>
  </div>
</div>

{/* California State Polytechnic University, Humboldt */}
<div id="cal-poly-humboldt" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">California State Polytechnic University, Humboldt</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Arcata, California</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 7,000+ (International: 3%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1913</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public polytechnic university focused on environmental science, forestry, and oceanography.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$19,000-$23,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 61+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">California State Polytechnic University, Humboldt Campus</span>
    </div>
  </div>
</div>

{/* University of Alabama */}
<div id="university-of-alabama" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Alabama</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #901-950 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Tuscaloosa, Alabama</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 38,000+ (International: 3%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1831</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public university known for business, engineering, and communications.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$32,000-$36,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Alabama Campus</span>
    </div>
  </div>
</div>

{/* George Mason University */}
<div id="george-mason-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">George Mason University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #951-1000 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Fairfax, Virginia</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 39,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in law, economics, and information technology.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$31,000-$35,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">George Mason University Campus</span>
    </div>
  </div>
</div>

{/* University of Illinois Chicago */}
<div id="uic" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Illinois Chicago</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #317 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chicago, Illinois</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 34,000+ (International: 12%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1859</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in medicine, engineering, and architecture.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$30,000-$34,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Illinois Chicago Campus</span>
    </div>
  </div>
</div>

{/* Northeastern University */}
<div id="northeastern-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Northeastern University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #375 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Boston, Massachusetts</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 28,000+ (International: 25%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1898</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private research university known for co-op programs, engineering, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$58,000-$62,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 100+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Northeastern University Campus</span>
    </div>
  </div>
</div>

{/* University of South Florida */}
<div id="usf" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of South Florida</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Tampa, Florida</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 50,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1956</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in medicine, engineering, and marine science.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$17,000-$21,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of South Florida Campus</span>
    </div>
  </div>
</div>

{/* Florida International University */}
<div id="fiu" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Florida International University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #751-800 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Miami, Florida</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 56,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for hospitality, international relations, and engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$18,000-$22,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Florida International University Campus</span>
    </div>
  </div>
</div>

{/* University of Central Florida */}
<div id="ucf" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Central Florida</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Orlando, Florida</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 70,000+ (International: 7%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1963</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in engineering, hospitality, and digital media.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$22,000-$26,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Central Florida Campus</span>
    </div>
  </div>
</div>

{/* University of Houston */}
<div id="university-of-houston" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Houston</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #551-600 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Houston, Texas</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 47,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1927</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for energy, engineering, and hotel management.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$26,000-$30,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Houston Campus</span>
    </div>
  </div>
</div>

{/* University of Oklahoma */}
<div id="university-of-oklahoma" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Oklahoma</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #701-750 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Norman, Oklahoma</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 28,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1890</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in petroleum engineering, meteorology, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$28,000-$32,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Oklahoma Campus</span>
    </div>
  </div>
</div>

{/* Oklahoma State University */}
<div id="oklahoma-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Oklahoma State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001-1200 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Stillwater, Oklahoma</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1890</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for agriculture, engineering, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$25,000-$29,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Oklahoma State University Campus</span>
    </div>
  </div>
</div>

{/* University of Nebraska-Lincoln */}
<div id="university-of-nebraska-lincoln" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Nebraska-Lincoln</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601-650 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Lincoln, Nebraska</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1869</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in agriculture, engineering, and journalism.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$27,000-$31,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 70+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Nebraska-Lincoln Campus</span>
    </div>
  </div>
</div>

{/* Iowa State University */}
<div id="iowa-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Iowa State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #401 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Ames, Iowa</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 13%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1858</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for agriculture, engineering, and veterinary medicine.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$27,000-$31,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 70+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Iowa State University Campus</span>
    </div>
  </div>
</div>

{/* University of Utah */}
<div id="university-of-utah" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Utah</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #=222 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Salt Lake City, Utah</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 8%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1850</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in computer science, medicine, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$30,000-$34,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Utah Campus</span>
    </div>
  </div>
</div>

{/* University of Nevada, Las Vegas */}
<div id="unlv" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Nevada, Las Vegas</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #951-1000 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Las Vegas, Nevada</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for hospitality, business, and entertainment engineering.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$25,000-$29,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Nevada, Las Vegas Campus</span>
    </div>
  </div>
</div>

{/* University of Nevada, Reno */}
<div id="unr" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Nevada, Reno</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #901-950 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Reno, Nevada</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 5%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1874</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in mining engineering, journalism, and medicine.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$25,000-$29,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 70+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Nevada, Reno Campus</span>
    </div>
  </div>
</div>

{/* University of Idaho */}
<div id="university-of-idaho" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Idaho</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001-1200 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Moscow, Idaho</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1889</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public land-grant research university known for agriculture, engineering, and law.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$27,000-$31,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Idaho Campus</span>
    </div>
  </div>
</div>

{/* Boise State University */}
<div id="boise-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Boise State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Boise, Idaho</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 26,000+ (International: 4%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1932</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public metropolitan research university with strengths in geophysics, public health, and materials science.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$25,000-$29,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 68+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Boise State University Campus</span>
    </div>
  </div>
</div>

{/* Washington State University */}
<div id="washington-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Washington State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #401 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Pullman, Washington</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 9%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1890</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university known for agriculture, veterinary medicine, and pharmacy.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$28,000-$32,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 79+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Washington State University Campus</span>
    </div>
  </div>
</div>

{/* Portland State University */}
<div id="portland-state-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">Portland State University</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201-1400 Worldwide (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Portland, Oregon</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 6%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1946</p>
      </div>
      <p className="text-gray-300 mb-6">
        A public research university with strengths in urban planning, engineering, and social work.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$29,000-$33,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 71+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">Portland State University Campus</span>
    </div>
  </div>
</div>

{/* University of Portland */}
<div id="university-of-portland" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    <div>
      <h3 className="text-3xl font-bold text-white mb-4">University of Portland</h3>
      <div className="space-y-3 text-gray-300 mb-6">
        <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: Not Ranked (QS 2026)</p>
        <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Portland, Oregon</p>
        <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 4,000+ (International: 3%)</p>
        <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1901</p>
      </div>
      <p className="text-gray-300 mb-6">
        A private Catholic university with strengths in engineering, nursing, and business.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
          <p className="text-white">$50,000-$54,000/year</p>
        </div>
        <div>
          <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
          <p className="text-white">TOEFL 80+, SAT/ACT optional</p>
        </div>
      </div>
      <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
        Get Free Consultation
      </Button>
    </div>
    <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
      <span className="text-gray-400">University of Portland Campus</span>
    </div>
  </div>
</div>
</div>
</div>
</section>

      {/* Why Study in USA - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in USA</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              American degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a U.S. education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In USA you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as Harvard University, Stanford University, & MIT. 
                  Almost 200+ ranked universities are based in USA.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in USA has always been center point attraction international students. Various 
                  registered bodies independent learning American universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Diverse and innovative:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students USA has ranked as top diverse and innovative country for international students. Most public universities charge competitive tuition fees while providing world-class education quality.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Career opportunities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  USA is known worldwide for its innovation and job market. Many multinational companies have their headquarters in USA, providing excellent internship and job opportunities for international students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Tuition Fees */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in USA for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in USA. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program USA varies from 
                $25,000-$45,000/year for public universities. The average tuition fees of postgraduate programs in USA varies from $25,000-$50,000/year. Private universities may charge $40,000-$60,000/year.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in USA (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per U.S. visa, an international student, you are allowed work 20 hours per week on-campus during academic terms or full-time during breaks. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in USA for international student is $15-25/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in USA for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per U.S. authorities, average living cost for an international student in USA depends on the city you are living in, the 
                living cost in New York/Los Angeles is different as compared to other cities.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• $1,200-$2,000/month for courses in New York/Los Angeles (10 month)</li>
                <li>• $800-$1,500/month for courses in other cities (10 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application to U.S. consulate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in USA from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in USA with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best U.S. universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "U.S. student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-2xl">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default USAPage;
