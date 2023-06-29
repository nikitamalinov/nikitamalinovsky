import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SeoLayout from "@/components/Layouts/seo";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SeoLayout>
      <Component {...pageProps} />
    </SeoLayout>
  );
}
