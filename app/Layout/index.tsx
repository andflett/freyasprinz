import { Box, BoxProps } from "@chakra-ui/react";
import { Header } from "./Header";

export function Layout({ children, ...rest }: BoxProps) {
  return (
    <>
      <Box bg="gray.25">
        <Header />
        <Box as={"main"} {...rest}>
          {children}
        </Box>
      </Box>
    </>
  );
}
