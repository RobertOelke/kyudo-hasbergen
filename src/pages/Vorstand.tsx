import {
  VStack,
  Text,
  Link
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons"

export default function Vorstand() {
  return (
    <VStack alignItems="start" spacing="6" px="4" pt="4">

      <Text>
        1. Vorsitzende
        <br/>
        Annegret Kollmeier-Loew
        <br/>
        <Link href="mailto:vorstand@kyudo-hasbergen.de" isExternal>
          <EmailIcon mr="1"/>vorstand@kyudo-hasbergen.de
        </Link>
      </Text>

      <Text>
        2. Vorsitzender
        <br/>
        Udo Meyer
        <br/>
        <Link href="mailto:info@kyudo-hasbergen.de" isExternal>
          <EmailIcon mr="1"/>info@kyudo-hasbergen.de
        </Link>
      </Text>

      <Text>
        Kassenwart
        <br/>
        Reinhold Siegmann
      </Text>
    </VStack>
  )
}