import {
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import Lexikon from "../../public/documents/Lexikon.pdf";

export default function SideNavigation() {
  return (
    <Box overflowY="auto" as="nav" height="100%" width="100%">
      <VStack paddingY="30px" spacing="4" alignItems="start" mx="10px" width="160px">
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Aktuelles
          </Text>
          <Text fontSize="l">
            <RouterLink to="/trainingsort-zeit">Trainingsort und -zeit</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/kyudo-kennenlernen">Kyudo Kennenlernen</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/nachrichtenticker">Nachrichtenticker</RouterLink>
          </Text>
        </Box>

        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Kyudo
          </Text>
          <Text fontSize="l">
            <RouterLink to="/was-ist-kyudo">Was ist Kyudo</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/training">Training</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/links">Links</RouterLink>
          </Text>
          <Text fontSize="l">
            <a href={Lexikon} target="_blank">
              Lexikon
            </a>
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            DIY im Kyudo
          </Text>
          <Text fontSize="l">
            <RouterLink to="/sehnen">Sehnen</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/pfeile">Pfeile</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/sehnenwinkel">Sehnenwinkel</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/pfeilstaender">Pfeilständer</RouterLink>
          </Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold">
            Verein
          </Text>
          <Text fontSize="l">
            <RouterLink to="/verein">Geschichte</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/vorstand">Vorstand</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/termine">Termine im Dojo</RouterLink>
          </Text>
          <Text fontSize="l">
            <RouterLink to="/formulare">Formulare</RouterLink>
          </Text>
        </Box>
      </VStack>
    </Box>
  )
}