import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function WealthHabits() {
  return (
    <Layout>
      <SEO 
        title="Wealth Building Habits" 
        description="Discover the daily habits and mindsets of successful self-made millionaires and how to apply them to your life."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Mindset
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Wealth Building Habits</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Wealth is rarely the result of luck. It is the cumulative effect of small, consistent habits practiced over many years.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>1. Continuous Learning</h2>
          <p>Wealthy individuals are often lifelong learners. They read books, attend seminars, and stay informed about financial trends. They understand that their greatest asset is their own knowledge.</p>

          <h2>2. Living Below Their Means</h2>
          <p>Contrary to popular belief, many millionaires live modest lives. They prioritize financial independence over outward displays of wealth. They understand that a dollar saved is a dollar that can be invested.</p>

          <h2>3. Setting Clear Goals</h2>
          <p>Successful people don't just "hope" to be wealthy. They set specific, measurable, and time-bound financial goals. They have a clear vision of what they want to achieve and a plan to get there.</p>

          <AdSpace type="in-article" />

          <h2>4. Automating Their Finances</h2>
          <p>By automating savings and investments, they remove the temptation to spend. They make wealth-building the default setting for their lives.</p>

          <h2>5. Surrounding Themselves with Success</h2>
          <p>You are the average of the five people you spend the most time with. Wealthy individuals surround themselves with mentors and peers who challenge and inspire them.</p>

          <h2>6. Taking Calculated Risks</h2>
          <p>Building wealth requires stepping out of your comfort zone. However, successful people don't gamble; they take calculated risks where the potential reward outweighs the potential loss.</p>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">Can I build wealth on a low income?</p>
              <p className="text-slate-600">Yes, but it requires more discipline and time. By focusing on increasing your skills (and thus your income) while maintaining low expenses, anyone can build wealth over time.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">What is the most important habit?</p>
              <p className="text-slate-600">Consistency. Doing the right things occasionally won't build wealth. Doing them every single day for decades will.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
