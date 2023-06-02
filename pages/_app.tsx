import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "Come back Soon";
    });

    // when the user's focus is back to your tab (website) again
    window.addEventListener("focus", () => {
      document.title = "Soumik's";
    });
  }, []);
  return <Component {...pageProps} />;
}
