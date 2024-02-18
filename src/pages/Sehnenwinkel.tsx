import {
  Text,
  VStack,
  Center,
  Image,
  UnorderedList,
  ListItem,
  Button
} from "@chakra-ui/react";
import imgSehnenwinkel from '../../public/images/sehnenwinkel.jpg'
import imgSehnenwinkelSkizze from '../../public/images/sehnenwinkel_skizze.png'

export default function Sehnenwinkel() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
        Sehnenwinkel
      </Text>
      <Text>
        Ein selbstgebauter Sehnenwinkel (tekichu jogi) mit Dreifachnutzen:
      </Text>
      <UnorderedList pl="6">
        <ListItem>Bestimmung der Aufspannhöhe</ListItem>
        <ListItem>Bestimmung des Nockpunktes</ListItem>
        <ListItem>Bestimmung der Lage der Nockpunktverstärkung auf der Sehne</ListItem>
      </UnorderedList>
      <Center>
        <Image src={imgSehnenwinkel} alt="Sehnenwinkel" px="6" width="full" maxWidth="400px" objectFit="contain" mr="auto"/>
      </Center>
      <Text fontSize="smaller" color="gray.700">
        Maße nach Toshio Mori (2015) und Günter Ismer (1996)
      </Text>
      <Text fontSize="2xl">
        Material:
      </Text>
      <Text>
      <UnorderedList pl="6">
        <ListItem>3 mm Sperrholz ca. 25 x 9 cm,</ListItem>
        <ListItem>Säge,</ListItem>
        <ListItem>Rund- oder Dreieckschlüsselfeile</ListItem>
        <ListItem>Holzleim,</ListItem>
        <ListItem>2 Leimzwingen,</ListItem>
        <ListItem>Schmirgelpapier</ListItem>
      </UnorderedList>
      </Text>
      <Text fontSize="2xl">
        Bauanleitung:
      </Text>
      <UnorderedList pl="6" spacing="2">
        <ListItem>Säge einmal die Grundform und die kleinen Sperrholzstreifen nach dem Muster aus.</ListItem>
        <ListItem>Leime die kleinen Steifen aufeinander, sodass eine lange Kante bündig ist und die andere im Durchmesser deiner Nockpunktverstärkung übersteht.</ListItem>
        <ListItem>Leime dann die beiden Streifen bündig an die 9 cm Seite der Grundform, so dass eine Nut entsteht, in die die Sehne gelegt werden kann.</ListItem>
        <ListItem>Zeichne entsprechend der Skizze einen Strich längs über den Sehnenwinkel, sodass dieser beim Anlegen genau auf das Nigiribushi zeigt.</ListItem>
        <ListItem>
          Markiere den Nockpunkt und säge eine Kerbe, sodass du dann deinen Nockpunkt gut auf der Sehne anzeichnen kannst. Je nach deiner Gewohnheit, den Pfeil einzunocken, markieren die Stelle bei,
          <UnorderedList pl="2">
            <ListItem>1,6 cm links der Anlegelinie, wenn du den Nockpunkt gerne über dem Pfeil siehst,</ListItem>
            <ListItem>1,2 cm links der Anlegelinie, wenn du den Nockpunkt gerne mittig des Pfeiles hast,</ListItem>
            <ListItem>0,8 cm links der Anlegelinie, wenn du den Nockpunkt gerne unter dem Pfeil siehst.</ListItem>
          </UnorderedList>
        </ListItem>
        <ListItem>Messe am schmalen Ende des Sehnenwinkels 14 / 15 / 16 cm ab, sodass du deine Aufspannhöhe ablesen kannst.</ListItem>
        <ListItem>Kanten glatt schmirgeln, fertig, Kosten: fast nix!</ListItem>
      </UnorderedList>
      <Text>
        Wenn du kein „Holzwurm“ bist, kannst du dir dieses Tool auch aus einem starken Pappkarton herstellen. 
      </Text>
      <Center>
        <Image src={imgSehnenwinkelSkizze} alt="Sehnenwinkel Skizze" px="6" width="full" maxWidth="400px" objectFit="contain" mr="auto"/>
      </Center>
      <Button size="sm">
        <a href={imgSehnenwinkelSkizze} download>
          Skizze herunterladen
        </a>
      </Button>
    </VStack>
  );
};