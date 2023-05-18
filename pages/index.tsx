import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  UnorderedList,
  ListItem,
  Flex,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Layout } from "~/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container
        padding={{ base: 0, md: "10" }}
        minW={{ base: "full", md: "5xl" }}
      >
        <Box bg="white" padding={20} boxShadow="md">
         
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
