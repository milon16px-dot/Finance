import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  showBreadcrumbs?: boolean;
}

export default function Layout({ children, showBreadcrumbs = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        >
          {showBreadcrumbs && <Breadcrumbs />}
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
