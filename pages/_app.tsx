import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavigationDrawer from "./components/NavigationDrawer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationDrawer>
        <Component {...pageProps} />
      </NavigationDrawer>
    </>
  );
}

export default MyApp;
