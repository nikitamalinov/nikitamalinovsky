import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SeoLayout from "@/components/Layouts/seo";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/styles";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SeoLayout>
        <Component {...pageProps} />
        <Analytics />
      </SeoLayout>
    </ChakraProvider>
  );
}
