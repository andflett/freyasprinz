import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { Layout } from "~/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <Container padding={"10"} minW="5xl">
        <Box bg="white" padding={20} boxShadow="md">
          <Stack spacing="10">
            <Heading size={"4xl"} color={"orange"}>
              Freya Sprinz's website
            </Heading>
            <Stack spacing="2">
              <Heading fontFamily={"Roboto Mono"} size="xl">
                Song 1 Secret
              </Heading>
              <Text>Oh, you told her are secret</Text>
            </Stack>
            <Stack spacing={"2"}>
              <Heading fontFamily={"Roboto Mono"} size="xl">
                How to be kind
              </Heading>
              <UnorderedList>
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
