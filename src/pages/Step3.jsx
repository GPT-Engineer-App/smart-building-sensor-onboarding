import { useState } from "react";
import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Step3 = () => {
  const [floors, setFloors] = useState(0);
  const [squareMeters, setSquareMeters] = useState(0);

  const handleAddFloor = () => {
    setFloors(floors + 1);
  };

  return (
    <Box p={4}>
      <VStack spacing={4} align="start">
        <Input
          placeholder="Enter square meters per floor"
          type="number"
          value={squareMeters}
          onChange={(e) => setSquareMeters(e.target.value)}
        />
        <Button colorScheme="blue" onClick={handleAddFloor}>
          Add Floor
        </Button>
        <Text>Number of Floors: {floors}</Text>
        <motion.div
          animate={{ height: floors * 50 }}
          style={{ width: "100px", background: "gray", margin: "auto" }}
        />
      </VStack>
    </Box>
  );
};

export default Step3;