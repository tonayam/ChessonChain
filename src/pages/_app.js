import "../styles/styles.scss";
import Layout from "components/Layout";
import { AppProvider } from "context/context";

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
