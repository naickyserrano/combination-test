/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { SWRConfig } from 'swr';
import Layout from '@/layouts/Layout';
import GlobalStyles from '@/layouts/global';
import 'antd/dist/antd.css';
import ErrorBoundary from '@/common/ErrorBoundary/ErrorBoundary';

/**
 * Default theme, add colors
 */
const theme = {
	colors: {
		white: '#FFF',
		black: '#2E2E2E',
		gray: '#787878',
		highlight: '#EA8478',
		footer: '#F7F7F7',
	},
};

/**
 * Top level component
 * Add context providers, layouts, styles or any global config
 * @param {NextPage} Component - page component
 * @param {any} pageProps - page props
 * @returns {JSX.Element}
 */
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SWRConfig
			value={{
				fetcher: (resource, init) =>
					fetch(resource, init).then((res) => res.json()),
			}}
		>
			<ThemeProvider theme={theme}>
				<Layout>
					<GlobalStyles />
					<ErrorBoundary>
						<Component {...pageProps} />
					</ErrorBoundary>
				</Layout>
			</ThemeProvider>
		</SWRConfig>
	);
}

export default MyApp;
