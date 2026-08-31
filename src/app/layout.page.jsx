/* eslint-disable react-refresh/only-export-components */
import './globals.css';
export const metadata = {
  title: 'Elim Pentecostal Church Kenya',
  description: 'Elim Pentecostal Church Kenya',
  icons: {
    icon: [{ url: '/images/logo1.webp', type: 'image/webp' }],
    apple: [{ url: '/images/logo1.webp', type: 'image/webp' }],
  },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
