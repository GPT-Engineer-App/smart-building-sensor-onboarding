import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Step1 = () => {
  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Welcome to Smart Building Sensors</Heading>
        <Text fontSize="lg">
          This onboarding flow will guide you through the process of setting up sensors for your smart building. 
          You will need to provide the building address, specify the number of floors and square meters per floor, 
          and finally, you will receive a quoted price based on the estimation of sensors required for your building.
        </Text>
      </VStack>
    </Box>
  );
};

export default Step1;