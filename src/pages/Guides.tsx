import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import AdSpace from '../components/AdSpace';

const guides = [
  { id: 'budgeting-master-guide', title: 'The Master Guide to Budgeting', category: 'Budgeting', desc: 'A comprehensive guide to tracking your income and expenses using the 50/30/20 rule.', icon: '📊' },
  { id: 'loan-education-guide', title: 'Loan Education Guide', category: 'Debt', desc: 'Understanding different types of loans, interest rates, and how to borrow responsibly.', icon: '🏦' },
  { id: 'credit-score-guide', title: 'Credit Score Guide', category: 'Credit', desc: 'Everything you need to know about building, maintaining, and repairing your credit score.', icon: '💳' },
  { id: 'compound-interest-guide', title: 'Compound Interest Guide', category: 'Investing', desc: 'How compound interest works and why it is the key to long-term wealth building.', icon: '📈' },
  { id: 'personal-finance-basics', title: 'Personal Finance Basics', category: 'Foundations', desc: 'The fundamental principles of managing your money for beginners.', icon: '🌱' },
  { id: 'money-mistakes', title: 'Common Money Mistakes', category: 'Mindset', desc: 'Avoid these frequent financial pitfalls that can derail your path to wealth.', icon: '⚠️' },
  { id: 'wealth-habits', title: 'Wealth Building Habits', category: 'Mindset', desc: 'The daily habits and mindsets of successful self-made millionaires.', icon: '💎' },
  { id: 'emergency-fund-guide', title: 'Emergency Fund Guide', category: 'Saving', desc: 'How to build a safety net that protects you from life\'s unexpected expenses.', icon: '🛡️' },
  { id: 'roi-explanation-guide', title: 'Understanding ROI', category: 'Investing', desc: 'A clear explanation of Return on Investment and how to calculate it for any asset.', icon: '🔄' },
];

export default function Guides() {
  return (
    <Layout>
      <SEO 
        title="Financial Guides & Education" 
        description="Explore our comprehensive library of financial guides. Master budgeting, credit, loans, and wealth-building strategies with Mich Ian Aron."
      />
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Financial Knowledge Base</h1>
        <p className="text-slate-600 text-lg max-w-3xl">
          Our expert-written guides are designed to take you from financial basics to advanced wealth management. Each article is crafted for clarity and actionable insights.
        </p>
      </div>

      <AdSpace type="banner" className="mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {guides.map((guide) => (
          <Link 
            key={guide.id} 
            to={`/guides/${guide.id}`}
            className="group bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-6">{guide.icon}</div>
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                {guide.category}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-600 transition-colors">
              {guide.title}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {guide.desc}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <Clock className="h-3 w-3" />
                <span>10 min read</span>
              </div>
              <span className="text-emerald-600 font-bold text-sm flex items-center">
                Read Now <ArrowRight className="ml-1 h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <AdSpace type="in-article" className="mt-16" />
    </Layout>
  );
}
