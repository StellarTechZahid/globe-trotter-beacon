import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const ArticleDetailFallback: React.FC = () => {
  const { slug } = useParams();
  const title = (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{title ? `${title} | Article` : 'Article'} </title>
        <meta name="description" content={`Read ${title} on Abroad Academics. This article will be available soon.`} />
        <link rel="canonical" href={`https://yourdomain.com/articles/${slug}`} />
      </Helmet>
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title || 'Article'}</h1>
        <p className="text-gray-300 mb-8">This article is being finalized. Please check back shortly. Explore other articles meanwhile.</p>
        <div className="flex gap-4">
          <Link to="/articles">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">Browse Articles</Button>
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

export default ArticleDetailFallback;
