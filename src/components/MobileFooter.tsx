import {
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InfoIcon, EmailIcon } from "@chakra-ui/icons";

export default function MobileFooter() {
  return (
  <Box as="footer" bg="brand.main" width="full" pt="1" px="4">
    <HStack spacing="6" maxWidth="1960px" mx="auto">
      <Text color="white" mb="1">
        <RouterLink to="/kontakt"><EmailIcon/> Kontakt</RouterLink>
      </Text>
      <Text color="white" mb="1">
        <RouterLink to="/impressum"><InfoIcon/> Impressum</RouterLink>
      </Text>
    </HStack>

    <Text color="white" fontSize="x-small" align="start" maxWidth="1960px" mx="auto">
      © 2023 Silbersee-Dojo Hasbergen e.V. 
    </Text>
  </Box>
  )
}