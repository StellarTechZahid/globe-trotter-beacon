
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, DollarSign, Globe, Users, CheckCircle, ArrowRight, MessageCircle, Edit, BookOpen, Star, Target, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const HowToWriteWinningScholarshipEssaysStepByStepGuide2024 = () => {
  const essayTypes = [
    {
      type: "Personal Statement",
      description: "Tell your unique story and what makes you special",
      length: "500-1000 words",
      focus: "Personal journey, goals, motivations"
    },
    {
      type: "Why This Scholarship",
      description: "Explain why you deserve this specific scholarship",
      length: "300-600 words", 
      focus: "Alignment with scholarship values, need, merit"
    },
    {
      type: "Career Goals Essay",
      description: "Outline your future career plans and impact",
      length: "500-800 words",
      focus: "Future aspirations, contribution to society"
    },
    {
      type: "Leadership Experience",
      description: "Showcase your leadership skills and experiences",
      length: "400-700 words",
      focus: "Specific examples, impact, growth"
    }
  ];

  const writingSteps = [
    {
      step: 1,
      title: "Research & Planning",
      description: "Understand the scholarship, its values, and requirements thoroughly",
      duration: "2-3 days",
      tips: ["Read all guidelines carefully", "Research the organization", "Identify key themes"]
    },
    {
      step: 2,
      title: "Brainstorming & Outlining", 
      description: "Generate ideas and create a structured outline for your essay",
      duration: "1-2 days",
      tips: ["List your achievements", "Identify compelling stories", "Create essay structure"]
    },
    {
      step: 3,
      title: "Writing First Draft",
      description: "Write your initial draft focusing on content over perfection",
      duration: "2-3 days", 
      tips: ["Don't edit while writing", "Focus on storytelling", "Include specific examples"]
    },
    {
      step: 4,
      title: "Revision & Editing",
      description: "Refine your essay for clarity, flow, and impact",
      duration: "3-4 days",
      tips: ["Check word count", "Improve transitions", "Strengthen conclusion"]
    },
    {
      step: 5,
      title: "Final Review",
      description: "Proofread for grammar, spelling, and formatting",
      duration: "1-2 days",
      tips: ["Read aloud", "Get feedback", "Final formatting check"]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Generic Essays",
      description: "Using the same essay for multiple scholarships without customization",
      solution: "Tailor each essay to the specific scholarship and its values"
    },
    {
      mistake: "Weak Opening",
      description: "Starting with clichés or boring introductions",
      solution: "Begin with a compelling story, quote, or surprising fact"
    },
    {
      mistake: "Lack of Specificity",
      description: "Being vague instead of providing concrete examples",
      solution: "Use specific stories, numbers, and detailed examples"
    },
    {
      mistake: "Exceeding Word Limits",
      description: "Writing too much and not following guidelines",
      solution: "Respect word limits and be concise while maintaining impact"
    }
  ];

  const winningStructure = [
    {
      section: "Hook Opening",
      percentage: "10%",
      content: "Compelling first sentence that grabs attention"
    },
    {
      section: "Background",
      percentage: "25%", 
      content: "Relevant personal/academic background and context"
    },
    {
      section: "Main Body",
      percentage: "50%",
      content: "Key experiences, achievements, and stories with impact"
    },
    {
      section: "Future Goals",
      percentage: "10%",
      content: "Clear vision of how scholarship helps achieve goals"
    },
    {
      section: "Strong Conclusion",
      percentage: "5%",
      content: "Memorable ending that reinforces your candidacy"
    }
  ];

  const scrollToConsultation = () => {
    window.location.href = '/#consultation-form';
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>How to Write Winning Scholarship Essays: Step-by-Step Guide 2024</title>
        <meta name="description" content="Master the art of scholarship essay writing with our comprehensive 2024 guide. Learn proven strategies, avoid common mistakes, and write compelling essays that win scholarships." />
        <meta name="keywords" content="scholarship essay writing 2024, how to write scholarship essays, personal statement tips, scholarship application guide, essay writing tips, winning scholarship essays, college essays" />
        <link rel="canonical" href="https://yourdomain.com/articles/how-to-write-winning-scholarship-essays-step-by-step-guide-2024" />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">How to Write Winning Scholarship Essays: Step-by-Step Guide 2024</h1>
            <p className="text-xl mb-6">Master the art of compelling scholarship essay writing</p>
            <Button 
              onClick={scrollToConsultation}
              className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get Essay Writing Support
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-500 mb-6">Why Scholarship Essays Matter</h2>
            <p className="text-lg text-gray-300 mb-8">
              Scholarship essays are your opportunity to stand out from thousands of applicants. A well-written essay 
              can be the deciding factor between receiving funding or missing out on life-changing opportunities. 
              Studies show that 60% of scholarship decisions are influenced by essay quality, making this your most 
              important application component.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Edit className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">60% Weight</h3>
                <p className="text-gray-400 text-sm">Essay importance in decisions</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">1 in 50</h3>
                <p className="text-gray-400 text-sm">Average acceptance rate</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">3-5 Drafts</h3>
                <p className="text-gray-400 text-sm">Typical revisions needed</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-white font-semibold">2-3 Weeks</h3>
                <p className="text-gray-400 text-sm">Recommended writing time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essay Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Common Scholarship Essay Types 2024</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {essayTypes.map((essay, index) => (
              <Card key={index} className="bg-gray-900 border-purple-500">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white">{essay.type}</h3>
                    <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {essay.length}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{essay.description}</p>
                  <div>
                    <span className="text-purple-500 font-semibold">Key Focus: </span>
                    <span className="text-white">{essay.focus}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Process */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">5-Step Essay Writing Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {writingSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <div className="bg-black p-6 rounded-lg border border-purple-500 flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{step.description}</p>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Tips:</h4>
                      <ul className="space-y-1">
                        {step.tips.map((tip, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Essay Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">Winning Essay Structure</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-8 border border-orange-500">
              <div className="space-y-6">
                {winningStructure.map((section, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="bg-orange-500 text-black px-3 py-1 rounded-full text-sm font-semibold min-w-[60px] text-center">
                      {section.percentage}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white">{section.section}</h3>
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-500 mb-12 text-center">Common Mistakes to Avoid</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <Card key={index} className="bg-black border-red-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-red-500 mb-3">{mistake.mistake}</h3>
                  <p className="text-gray-300 mb-4">{mistake.description}</p>
                  <div className="bg-gray-900 p-4 rounded-lg border border-green-500">
                    <h4 className="text-green-500 font-semibold mb-2">Solution:</h4>
                    <p className="text-gray-300">{mistake.solution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">Pro Tips for Scholarship Essay Success</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Start with a compelling hook that grabs attention immediately",
                "Use the STAR method (Situation, Task, Action, Result) for examples",
                "Show don't tell - use specific examples and stories",
                "Connect your past experiences to future goals clearly",
                "Address the scholarship criteria directly in your essay",
                "Use active voice and vary your sentence structure",
                "Include quantifiable achievements and impacts",
                "End with a memorable conclusion that reinforces your fit",
                "Proofread multiple times and get feedback from others",
                "Follow all formatting guidelines and word limits exactly"
              ].map((tip, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Star className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-white">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Essay Outline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-500 mb-8 text-center">Sample Essay Outline Template</h2>
            <Card className="bg-black border-purple-500">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-white font-bold mb-2">I. Introduction (100-150 words)</h3>
                    <ul className="text-gray-300 ml-4 space-y-1">
                      <li>• Hook: Compelling opening line or story</li>
                      <li>• Brief background context</li>
                      <li>• Thesis: Why you deserve this scholarship</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">II. Body Paragraph 1 (150-200 words)</h3>
                    <ul className="text-gray-300 ml-4 space-y-1">
                      <li>• Academic achievements and excellence</li>
                      <li>• Specific examples with measurable impact</li>
                      <li>• Connection to scholarship criteria</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">III. Body Paragraph 2 (150-200 words)</h3>
                    <ul className="text-gray-300 ml-4 space-y-1">
                      <li>• Leadership experience and community involvement</li>
                      <li>• Challenges overcome and growth demonstrated</li>
                      <li>• Skills developed and lessons learned</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">IV. Body Paragraph 3 (100-150 words)</h3>
                    <ul className="text-gray-300 ml-4 space-y-1">
                      <li>• Future goals and career aspirations</li>
                      <li>• How scholarship enables these goals</li>
                      <li>• Expected contribution to society/field</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2">V. Conclusion (50-100 words)</h3>
                    <ul className="text-gray-300 ml-4 space-y-1">
                      <li>• Reinforce key points and thesis</li>
                      <li>• Express gratitude and enthusiasm</li>
                      <li>• Memorable closing statement</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Winning Scholarship Essay?</h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Get expert guidance and personalized feedback to craft compelling essays that secure scholarship funding
          </p>
          <Button 
            onClick={scrollToConsultation}
            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 text-lg font-semibold"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Get Essay Writing Help
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowToWriteWinningScholarshipEssaysStepByStepGuide2024;
