import '../public/globals.css'; // Global styles like Tailwind or custom CSS
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />; // Renders the specific page component (e.g., index.tsx)
}

export default MyApp;