import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const { navigate } = useNavigation();

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs sm:text-sm text-slate-500">
        <li>
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:text-sky-600 transition-colors text-slate-500 font-medium"
          >
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <span>Home</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
              {item.path && !isLast ? (
                <button
                  onClick={() => navigate(item.path!)}
                  className="hover:text-sky-600 transition-colors text-slate-500 font-medium truncate max-w-[150px] sm:max-w-none"
                >
                  {item.label}
                </button>
              ) : (
                <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-none" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
