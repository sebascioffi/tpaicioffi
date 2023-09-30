import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';
import type { AppProps } from 'next/app';
import { memo } from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn && router.pathname !== '/') {
      router.push('/');
    }
  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>
  );
});

export default MyApp;
