import Layout from '../components/layout';
import '../styles/globals.css';

// adding comment

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
