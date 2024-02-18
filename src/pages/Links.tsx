import {
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Links() {
  const linksWissenswertes = [
    { name: "Kyudo in Niedersachsen", link: "http://www.kyudo-niedersachsen.de/"},
    { name: "Deutscher Kyudobund", link: "http://kyudo.de/deutscher-kyudo-bund-ev/"},
    { name: "Kyudo-Verein Wolfsburg", link: "http://www.kyudo-wolfsburg.de/wissenswertes.php"},
    { name: "Internetseite von Johannes Haubner", link: "http://www.kyu-do.de/"},
    { name: "Sammlung von Roland Pohl", link: "http://www.hekiryu.de/Willkommen.html"},
  ]
  const linksAusruestung = [
    { name: "Pfeilmacher.Kyudoladen", link: "https://www.kyudopfeile.de/"},
    { name: "Chantik", link: "https://www.kyudo-zubehoer.de/"},
    { name: "maßgeschneiderte Kyudokleidung", link: "https://www.braun-daniela.de/"},
    { name: "Azuchi und Trefferflächen aus Ethafoam - Platten", link: "http://www.polyform.de/"},
  ]

  return (
    <VStack spacing="2" alignItems="start">
      <Text fontSize="2xl">
        Wissenswertes:
      </Text>
      <UnorderedList>
        {
          linksWissenswertes.map((item) =>
          <ListItem ml="8" key={item.name}>
            <Link href={item.link} isExternal>{item.name} <ExternalLinkIcon mx="2px" /></Link>
          </ListItem>)
        }
      </UnorderedList>
      <Text fontSize="2xl">
        Ausrüstung:
      </Text>
      <UnorderedList>
        {
          linksAusruestung.map((item) =>
          <ListItem ml="8" key={item.name}>
            <Link href={item.link} isExternal>{item.name} <ExternalLinkIcon mx="2px" /></Link>
          </ListItem>)
        }
      </UnorderedList>
    </VStack>
  )
}