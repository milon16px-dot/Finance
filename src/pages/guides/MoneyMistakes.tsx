import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function MoneyMistakes() {
  return (
    <Layout>
      <SEO 
        title="Common Money Mistakes" 
        description="Avoid these frequent financial pitfalls that can derail your path to wealth and financial independence."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Mindset
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Common Money Mistakes</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Even the smartest people make financial errors. Learning to identify and avoid these common pitfalls is essential for long-term success.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>1. Lifestyle Inflation</h2>
          <p>As people earn more, they often increase their spending to match their new income. This is known as lifestyle inflation. To build wealth, you should try to maintain your current lifestyle even as your income grows.</p>

          <h2>2. Not Having an Emergency Fund</h2>
          <p>Without a safety net, one unexpected expense (like a car repair or medical bill) can force you into high-interest debt. An emergency fund is your first line of financial defense.</p>

          <h2>3. Carrying High-Interest Debt</h2>
          <p>Credit card interest rates can be 20% or higher. Carrying a balance on these cards is a massive drain on your wealth. Pay them off as quickly as possible.</p>

          <AdSpace type="in-article" />

          <h2>4. Waiting Too Long to Invest</h2>
          <p>Many people wait until they have "enough" money to start investing. Because of compound interest, waiting even a few years can cost you hundreds of thousands of dollars in the long run.</p>

          <h2>5. Emotional Investing</h2>
          <p>Buying when the market is high because of "FOMO" (fear of missing out) or selling when it's low because of fear are common mistakes. Successful investing requires a disciplined, long-term approach.</p>

          <h2>6. Not Tracking Your Spending</h2>
          <p>If you don't know where your money is going, you can't control it. Small, mindless expenses can add up to thousands of dollars over a year.</p>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">Is all debt bad?</p>
              <p className="text-slate-600">No. "Good debt" like a mortgage or a student loan for a high-ROI degree can be a tool for building wealth. "Bad debt" is high-interest debt for things that decrease in value.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">How can I stop emotional spending?</p>
              <p className="text-slate-600">Try the "24-hour rule." Wait 24 hours before making any non-essential purchase. Often, the urge to buy will pass.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
