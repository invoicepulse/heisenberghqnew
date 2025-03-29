import { useEffect } from 'react';
import { useRouter } from 'next/router';

// This completely disables client-side routing in Next.js
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // This interceptor redirects navigation events to use full page refreshes
    const handleRouteChange = (url) => {
      window.location.href = url;
      throw new Error('Navigation cancelled'); // This prevents Next.js from handling the route
    };

    // Add listener for route change start events
    router.events.on('routeChangeStart', handleRouteChange);

    // Clean up on unmount
    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp; 