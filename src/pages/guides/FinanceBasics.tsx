import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function FinanceBasics() {
  return (
    <Layout>
      <SEO 
        title="Personal Finance Basics" 
        description="The fundamental principles of managing your money for beginners. Start your financial journey here."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Foundations
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Personal Finance Basics</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Managing your money doesn't have to be complicated. By mastering a few core principles, you can build a solid financial future.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>1. Spend Less Than You Earn</h2>
          <p>This is the golden rule of personal finance. If you consistently spend more than you make, you will fall into debt. If you spend less, you create a surplus that can be used for saving and investing.</p>

          <h2>2. Pay Yourself First</h2>
          <p>Instead of saving what's left over at the end of the month, treat your savings like a mandatory bill. Set up an automatic transfer to your savings account as soon as you get paid.</p>

          <h2>3. Build an Emergency Fund</h2>
          <p>Life is unpredictable. Having a safety net of 3-6 months of expenses prevents you from going into debt when unexpected costs arise.</p>

          <AdSpace type="in-article" />

          <h2>4. Understand Your Debt</h2>
          <p>Not all debt is bad, but high-interest debt (like credit cards) is a financial emergency. Prioritize paying off high-interest debt as quickly as possible.</p>

          <h2>5. Start Investing Early</h2>
          <p>Thanks to compound interest, the earlier you start investing, the less you have to save to reach your goals. Even small amounts can grow into significant wealth over decades.</p>

          <h2>6. Protect Your Assets</h2>
          <p>Ensure you have the right insurance coverage (health, life, auto, home) to protect yourself and your family from financial catastrophe.</p>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">How much should I save each month?</p>
              <p className="text-slate-600">A common goal is to save 20% of your income. However, if you're just starting, any amount is better than nothing. Start with what you can and increase it over time.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Should I pay off debt or invest first?</p>
              <p className="text-slate-600">Generally, you should pay off high-interest debt (over 7-8%) before investing. If your debt has a low interest rate, you may be better off investing while making minimum payments.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
