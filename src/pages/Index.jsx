import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading fontSize="4xl">Welcome to Smart Building Sensors</Heading>
        <Text fontSize="xl">Optimize your building with our state-of-the-art sensors.</Text>
        <Button as={RouterLink} to="/step1" colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;