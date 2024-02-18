import {
  Box,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logoIcon from '../../public/images/logo-faecher.png';

export default function DesktopHeader() {
  return (
    <Box borderBottomColor="gray.900" bg="brand.main" borderBottomWidth="4px" py="2">
      <Box maxWidth="1540px" mx="auto">
        <RouterLink to="/">
          <Box display="flex">
            <Image src={logoIcon} alt="logo" width="55px" height="55px" mx="4" objectFit="contain"/>
            <Text fontSize="4xl" textAlign="left" color="white">
              Kyudo-Verein Silbersee-Dojo Hasbergen e.V.
            </Text>
          </Box>
        </RouterLink>
      </Box>
    </Box>
  );
};