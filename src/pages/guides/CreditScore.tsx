import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function CreditScore() {
  return (
    <Layout>
      <SEO 
        title="Credit Score Guide" 
        description="Learn how to build, maintain, and repair your credit score for better financial opportunities."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Credit
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Credit Score Guide</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Your credit score is one of the most important numbers in your financial life. It determines your ability to borrow money and the interest rates you'll pay.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>What is a Credit Score?</h2>
          <p>A credit score is a three-digit number that represents your creditworthiness. It is calculated based on your credit history and is used by lenders to assess the risk of lending to you.</p>

          <h2>How is Your Score Calculated?</h2>
          <p>While exact formulas are proprietary, most scores (like FICO) are based on these five factors:</p>
          <ul>
            <li><strong>Payment History (35%):</strong> Do you pay your bills on time? This is the most important factor.</li>
            <li><strong>Amounts Owed (30%):</strong> How much of your available credit are you using? This is known as credit utilization.</li>
            <li><strong>Length of Credit History (15%):</strong> How long have you had credit accounts?</li>
            <li><strong>New Credit (10%):</strong> Have you opened many new accounts recently?</li>
            <li><strong>Credit Mix (10%):</strong> Do you have a variety of credit types (e.g., credit cards, auto loans, mortgages)?</li>
          </ul>

          <AdSpace type="in-article" />

          <h2>How to Improve Your Credit Score</h2>
          <ol>
            <li><strong>Pay Every Bill on Time:</strong> Set up autopay to ensure you never miss a payment.</li>
            <li><strong>Keep Credit Utilization Low:</strong> Aim to use less than 30% of your available credit limit on each card.</li>
            <li><strong>Don't Close Old Accounts:</strong> The length of your credit history matters. Keep your oldest accounts open.</li>
            <li><strong>Limit New Applications:</strong> Each "hard inquiry" can temporarily lower your score.</li>
            <li><strong>Check for Errors:</strong> Regularly review your credit report and dispute any inaccuracies.</li>
          </ol>

          <h2>Why a Good Credit Score Matters</h2>
          <p>A high credit score can save you thousands of dollars over your lifetime. It leads to:</p>
          <ul>
            <li>Lower interest rates on loans and credit cards.</li>
            <li>Easier approval for rental apartments.</li>
            <li>Lower insurance premiums in some regions.</li>
            <li>Better terms for utility and cell phone plans.</li>
          </ul>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">How long does negative information stay on my report?</p>
              <p className="text-slate-600">Most negative information, like late payments or collections, stays on your credit report for seven years. Bankruptcies can stay for up to ten years.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Does checking my own score lower it?</p>
              <p className="text-slate-600">No. Checking your own score is considered a "soft inquiry" and does not affect your credit score.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
