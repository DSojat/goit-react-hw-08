import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { Toaster } from 'react-hot-toast';

export const Layout = ({ children }) => {
  return (
    <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
