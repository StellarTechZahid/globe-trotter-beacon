import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CTASection from '@/components/CTASection';
import QuickNavigation from '@/components/QuickNavigation';
import { GraduationCap, Globe, Briefcase, MapPin, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UKPage = () => {
  const quickLinks = [
    { name: "Imperial College London", id: "imperial-college-london" },
    { name: "University of Oxford", id: "university-of-oxford" },
    { name: "University of Cambridge", id: "university-of-cambridge" },
    { name: "UCL (University College London)", id: "ucl-university-college-london" },
    { name: "University of Edinburgh", id: "university-of-edinburgh" },
    { name: "University of Manchester", id: "university-of-manchester" },
    { name: "King's College London", id: "kings-college-london" },
    { name: "London School of Economics and Political Science", id: "london-school-of-economics-and-political-science" },
    { name: "University of Bristol", id: "university-of-bristol" },
    { name: "University of Warwick", id: "university-of-warwick" },
    { name: "University of Glasgow", id: "university-of-glasgow" },
    { name: "University of Southampton", id: "university-of-southampton" },
    { name: "University of Leeds", id: "university-of-leeds" },
    { name: "University of Birmingham", id: "university-of-birmingham" },
    { name: "University of Durham", id: "university-of-durham" },
    { name: "University of Sheffield", id: "university-of-sheffield" },
    { name: "University of St Andrews", id: "university-of-st-andrews" },
    { name: "University of Nottingham", id: "university-of-nottingham" },
    { name: "Newcastle University", id: "newcastle-university" },
    { name: "Queen Mary University of London", id: "queen-mary-university-of-london" },
    { name: "University of Exeter", id: "university-of-exeter" },
    { name: "University of York", id: "university-of-york" },
    { name: "University of Liverpool", id: "university-of-liverpool" },
    { name: "University of Leicester", id: "university-of-leicester" },
    { name: "University of Reading", id: "university-of-reading" },
    { name: "University of Sussex", id: "university-of-sussex" },
    { name: "University of Bath", id: "university-of-bath" },
    { name: "University of Aberdeen", id: "university-of-aberdeen" },
    { name: "Queen's University Belfast", id: "queens-university-belfast" },
    { name: "University of Surrey", id: "university-of-surrey" },
    { name: "University of Strathclyde", id: "university-of-strathclyde" },
    { name: "University of Dundee", id: "university-of-dundee" },
    { name: "Heriot-Watt University", id: "heriot-watt-university" },
    { name: "Royal Holloway, University of London", id: "royal-holloway-university-of-london" },
    { name: "University of East Anglia", id: "university-of-east-anglia" },
    { name: "Bangor University", id: "bangor-university" },
    { name: "University of Stirling", id: "university-of-stirling" },
    { name: "Swansea University", id: "swansea-university" },
    { name: "University of Kent", id: "university-of-kent" },
    { name: "SOAS University of London", id: "soas-university-of-london" },
    { name: "University of Essex", id: "university-of-essex" },
    { name: "University of Portsmouth", id: "university-of-portsmouth" },
    { name: "Northumbria University", id: "northumbria-university" },
    { name: "University of Hull", id: "university-of-hull" },
    { name: "Plymouth University", id: "plymouth-university" },
    { name: "Coventry University", id: "coventry-university" },
    { name: "University of Greenwich", id: "university-of-greenwich" },
    { name: "University of Bradford", id: "university-of-bradford" },
    { name: "University of Central Lancashire", id: "university-of-central-lancashire" },
    { name: "University of Huddersfield", id: "university-of-huddersfield" },
    { name: "University of Westminster", id: "university-of-westminster" },
    { name: "Bournemouth University", id: "bournemouth-university" },
    { name: "Kingston University", id: "kingston-university" },
    { name: "London South Bank University", id: "london-south-bank-university" },
    { name: "Teesside University", id: "teesside-university" },
    { name: "Goldsmiths, University of London", id: "goldsmiths-university-of-london" },
    { name: "Cardiff Metropolitan University", id: "cardiff-metropolitan-university" },
    { name: "Middlesex University", id: "middlesex-university" },
    { name: "Oxford Brookes University", id: "oxford-brookes-university" },
    { name: "University of Sunderland", id: "university-of-sunderland" },
    { name: "University of Hertfordshire", id: "university-of-hertfordshire" },
    { name: "University of the West of England", id: "university-of-the-west-of-england" },
    { name: "University of Chester", id: "university-of-chester" },
    { name: "Anglia Ruskin University", id: "anglia-ruskin-university" },
    { name: "University of Salford", id: "university-of-salford" },
    { name: "Sheffield Hallam University", id: "sheffield-hallam-university" },
    { name: "Leeds Beckett University", id: "leeds-beckett-university" },
    { name: "University of Roehampton", id: "university-of-roehampton" },
    { name: "University of Derby", id: "university-of-derby" },
    { name: "University of East London", id: "university-of-east-london" },
    { name: "University of Bedfordshire", id: "university-of-bedfordshire" },
    { name: "University of Northampton", id: "university-of-northampton" },
    { name: "University of Buckingham", id: "university-of-buckingham" },
    { name: "University of Bolton", id: "university-of-bolton" },
    { name: "London Metropolitan University", id: "london-metropolitan-university" },
    { name: "University of Cumbria", id: "university-of-cumbria" },
    { name: "University of Worcester", id: "university-of-worcester" },
    { name: "University of Gloucestershire", id: "university-of-gloucestershire" },
    { name: "University of Suffolk", id: "university-of-suffolk" },
    { name: "University of Winchester", id: "university-of-winchester" },
    { name: "University of Chichester", id: "university-of-chichester" },
    { name: "University of the Arts London", id: "university-of-the-arts-london" },
    { name: "Royal Academy of Music", id: "royal-academy-of-music" },
    { name: "Royal College of Music", id: "royal-college-of-music" },
    { name: "Guildhall School of Music & Drama", id: "guildhall-school-of-music-drama" },
    { name: "Royal Central School of Speech and Drama", id: "royal-central-school-of-speech-and-drama" },
    { name: "Royal Northern College of Music", id: "royal-northern-college-of-music" },
    { name: "Trinity Laban Conservatoire of Music and Dance", id: "trinity-laban-conservatoire-of-music-and-dance" },
    { name: "Royal Veterinary College", id: "royal-veterinary-college" },
    { name: "Courtauld Institute of Art", id: "courtauld-institute-of-art" },
    { name: "Glasgow School of Art", id: "glasgow-school-of-art" },
    { name: "Liverpool Institute for Performing Arts", id: "liverpool-institute-for-performing-arts" },
    { name: "Rose Bruford College", id: "rose-bruford-college" },
    { name: "LAMDA", id: "lamda" },
    { name: "Royal Agricultural University", id: "royal-agricultural-university" },
    { name: "Hartpury University", id: "hartpury-university" },
    { name: "Bishop Grosseteste University", id: "bishop-grosseteste-university" },
    { name: "Newman University", id: "newman-university" },
    { name: "St Mary's University", id: "st-marys-university" },
    { name: "Leeds Trinity University", id: "leeds-trinity-university" },
    { name: "Plymouth Marjon University", id: "plymouth-marjon-university" },
    { name: "Buckinghamshire New University", id: "buckinghamshire-new-university" },
    { name: "University of West London", id: "university-of-west-london" },
    { name: "Staffordshire University", id: "staffordshire-university" },
    { name: "Solent University", id: "solent-university" },
    { name: "Leeds Arts University", id: "leeds-arts-university" },
    { name: "Norwich University of the Arts", id: "norwich-university-of-the-arts" },
    { name: "Arts University Bournemouth", id: "arts-university-bournemouth" },
    { name: "Falmouth University", id: "falmouth-university" },
    { name: "University for the Creative Arts", id: "university-for-the-creative-arts" },
    { name: "Arts University Plymouth", id: "arts-university-plymouth" },
    { name: "Writtle University College", id: "writtle-university-college" },
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `ur(https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1920&h=1080&fit=crop)` 
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
              Study in the UK
            </h1>
            <p className="text-2xl mb-8 text-gray-200 animate-fade-in delay-200">
              Transform your future at world's top universities in the United Kingdom. Start your British education journey today with Abroad Academics - your trusted study abroad consultants since 2023!
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
            <h2 className="text-4xl font-bold text-white mb-8">Your Pathway to UK Education Excellence</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              The United Kingdom is home to some of the world's most prestigious universities and offers unparalleled opportunities for academic and personal growth. With cutting-edge research facilities, innovative teaching methods, and a diverse student community, studying in the UK opens doors to endless possibilities. As Pakistan's leading study abroad consultants established in 2023, Abroad Academics will guide you through every step of your journey to achieve your British dream with our comprehensive overseas education consultancy services.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose UK Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Why Choose the UK for International Education?</h2>
            <p className="text-xl text-gray-300">Discover why millions of international students choose United Kingdom for their higher education</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">World's Best Universities</h3>
              <p className="text-gray-300">
                Home to Oxford, Cambridge, Imperial College, and many other top-ranked institutions that lead in research and innovation. Study abroad in UK with the best educational consultants.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Rich Cultural Heritage</h3>
              <p className="text-gray-300">
                Experience the birthplace of English language and culture with access to historic cities and major cultural institutions. Best study abroad opportunities for Pakistani students.
              </p>
            </div>
            
            <div className="text-center bg-black rounded-lg p-8 border border-orange-500">
              <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Excellent Career Prospects</h3>
              <p className="text-gray-300">
                Access to Graduate Route visa and excellent career prospects in Europe and globally. Top study abroad consultants ensure your success.
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
            <h2 className="text-4xl font-bold text-orange-500 mb-4">Top UK Universities for International Students</h2>
            <p className="text-gray-300">Explore United Kingdom's most prestigious universities with our expert guidance</p>
          </div>

          <div className="space-y-12">
            {/* Imperial College London */}
            <div id="imperial-college-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Imperial College London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #2 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 59%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1907</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The UK's leading institution for science, technology, engineering, and medicine with groundbreaking research.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£32,000-£46,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Imperial College London Campus</span>
                </div>
              </div>
            </div>

            {/* University of Oxford */}
            <div id="university-of-oxford" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Oxford Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Oxford</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #3 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Oxford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 40%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1096</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    The oldest university in the English-speaking world, known for producing leaders in various fields.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£28,000-£39,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 7.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Cambridge */}
            <div id="university-of-cambridge" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Cambridge</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #5 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cambridge, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 23,000+ (International: 38%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1209</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Renowned for innovation, research excellence, and academic tradition.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£24,000-£37,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 7.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Cambridge Campus</span>
                </div>
              </div>
            </div>

            {/* UCL (University College London) */}
            <div id="ucl-university-college-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">UCL Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">UCL (University College London)</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #9 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 42,000+ (International: 53%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1826</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading multidisciplinary university with diverse programs and strong research opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£25,000-£35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Edinburgh */}
            <div id="university-of-edinburgh" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Edinburgh</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #22 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Edinburgh, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 44%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1583</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Ancient university with excellence in humanities, sciences, and medicine.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£23,000-£35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Edinburgh Campus</span>
                </div>
              </div>
            </div>

            {/* University of Manchester */}
            <div id="university-of-manchester" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Manchester Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Manchester</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #34 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Manchester, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 40,000+ (International: 42%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2004 (merger)</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Largest single-site university in the UK, known for research and innovation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* King's College London */}
            <div id="kings-college-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">King's College London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #40 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 31,000+ (International: 46%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1829</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    World-leading research university with strengths in law, health, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 7.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">King's College London Campus</span>
                </div>
              </div>
            </div>

            {/* London School of Economics and Political Science */}
            <div id="london-school-of-economics-and-political-science" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">London School of Economics and Political Science Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">London School of Economics and Political Science</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #50 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 71%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1895</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    World-renowned for social sciences, economics, and politics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£22,000-£26,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 7.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Bristol */}
            <div id="university-of-bristol" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bristol</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #54 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bristol, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 28%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1909</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Research-intensive university with strengths in sciences and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£30,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bristol Campus</span>
                </div>
              </div>
            </div>

            {/* University of Warwick */}
            <div id="university-of-warwick" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Warwick Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Warwick</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #67 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Coventry, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 27,000+ (International: 43%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for business, economics, and social sciences with strong employability.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£22,000-£29,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Glasgow */}
            <div id="university-of-glasgow" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Glasgow</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #78 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Glasgow, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 41%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1451</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Ancient university with excellence in medicine, veterinary, and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£19,000-£28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Glasgow Campus</span>
                </div>
              </div>
            </div>

            {/* University of Southampton */}
            <div id="university-of-southampton" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Southampton Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Southampton</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #80 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Southampton, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 36%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1952</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Research-intensive university with strengths in engineering and health sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£19,000-£25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Leeds */}
            <div id="university-of-leeds" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Leeds</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #82 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Leeds, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 38,000+ (International: 36%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1904</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Vibrant university with excellence in business, engineering, and arts.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Leeds Campus</span>
                </div>
              </div>
            </div>

            {/* University of Birmingham */}
            <div id="university-of-birmingham" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Birmingham Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Birmingham</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #84 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Birmingham, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 34,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1900</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Global university with strong research in sciences and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£19,000-£28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Durham */}
            <div id="university-of-durham" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Durham</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #89 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Durham, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 32%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1832</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Collegiate university with excellence in theology, archaeology, and sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£21,000-£28,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Durham Campus</span>
                </div>
              </div>
            </div>

            {/* University of Sheffield */}
            <div id="university-of-sheffield" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Sheffield Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Sheffield</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #105 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sheffield, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 37%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1905</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Research university with strong engineering and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£19,000-£25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of St Andrews */}
            <div id="university-of-st-andrews" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of St Andrews</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #104 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: St Andrews, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 48%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1413</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Scotland's oldest university, known for international relations and philosophy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£28,000-£35,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of St Andrews Campus</span>
                </div>
              </div>
            </div>

            {/* University of Nottingham */}
            <div id="university-of-nottingham" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Nottingham Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Nottingham</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #108 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Nottingham, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 34,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1948</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Global university with campuses in UK, China, and Malaysia, strong in pharmacy and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£19,000-£27,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Newcastle University */}
            <div id="newcastle-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Newcastle University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #129 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Newcastle upon Tyne, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 28,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1834</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Research university with strengths in medicine, engineering, and arts.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£24,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Newcastle University Campus</span>
                </div>
              </div>
            </div>

            {/* Queen Mary University of London */}
            <div id="queen-mary-university-of-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Queen Mary University of London Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Queen Mary University of London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #145 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 26,000+ (International: 45%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1887</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading university in medicine, law, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£26,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Exeter */}
            <div id="university-of-exeter" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Exeter</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #169 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Exeter, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1955</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Research university with strengths in climate change and health sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£26,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Exeter Campus</span>
                </div>
              </div>
            </div>

            {/* University of York */}
            <div id="university-of-york" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of York Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of York</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #184 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: York, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 27%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1963</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for archaeology, history, and sciences in a historic city.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£23,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Liverpool */}
            <div id="university-of-liverpool" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Liverpool</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #190 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Liverpool, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 22,000+ (International: 35%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1881</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Member of Russell Group, strong in architecture and veterinary science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£25,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Liverpool Campus</span>
                </div>
              </div>
            </div>

            {/* University of Leicester */}
            <div id="university-of-leicester" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Leicester Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Leicester</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #272 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Leicester, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1957</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for space science and genetics research.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£21,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Reading */}
            <div id="university-of-reading" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Reading</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #174 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Reading, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1926</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in agriculture, meteorology, and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Reading Campus</span>
                </div>
              </div>
            </div>

            {/* University of Sussex */}
            <div id="university-of-sussex" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Sussex Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Sussex</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #246 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Brighton, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 38%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1961</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for development studies and innovation.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Bath */}
            <div id="university-of-bath" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bath</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #150 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bath, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 32%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for management, engineering, and architecture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£26,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bath Campus</span>
                </div>
              </div>
            </div>

            {/* University of Aberdeen */}
            <div id="university-of-aberdeen" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Aberdeen Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Aberdeen</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #236 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Aberdeen, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 15,000+ (International: 45%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1495</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Ancient university with strengths in energy and life sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£24,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Queen's University Belfast */}
            <div id="queens-university-belfast" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Queen's University Belfast</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #217 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Belfast, Northern Ireland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1845</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Leading university in Northern Ireland with strong medicine and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£23,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Queen's University Belfast Campus</span>
                </div>
              </div>
            </div>

            {/* University of Surrey */}
            <div id="university-of-surrey" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Surrey Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Surrey</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #262 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Guildford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 33%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for hospitality, engineering, and space science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Strathclyde */}
            <div id="university-of-strathclyde" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Strathclyde</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #281 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Glasgow, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 23,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1796</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Technological university with strong business and engineering programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Strathclyde Campus</span>
                </div>
              </div>
            </div>

            {/* University of Dundee */}
            <div id="university-of-dundee" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Dundee Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Dundee</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #419 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Dundee, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 24%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1881</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for art, design, and life sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£19,000-£24,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Heriot-Watt University */}
            <div id="heriot-watt-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Heriot-Watt University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #256 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Edinburgh, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 31%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1821</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Global university with campuses worldwide, strong in engineering and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£23,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Heriot-Watt University Campus</span>
                </div>
              </div>
            </div>

            {/* Royal Holloway, University of London */}
            <div id="royal-holloway-university-of-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Royal Holloway, University of London Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Royal Holloway, University of London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #412 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Egham, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 35%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1886</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for arts, humanities, and management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£23,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of East Anglia */}
            <div id="university-of-east-anglia" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of East Anglia</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #332 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Norwich, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 19%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1963</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Famous for creative writing and environmental sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of East Anglia Campus</span>
                </div>
              </div>
            </div>

            {/* Bangor University */}
            <div id="bangor-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Bangor University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Bangor University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #481 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bangor, Wales</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 27%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1884</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for marine biology and forestry in a scenic location.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£19,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Stirling */}
            <div id="university-of-stirling" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Stirling</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #453 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Stirling, Scotland</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for sports science and aquaculture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Stirling Campus</span>
                </div>
              </div>
            </div>

            {/* Swansea University */}
            <div id="swansea-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Swansea University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Swansea University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #298 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Swansea, Wales</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1920</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Coastal university strong in engineering and computer science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Kent */}
            <div id="university-of-kent" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Kent</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #375 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Canterbury, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 30%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1965</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for social sciences and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Kent Campus</span>
                </div>
              </div>
            </div>

            {/* SOAS University of London */}
            <div id="soas-university-of-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">SOAS University of London Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">SOAS University of London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #511 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 5,000+ (International: 53%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1916</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in Asia, Africa, and Middle East studies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£20,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Essex */}
            <div id="university-of-essex" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Essex</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #472 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Colchester, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 40%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1964</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for human rights and social sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£22,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Essex Campus</span>
                </div>
              </div>
            </div>

            {/* University of Portsmouth */}
            <div id="university-of-portsmouth" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Portsmouth Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Portsmouth</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #502 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Portsmouth, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for creative industries and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£19,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Northumbria University */}
            <div id="northumbria-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Northumbria University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #535 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Newcastle upon Tyne, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 32,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Modern university with strong design and business programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£19,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Northumbria University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Greenwich */}
            <div id="university-of-greenwich" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Greenwich Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Greenwich</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #998 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 35%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1890</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for architecture, business, and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Bradford */}
            <div id="university-of-bradford" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bradford</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #641 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bradford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1966</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in peace studies and pharmacy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bradford Campus</span>
                </div>
              </div>
            </div>

            {/* University of Central Lancashire */}
            <div id="university-of-central-lancashire" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Central Lancashire Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Central Lancashire</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #901 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Preston, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 35,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for journalism and fashion.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Huddersfield */}
            <div id="university-of-huddersfield" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Huddersfield</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #567 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Huddersfield, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 19%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in music and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Huddersfield Campus</span>
                </div>
              </div>
            </div>

            {/* University of Westminster */}
            <div id="university-of-westminster" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Westminster Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Westminster</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #711 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 19,000+ (International: 45%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1838</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for media, arts, and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Bournemouth University */}
            <div id="bournemouth-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Bournemouth University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #731 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bournemouth, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 19%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in media and tourism.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Bournemouth University Campus</span>
                </div>
              </div>
            </div>

            {/* Kingston University */}
            <div id="kingston-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Kingston University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Kingston University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #601 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Kingston upon Thames, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for art, design, and fashion.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* London South Bank University */}
            <div id="london-south-bank-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">London South Bank University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #851 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 17%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1892</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Practical-focused university with strong engineering and health programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">London South Bank University Campus</span>
                </div>
              </div>
            </div>

            {/* Teesside University */}
            <div id="teesside-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Teesside University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Teesside University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Middlesbrough, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for animation and games design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Goldsmiths, University of London */}
            <div id="goldsmiths-university-of-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Goldsmiths, University of London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #593 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 10,000+ (International: 37%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1904</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in arts, design, and humanities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Goldsmiths, University of London Campus</span>
                </div>
              </div>
            </div>

            {/* Cardiff Metropolitan University */}
            <div id="cardiff-metropolitan-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Cardiff Metropolitan University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Cardiff Metropolitan University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cardiff, Wales</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 25%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1996</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for sports science and art.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Middlesex University */}
            <div id="middlesex-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Middlesex University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #681 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 45%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in business, media, and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Middlesex University Campus</span>
                </div>
              </div>
            </div>

            {/* Oxford Brookes University */}
            <div id="oxford-brookes-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Oxford Brookes University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Oxford Brookes University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #413 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Oxford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 18,000+ (International: 18%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for architecture and hospitality management.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Sunderland */}
            <div id="university-of-sunderland" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Sunderland</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sunderland, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 36%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in pharmacy and education.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Sunderland Campus</span>
                </div>
              </div>
            </div>

            {/* University of Hertfordshire */}
            <div id="university-of-hertfordshire" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Hertfordshire Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Hertfordshire</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #851 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Hatfield, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 25,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for film, media, and computer science.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of the West of England */}
            <div id="university-of-the-west-of-england" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of the West of England</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #741 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bristol, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in robotics and creative media.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of the West of England Campus</span>
                </div>
              </div>
            </div>

            {/* University of Chester */}
            <div id="university-of-chester" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Chester Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Chester</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1201 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chester, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 8%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1839</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for teacher training and health sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Anglia Ruskin University */}
            <div id="anglia-ruskin-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Anglia Ruskin University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #501 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Cambridge, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 39,000+ (International: 21%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for optometry and architecture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Anglia Ruskin University Campus</span>
                </div>
              </div>
            </div>

            {/* University of Salford */}
            <div id="university-of-salford" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Salford Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Salford</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #851 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Salford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 21,000+ (International: 14%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1967</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in media and built environment.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£15,000-£17,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Sheffield Hallam University */}
            <div id="sheffield-hallam-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Sheffield Hallam University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Sheffield, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 30,000+ (International: 14%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for sport science and nursing.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Sheffield Hallam University Campus</span>
                </div>
              </div>
            </div>

            {/* Leeds Beckett University */}
            <div id="leeds-beckett-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Leeds Beckett University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Leeds Beckett University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Leeds, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 24,000+ (International: 9%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in sport, tourism, and business.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Roehampton */}
            <div id="university-of-roehampton" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Roehampton</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #801 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2004</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for dance and education.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Roehampton Campus</span>
                </div>
              </div>
            </div>

            {/* University of Derby */}
            <div id="university-of-derby" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Derby Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Derby</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Derby, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 12%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in art and engineering.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of East London */}
            <div id="university-of-east-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of East London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 17,000+ (International: 26%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for psychology and architecture.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of East London Campus</span>
                </div>
              </div>
            </div>

            {/* University of Bedfordshire */}
            <div id="university-of-bedfordshire" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bedfordshire Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bedfordshire</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Luton, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 46%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2006</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for business and media studies.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Northampton */}
            <div id="university-of-northampton" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Northampton</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Northampton, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 14,000+ (International: 29%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2005</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for leather technology and social enterprise.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Northampton Campus</span>
                </div>
              </div>
            </div>

            {/* University of Buckingham */}
            <div id="university-of-buckingham" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Buckingham Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Buckingham</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Buckingham, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 3,000+ (International: 48%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1976</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Private university known for accelerated degrees.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£34,000-£38,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.5+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of Bolton */}
            <div id="university-of-bolton" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of Bolton</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bolton, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 8,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2004</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for engineering and health sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£12,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of Bolton Campus</span>
                </div>
              </div>
            </div>

            {/* London Metropolitan University */}
            <div id="london-metropolitan-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">London Metropolitan University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">London Metropolitan University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #901 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 12,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2002</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Diverse university with strong architecture and law programs.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* University of West London */}
            <div id="university-of-west-london" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University of West London</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: London, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 20,000+ (International: 20%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for music and hospitality.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University of West London Campus</span>
                </div>
              </div>
            </div>

            {/* Staffordshire University */}
            <div id="staffordshire-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Staffordshire University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Staffordshire University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: #1001 Worldwide (QS 2025)</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Stoke-on-Trent, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 16,000+ (International: 16%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1992</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Known for computing and law.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Solent University */}
            <div id="solent-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Solent University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Southampton, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 11,000+ (International: 22%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2005</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Strong in maritime, media, and fashion.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£14,000-£16,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Solent University Campus</span>
                </div>
              </div>
            </div>

            {/* Leeds Arts University */}
            <div id="leeds-arts-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Leeds Arts University Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Leeds Arts University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Leeds, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,000+ (International: 10%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1846</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in art and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Norwich University of the Arts */}
            <div id="norwich-university-of-the-arts" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Norwich University of the Arts</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Norwich, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,500+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1845</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in arts, design, and media.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Norwich University of the Arts Campus</span>
                </div>
              </div>
            </div>

            {/* Arts University Bournemouth */}
            <div id="arts-university-bournemouth" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Arts University Bournemouth Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Arts University Bournemouth</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Bournemouth, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 3,000+ (International: 15%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1880</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in creative arts and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£18,000-£20,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Falmouth University */}
            <div id="falmouth-university" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Falmouth University</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Falmouth, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,000+ (International: 6%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1902</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in creative industries.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£17,000-£19,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Falmouth University Campus</span>
                </div>
              </div>
            </div>

            {/* University for the Creative Arts */}
            <div id="university-for-the-creative-arts" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">University for the Creative Arts Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">University for the Creative Arts</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Farnham, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 6,000+ (International: 32%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 2005</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in art, design, architecture, media, and performing arts.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>

            {/* Arts University Plymouth */}
            <div id="arts-university-plymouth" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Arts University Plymouth</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Plymouth, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 2,000+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1856</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in creative arts and design.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£16,000-£18,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Arts University Plymouth Campus</span>
                </div>
              </div>
            </div>

            {/* Writtle University College */}
            <div id="writtle-university-college" className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="h-64 bg-gray-700 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Writtle University College Campus</span>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Writtle University College</h3>
                  <div className="space-y-3 text-gray-300 mb-6">
                    <p className="flex items-center"><Award className="h-5 w-5 text-orange-500 mr-2" />Ranking: N/A</p>
                    <p className="flex items-center"><MapPin className="h-5 w-5 text-orange-500 mr-2" />Location: Chelmsford, England</p>
                    <p className="flex items-center"><Users className="h-5 w-5 text-orange-500 mr-2" />Students: 800+ (International: 5%)</p>
                    <p className="flex items-center"><Clock className="h-5 w-5 text-orange-500 mr-2" />Established: 1893</p>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Specialist in agriculture and animal sciences.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Tuition Fee</h4>
                      <p className="text-white">£13,000-£15,000/year</p>
                    </div>
                    <div>
                      <h4 className="text-orange-500 font-semibold mb-2">Requirements</h4>
                      <p className="text-white">A-levels, IELTS 6.0+</p>
                    </div>
                  </div>
                  <Button onClick={scrollToConsultation} className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">
                    Get Free Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in the UK - Detailed Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-orange-500 mb-8 text-center">Why Study in the UK</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              UK degrees give you more than an academic experience which helps you in your real-world experiences. 
              Wherever you go in the world, a UK education opens the door of your career and practical life ahead.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Ranked universities:</h3>
                <p className="text-gray-300 leading-relaxed">
                  In UK you can find number of internationally ranked universities as compared to other destinations. It has the 
                  highest number of ranked institutes such as University of Cambridge, University of Oxford, & Imperial College. 
                  Almost 75+ ranked universities are based in UK.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Education quality:</h3>
                <p className="text-gray-300 leading-relaxed">
                  The standard of education in UK has always been center point attraction international students. Various 
                  registered bodies independent learning UK universities take more practical approach rather than lecture-based 
                  learning for international students. Students are expected to take a proactive role and applying the skills in the 
                  real-world scenarios. This allows deep understanding of your course which eventually benefits you in long term.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• Multicultural and secure:</h3>
                <p className="text-gray-300 leading-relaxed">
                  For international students The diversity is reflected in every aspect of the UK culture has ranked as top 
                  multicultural and secure country for international students. The diversity is reflected in every aspect of the UK 
                  culture, food, literature, arts, and music.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-500 mb-3">• No language barrier:</h3>
                <p className="text-gray-300 leading-relaxed">
                  One of the biggest challenges for any international student is the local language of that country. In UK, English is 
                  the official language and all the courses are being taught in English, making it easier for students from every 
                  part of the globe to study in the UK.
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
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Average Tuition Fees in UK for International Students</h2>
              <p className="text-gray-300 leading-relaxed">
                The locals pay a different fee as compared to international students planning to study in UK. tuition fees vary 
                depending on the university and course. The average tuition fees of undergraduate program UK varies from 
                £20,000-£35,000/year. The average tuition fees of postgraduate programs in UK varies from £15,000-£30,000/year. There are various options of distance learning programs where online study programs are majorly 
                available in UK.
              </p>
            </div>

            {/* Working Hours */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Working Hours Allowed in UK (Student Visa)</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per UK visa, an international student, you are allowed work 20 hours/week. Working more than the allowed 
                hours can strictly affect your visa status resulting in cancelling your study permit.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Average wage rates in UK for international student is £10-15/hour.
              </p>
            </div>

            {/* Living Cost */}
            <div>
              <h2 className="text-3xl font-bold text-orange-500 mb-6">Living Cost in UK for International Student</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                As per the UKVI, average living cost for an international student in UK depends on the city you are living in, the 
                living cost in London is different as compared to outside London.
              </p>
              <ul className="text-gray-300 space-y-2 mb-4">
                <li>• £1334 per month for courses in London (9 month)</li>
                <li>• £1023 per month for courses outside London (9 month)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                If you have a student loan or a government sponsorship, you will need to submit the evidence while submitting 
                your visa application in UKVI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Abroad Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-orange-500 mb-6">Study in UK from Pakistan - Step by Step Process</h2>
            <p className="text-xl text-gray-300">Our proven process for studying abroad in UK with Abroad Academics - Pakistan's most trusted study abroad consultants since 2023</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Free Consultation", desc: "Get expert guidance from top study abroad consultants in Pakistan established in 2023" },
              { step: "2", title: "University Selection", desc: "Choose the best UK universities based on your profile and goals with our expert team" },
              { step: "3", title: "Application Support", desc: "Complete application assistance with SOP, LOR, and documentation from experienced consultants" },
              { step: "4", title: "Visa Assistance", desc: "UK student visa guidance and interview preparation for Pakistani students by Abroad Academics" }
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

export default UKPage;
