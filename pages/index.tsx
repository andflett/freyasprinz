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
import { Shh } from "~/Images/Shh";
import { Layout } from "~/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container
        padding={{ base: 0, md: "10" }}
        minW={{ base: "full", md: "5xl" }}
      >
        <Box bg="white" padding={20} boxShadow="md">
          <Stack spacing="10">
            <Heading size={{ base: "3xl", md: "4xl" }} color="orange">
              Freya Sprinz’s website
            </Heading>
            <Flex
              justify={"space-between"}
              direction={{ base: "column", md: "row" }}
            >
              <Stack spacing="3">
                <Heading fontFamily="Roboto Mono" size="xl">
                  Song 1 - Secret
                </Heading>
                <Text>Oh, you told her our secret.</Text>
              </Stack>
              <Shh />
            </Flex>
            <Stack spacing="3">
              <Heading fontFamily="Roboto Mono" size="xl">
                How to be kind
              </Heading>
              <UnorderedList pl="5">
                <ListItem>Ask if people are ok when they are sad</ListItem>
                <ListItem>Help other people</ListItem>
              </UnorderedList>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Layout>
  );
};

export default Home;
