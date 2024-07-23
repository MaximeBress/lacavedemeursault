import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from '@/app/components/Footer';
import Navigation from '@/app/components/Navigation';
import '@/app/globals.css';

import '../../public/assets/css/icon.css';
import '../../public/assets/css/plugins.css';
import '../../public/assets/fonts/unicons/unicons.css';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="shrink-0 grow">
          <Navigation />
          {children}
          <ToastContainer />
        </div>
        <Footer />
      </body>
    </html>
  );
}
