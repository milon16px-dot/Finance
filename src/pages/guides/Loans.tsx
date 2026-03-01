import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import AdSpace from '../../components/AdSpace';

export default function Loans() {
  return (
    <Layout>
      <SEO 
        title="Loan Education Guide" 
        description="Understand the different types of loans, how interest rates work, and how to borrow money responsibly."
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-4 inline-block">
            Debt Management
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Loan Education Guide</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Borrowing money can be a powerful tool for building wealth, but only if you understand the terms and risks involved.
          </p>
        </div>

        <AdSpace type="banner" />

        <div className="markdown-body">
          <h2>Types of Loans</h2>
          <p>Not all loans are created equal. Understanding the differences is crucial for your financial health:</p>
          <ul>
            <li><strong>Personal Loans:</strong> Typically unsecured loans used for various purposes like debt consolidation or home improvements.</li>
            <li><strong>Mortgages:</strong> Secured loans used to purchase real estate. The property serves as collateral.</li>
            <li><strong>Auto Loans:</strong> Secured loans for purchasing vehicles.</li>
            <li><strong>Student Loans:</strong> Used to pay for education. These often have unique repayment terms and interest rates.</li>
          </ul>

          <h2>Understanding Interest Rates</h2>
          <p>The interest rate is the cost of borrowing money. It is usually expressed as an Annual Percentage Rate (APR). A lower APR means you pay less over the life of the loan.</p>
          <p>Factors that influence your interest rate include:</p>
          <ul>
            <li><strong>Credit Score:</strong> Higher scores generally lead to lower rates.</li>
            <li><strong>Loan Term:</strong> Shorter terms often have lower rates but higher monthly payments.</li>
            <li><strong>Collateral:</strong> Secured loans usually have lower rates than unsecured ones.</li>
          </ul>

          <AdSpace type="in-article" />

          <h2>Good Debt vs. Bad Debt</h2>
          <p>Not all borrowing is bad. We distinguish between the two based on the long-term value of the purchase:</p>
          <ul>
            <li><strong>Good Debt:</strong> Borrowing for assets that increase in value or generate income (e.g., a mortgage or education).</li>
            <li><strong>Bad Debt:</strong> Borrowing for items that decrease in value or are consumed immediately (e.g., credit card debt for luxury items).</li>
          </ul>

          <h2>How to Borrow Responsibly</h2>
          <ol>
            <li><strong>Check Your Credit:</strong> Know your score before you apply.</li>
            <li><strong>Shop Around:</strong> Compare offers from multiple lenders.</li>
            <li><strong>Read the Fine Print:</strong> Understand fees, penalties, and repayment terms.</li>
            <li><strong>Have a Plan:</strong> Know exactly how you will pay the money back.</li>
          </ol>

          <h2>FAQ: Frequently Asked Questions</h2>
          <div className="bg-slate-50 p-8 rounded-3xl mt-12">
            <div className="mb-6">
              <p className="font-bold text-lg mb-2">What is a fixed-rate loan?</p>
              <p className="text-slate-600">A fixed-rate loan has an interest rate that stays the same for the entire life of the loan, providing predictable monthly payments.</p>
            </div>
            <div>
              <p className="font-bold text-lg mb-2">Can I pay off my loan early?</p>
              <p className="text-slate-600">In many cases, yes. However, some loans have "prepayment penalties." Always check your loan agreement for these terms.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
