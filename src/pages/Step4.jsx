import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Step4 = () => {
  const calculatePrice = (floors, squareMeters) => {
    const sensorsPerFloor = Math.ceil(squareMeters / 50);
    const totalSensors = sensorsPerFloor * floors;
    const pricePerSensor = 100;
    return totalSensors * pricePerSensor;
  };

  const floors = 5; // This should be dynamically fetched from Step3
  const squareMeters = 200; // This should be dynamically fetched from Step3
  const price = calculatePrice(floors, squareMeters);

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Heading as="h1" size="xl">Quotation</Heading>
        <Text fontSize="lg">
          Based on the information provided, the estimated price for sensors in your building is:
        </Text>
        <Text fontSize="2xl" fontWeight="bold">${price}</Text>
      </VStack>
    </Box>
  );
};

export default Step4;