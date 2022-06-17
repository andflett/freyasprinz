import type { AppProps } from "next/app";
import { useRouter } from "next/router";

// Design System and Theme

import { ChakraProvider } from "@chakra-ui/react";
import Theme from "~/Theme";

// Some site furniture components
import { MetaTags } from "~/Layout/MetaTags";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ChakraProvider theme={Theme}>
      <MetaTags
        meta={{
          url: `https://${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`,
          title: "Freya Sprinz",
          description: "Freya Sprinz' Website",
          image: `https://${process.env.NEXT_PUBLIC_BASE_URL}/catalyst.svg`,
        }}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
