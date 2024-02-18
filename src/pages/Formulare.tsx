import {
  VStack,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

import { DownloadIcon } from "@chakra-ui/icons"

import pdfDatenschutz from "../../public/documents/DatenschutzinfosFuerMitglieder.pdf";
import pdfBeitrittserklaerung from "../../public/documents/Beitrittserklaerung.pdf";
import pdfSicherheitsregelnImDojo from "../../public/documents/SicherheitsregelnImDojo.pdf";

export default function Formulare() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
        Formulare
      </Text>
      <Text>
        Die Dateien liegen im PDF-Format vor und sollten von jeden modernen Browser angezeigt werden können.
      </Text>
      <UnorderedList pl="6">
        <ListItem>
          <a href={pdfDatenschutz} download>
            Datenschutz für Mitglieder (pdf)
            <DownloadIcon ml="2"/>
          </a>
        </ListItem>
        <ListItem mt="2">
          <a href={pdfBeitrittserklaerung} download>
            Beitrittserklärung (pdf)
            <DownloadIcon ml="2"/>
          </a>
        </ListItem>
        <ListItem mt="2">
          <a href={pdfSicherheitsregelnImDojo} download>
            Sicherheitsregeln Im Dojo (pdf)
            <DownloadIcon ml="2"/>
          </a>
        </ListItem>
      </UnorderedList>
    </VStack>
  );
};