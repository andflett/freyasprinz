import { Box, BoxProps } from "@chakra-ui/react";
import { Header } from "./Header";

export function Layout({ children, ...rest }: BoxProps) {
  return (
    <>
      <Box bg="turquoise" minH="100vh">
        <Header />
        <Box as={"main"} {...rest}>
          {children}
        </Box>
      </Box>
    </>
  );
}
