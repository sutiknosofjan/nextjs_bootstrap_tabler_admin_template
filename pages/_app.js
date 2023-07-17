import { useEffect } from "react";
import "@tabler/core/dist/css/tabler.min.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("@tabler/core/dist/js/tabler.min.js");
  }, []);

  return <Component {...pageProps} />;
}
