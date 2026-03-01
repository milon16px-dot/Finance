import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function About() {
  return (
    <Layout>
      <SEO 
        title="About Mich Ian Aron" 
        description="Learn about the mission behind Aron Financial Intelligence and the expertise of Mich Ian Aron in financial education."
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Mission & Vision</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Aron Financial Intelligence was founded with a single goal: to democratize high-quality financial education for everyone, everywhere.
          </p>
        </div>

        <div className="aspect-video bg-slate-200 rounded-[3rem] mb-16 overflow-hidden">
          <img src="https://picsum.photos/seed/office/1200/675" alt="Our Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>

        <div className="markdown-body">
          <h2>The Story of Aron Financial Intelligence</h2>
          <p>
            Founded by <strong>Mich Ian Aron</strong>, this platform was born out of a realization that while money is a fundamental part of our lives, formal education systems often fail to teach us how to manage it effectively. We believe that financial literacy is not a luxury, but a basic life skill that everyone should possess.
          </p>
          
          <p>
            Our journey began as a small blog sharing personal finance tips. Today, it has grown into a comprehensive knowledge hub serving a global audience. We take pride in our ability to break down complex financial concepts into simple, actionable steps that anyone can follow.
          </p>

          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Integrity:</strong> We provide unbiased, honest financial education. We do not promote "get rich quick" schemes.</li>
            <li><strong>Clarity:</strong> We believe in simple language. If you can't explain it simply, you don't understand it well enough.</li>
            <li><strong>Empowerment:</strong> Our goal is to give you the tools to make your own informed financial decisions.</li>
            <li><strong>Accessibility:</strong> High-quality financial knowledge should be available to everyone, regardless of their background.</li>
          </ul>

          <h2>Meet Mich Ian Aron</h2>
          <p>
            Mich Ian Aron is a seasoned financial educator with a passion for smart money management. With years of experience in analyzing market trends and personal finance strategies, Mich has dedicated his career to helping others achieve financial independence.
          </p>
          <p>
            His philosophy is simple: <em>"Wealth is not about how much money you make, but how much money you keep and how hard that money works for you."</em>
          </p>

          <h2>Why Trust Us?</h2>
          <p>
            At Aron Financial Intelligence, every piece of content goes through a rigorous review process. We ensure that our guides are up-to-date, factually accurate, and compliant with global financial education standards. We are committed to transparency and provide clear disclaimers on all our investment-related content.
          </p>
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-white text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of others who are taking control of their financial future today.</p>
          <div className="flex justify-center">
            <a href="/guides" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all">
              Explore Our Guides
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
