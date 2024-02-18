import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { InfoIcon, EmailIcon } from "@chakra-ui/icons";

export default function DesktopFooter() {
    return (
        <Box as="footer" background="gray.600" p="4">
          <Flex maxW="1000px" mx="auto">
            <Text fontSize="sm" align="start" maxWidth="1960px" mx="auto" color="white">
              © 2023 Silbersee-Dojo Hasbergen e.V. 
            </Text>
            <Spacer />
            <HStack spacing="6">
              <Text mb="1" color="white">
                <RouterLink to="/kontakt"><EmailIcon/> Kontakt</RouterLink>
              </Text>
              <Text mb="1" color="white">
                <RouterLink to="/impressum"><InfoIcon/> Impressum</RouterLink>
              </Text>
            </HStack>
          </Flex>
        </Box>
    )
}