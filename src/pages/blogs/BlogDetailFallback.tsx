import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const BlogDetailFallback: React.FC = () => {
  const { slug } = useParams();
  const title = (slug || '').replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>{title ? `${title} | Blog` : 'Blog Post'} </title>
        <meta name="description" content={`Read ${title} on Abroad Academics. This post is being prepared and will be available soon.`} />
        <link rel="canonical" href={`https://yourdomain.com/blogs/${slug}`} />
      </Helmet>
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title || 'Blog Post'}</h1>
        <p className="text-gray-300 mb-8">This article is being prepared and will be published soon. In the meantime, explore our latest posts.</p>
        <div className="flex gap-4">
          <Link to="/blogs">
            <Button className="bg-orange-500 hover:bg-orange-600 text-black font-semibold">Browse Blogs</Button>
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

export default BlogDetailFallback;
