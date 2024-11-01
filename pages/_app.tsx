import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../frontend/src/redux/store';
import Navbar from '../frontend/src/components/layout/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

