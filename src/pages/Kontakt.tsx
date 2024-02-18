import {
  Text,
  Box,
  VStack,
  Link
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

export default function Kontakt() {
  return (
    <VStack spacing="8" alignItems="start" mx="4">
      <Box>
        <Text fontSize="2xl">
          Ansprechpartner
        </Text>
        <Text>
          Annegret Kollmeier-Loew,
          <br/>
          Bültestraße 176,
          32584 Löhne
        </Text>
        <Link href="mailto:vorstand@kyudo-hasbergen.de" isExternal>
          <EmailIcon mr="1"/>vorstand@kyudo-hasbergen.de
        </Link>
      </Box>
      <Box>
        <Text fontSize="2xl">
          Redaktion
        </Text>
        <Text>
          Udo Meyer,
          <br/>
          Am Botterbusch 1a,
          49504 Lotte
        </Text>
        <Link href="mailto:info@kyudo-hasbergen.de" isExternal>
          <EmailIcon mr="1"/>info@kyudo-hasbergen.de
        </Link>
      </Box>
    </VStack>
  );
};