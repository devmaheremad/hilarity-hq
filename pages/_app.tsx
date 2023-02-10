import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../components/theme";
import createEmotionCache from "../components/createEmotionCache";
import { Navbar } from "../components";
import "../styles/globale.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Provider } from "react-redux";
import store, { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<meta
					name="description"
					content="Discover a world of videos with our all-in-one platform. Explore and enjoy videos from a wide range of categories - everything from music and entertainment to education and technology."
				/>
				<title>Hilarity HQ</title>
				<link rel="icon" href="./favicon.ico" />
			</Head>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<GoogleOAuthProvider
						clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}
					>
						<ThemeProvider theme={theme}>
							{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
							<CssBaseline />
							<Navbar />
							<main
								className={"paddingContent min-h-100vh max-w-1300px mx-auto"}
							>
								<Component {...pageProps} />
							</main>
						</ThemeProvider>
					</GoogleOAuthProvider>
				</PersistGate>
			</Provider>
		</CacheProvider>
	);
}
