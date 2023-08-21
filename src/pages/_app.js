import '../styles/styles.scss';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';
import { AppProvider } from 'context/context';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer transition={Slide} />
    </AppProvider>
  );
}
