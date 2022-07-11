import Layout from "../components/layout";
import "../styles/globals.css";
import { ThemeProvider } from "../contexts/context";

// adding comment


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
