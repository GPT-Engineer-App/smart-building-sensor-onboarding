import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="brand.700" px={4} py={2}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link as={RouterLink} to="/" color="white" fontSize="xl" fontWeight="bold">
          Smart Building Sensors
        </Link>
        <Flex alignItems="center">
          <Link as={RouterLink} to="/step1" color="white" mx={2}>
            Step 1
          </Link>
          <Link as={RouterLink} to="/step2" color="white" mx={2}>
            Step 2
          </Link>
          <Link as={RouterLink} to="/step3" color="white" mx={2}>
            Step 3
          </Link>
          <Link as={RouterLink} to="/step4" color="white" mx={2}>
            Step 4
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;