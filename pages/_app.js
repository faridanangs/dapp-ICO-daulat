import { StateContextProvider } from "../Context";
import "../styles/globals.css";
export default function App({ Component, pageProps }) {
  return (
    <>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>
    </>
  );
}
