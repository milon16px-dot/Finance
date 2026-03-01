import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function EmergencyFund() {
  return (
    <Layout>
      <SEO 
        title="Emergency Fund Guide" 
        description="Learn how to build a financial safety net that protects you from life's unexpected expenses."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Saving
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Emergency Fund Guide</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            An emergency fund is the most important part of your financial foundation. It's the difference between a minor inconvenience and a financial disaster.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>What is an Emergency Fund?</h2>
          <p>An emergency fund is a stash of money set aside specifically for unexpected expenses, such as medical bills, car repairs, or job loss. It should be kept in a liquid, easily accessible account.</p>

          <h2>How Much Do You Need?</h2>
          <p>Most financial experts recommend saving <strong>3 to 6 months of essential living expenses</strong>. However, the exact amount depends on your personal situation:</p>
          <ul>
            <li><strong>3 Months:</strong> If you have a stable job, low expenses, and no dependents.</li>
            <li><strong>6 Months:</strong> If you have a variable income, dependents, or a specialized job that might take longer to replace.</li>
            <li><strong>12 Months:</strong> If you are self-employed or work in a highly volatile industry.</li>
          </ul>

          <AdSpace type="in-article" />

          <h2>Where to Keep Your Emergency Fund</h2>
          <p>Your emergency fund should be <strong>safe and accessible</strong>. The best place is usually a High-Yield Savings Account (HYSA). This allows you to earn some interest while ensuring you can withdraw the money immediately when needed.</p>

          <h2>How to Build Your Fund Fast</h2>
          <ol>
            <li><strong>Start Small:</strong> Aim for an initial goal of $1,000. This will cover most minor emergencies.</li>
            <li><strong>Automate:</strong> Set up a recurring transfer from your checking account to your emergency fund.</li>
            <li><strong>Use Windfalls:</strong> Put tax refunds, bonuses, or gifts directly into your fund.</li>
            <li><strong>Cut Expenses:</strong> Temporarily reduce non-essential spending to reach your goal faster.</li>
          </ol>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">What counts as an emergency?</p>
              <p className="text-slate-600">An emergency is something that is <strong>unexpected, necessary, and urgent</strong>. A sale at your favorite store is not an emergency. A broken water heater is.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Should I pay off debt or build an emergency fund first?</p>
              <p className="text-slate-600">We recommend building a "starter" emergency fund of $1,000-$2,000 first, then focusing on high-interest debt, then finishing your full emergency fund.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
