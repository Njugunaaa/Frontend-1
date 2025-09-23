import React from 'react';
import { Outlet } from 'react-router-dom';
import SubdomainNav from './SubdomainNav';

function SubdomainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-100">
      <SubdomainNav />
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
}

export default SubdomainLayout;
