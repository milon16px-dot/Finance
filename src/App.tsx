import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import Guides from './pages/Guides';
import Investing from './pages/Investing';
import Saving from './pages/Saving';
import PassiveIncome from './pages/PassiveIncome';
import Calculators from './pages/Calculators';

// Guide Pages
import Budgeting from './pages/guides/Budgeting';
import Loans from './pages/guides/Loans';
import CreditScore from './pages/guides/CreditScore';
import CompoundInterest from './pages/guides/CompoundInterest';
import FinanceBasics from './pages/guides/FinanceBasics';
import MoneyMistakes from './pages/guides/MoneyMistakes';
import WealthHabits from './pages/guides/WealthHabits';
import EmergencyFund from './pages/guides/EmergencyFund';
import ROI from './pages/guides/ROI';
import DownloadBanner from './components/FloatingDownload';

export default function App() {
  return (
    <Router>
      <DownloadBanner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/investing" element={<Investing />} />
        <Route path="/saving" element={<Saving />} />
        <Route path="/passive-income" element={<PassiveIncome />} />
        <Route path="/calculators" element={<Calculators />} />
        
        {/* Guide Routes */}
        <Route path="/guides/budgeting-master-guide" element={<Budgeting />} />
        <Route path="/guides/loan-education-guide" element={<Loans />} />
        <Route path="/guides/credit-score-guide" element={<CreditScore />} />
        <Route path="/guides/compound-interest-guide" element={<CompoundInterest />} />
        <Route path="/guides/personal-finance-basics" element={<FinanceBasics />} />
        <Route path="/guides/money-mistakes" element={<MoneyMistakes />} />
        <Route path="/guides/wealth-habits" element={<WealthHabits />} />
        <Route path="/guides/emergency-fund-guide" element={<EmergencyFund />} />
        <Route path="/guides/roi-explanation-guide" element={<ROI />} />
      </Routes>
    </Router>
  );
}
