'use client';

import dynamic from 'next/dynamic';

// The retained React Router application uses browser history, so it must only
// initialise in the browser. Next.js still owns routing, assets and deployment.
const LegacyApp = dynamic(() => import('./App'), { ssr: false });

// The existing page components are retained unchanged while Next.js provides
// the application runtime and deployment surface.
export default function NextApp() {
  return <LegacyApp />;
}
