import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="flex mb-8 text-sm text-slate-500 overflow-x-auto whitespace-nowrap pb-2">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="hover:text-emerald-600 flex items-center">
            <Home className="h-4 w-4 mr-1" />
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const label = value.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="h-4 w-4 text-slate-300" />
              {last ? (
                <span className="font-medium text-slate-900">{label}</span>
              ) : (
                <Link to={to} className="hover:text-emerald-600">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
