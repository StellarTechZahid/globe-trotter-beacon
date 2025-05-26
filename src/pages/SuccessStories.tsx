
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SuccessStories = () => {
  const stories = [
    {
      name: "Ayesha Khan",
      university: "University of Oxford",
      country: "UK",
      program: "Masters in Computer Science",
      story: "StudyGlobal helped me secure admission to my dream university in the UK. Their guidance was invaluable throughout the process."
    },
    {
      name: "Rahim Ali",
      university: "Harvard University", 
      country: "USA",
      program: "MBA",
      story: "The team made my study abroad process smooth and stress-free. Highly recommend their services!"
    },
    {
      name: "Sara Ahmed",
      university: "University of Toronto",
      country: "Canada", 
      program: "PhD in Engineering",
      story: "Thanks to StudyGlobal, I got a scholarship and admission to a top university. Amazing support!"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <section className="relative h-96 bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl">Inspiring journeys of our successful students</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 border border-orange-500">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-black font-bold text-xl">{story.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{story.name}</h3>
                  <p className="text-orange-500">{story.university}</p>
                  <p className="text-gray-400">{story.program} | {story.country}</p>
                </div>
                <p className="text-gray-300 italic">"{story.story}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
