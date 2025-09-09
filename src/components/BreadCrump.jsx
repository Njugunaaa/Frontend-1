import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function BreadCrumb({ items = [] }) {

  const breadcrumbItems = items 

  return (
    <nav className="py-3">
      <div className="container mx-auto mt-[3rem] px-4">
        <ol className="flex flex-wrap justify-center items-center text-sm sm:text-base">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-gray-400 mx-1 sm:mx-2" />
              )}

              {index === breadcrumbItems.length - 1 ? (
                <span className="text-amber-700 font-semibold tracking-wide">
                  {item.name}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-amber-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
