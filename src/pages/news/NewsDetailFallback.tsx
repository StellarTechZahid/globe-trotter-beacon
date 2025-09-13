import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const NewsDetailFallback: React.FC = () => {
  const { slug } = useParams();
  const title = (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{title ? `${title} | News` : 'News Update'} </title>
        <meta name="description" content={`Update: ${title}. Full details will be available soon.`} />
        <link rel="canonical" href={`https://yourdomain.com/news/${slug}`} />
      </Helmet>
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title || 'News Update'}</h1>
        <p className="text-gray-300 mb-8">Full details for this news update are coming soon. See other updates below.</p>
        <div className="flex gap-4">
          <Link to="/news">
            <Button className="bg-red-500 hover:bg-red-600 text-white font-semibold">Browse News</Button>
          </Link>
          <Link to="/consultation">
            <Button variant="outline" className="border-orange-500 text-orange-500">Free Consultation</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NewsDetailFallback;
