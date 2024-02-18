import {
  Text,
  VStack,
  Center,
  Image,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";
import imgPfeilstaender from '../../public/images/pfeilstaender.jpg';

function Pfeilstaender() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
        Pfeilständer
      </Text>
      <Text>
        transportabel, leicht und stabil für 4-6 Pfeile
      </Text>
      <Center>
        <Image src={imgPfeilstaender} alt="Pfeilständer" px="6" width="full" maxWidth="350px" objectFit="contain" mr="auto"/>
      </Center>
      <Text fontSize="2xl">
        Material
      </Text>
      <UnorderedList pl="6">
        <ListItem>
          1 Reststück eines defekten Alupfeils 2015, ca. 50 - 70 cm lang
        </ListItem>
        <ListItem>
          1 Holzgardinenring Ø ca, 7 cm
        </ListItem>
        <ListItem>
          Eine 4 mm Maschinenschraube mit  Mutter
        </ListItem>
        <ListItem>
          1 Holzstück ca. 10 x 10 x 2 cm (oder welche Form man gerne hätte)
        </ListItem>
        <ListItem>
          1 Sperrholzplatte ca. 10 x 10 x 0.5 cm (entsprechend für oben)
        </ListItem>
      </UnorderedList>
      <Text>
        Bohrmaschine, 4er und 8er Bohrer, Lochbohrer 6 cm o.ä.
        Holzfeile, Schmirgelpapier, Holzleim, mehrere Leimzwingen
      </Text>
      <Text fontSize="2xl">
        Bauanleitung:
      </Text>
      <UnorderedList pl="6">
        <ListItem>
          Bohre mit dem 4er Bohrer ein Loch in den Gardinenring und körne an der Innenseite das Bohrloch etwas aus, damit später die Schraube nicht vorsteht.
        </ListItem>
        <ListItem>
          Bohre mit dem 4er Bohrer ein Loch ca. 3 cm vom Ende des Pfeilstücks. Damit sich der Alupfeil nicht eindrückt, kannst du den Pfeil an der Bohrstelle mit einen eingeklebten Holzdübel stabilisieren.
        </ListItem>
        <ListItem>
          Durchbohre mit dem Lochbohrer das Holzstück und bohre mit dem 8er Bohrer daneben ein Loch durch, in das du später den Aluschaft stecken kannst.
          Du kannst aber auch ein Holzklötzchen o.ä. aufleimen und dann mit dem 8er Bohrer durchbohren, damit der Aluschaft fester steht.
        </ListItem>
        <ListItem>
          Jetzt die Sperrholzplatte in der Form deines Holzstückes aufleimen, so dass deine Löcher einen Boden bekommen.
          Leimzwingen aufsetzen und einen Tag trocknen lassen.
        </ListItem>
        <ListItem>
          Schmirgeln und Kanten brechen, nach Belieben lackieren.
        </ListItem>
      </UnorderedList>
      <Text fontSize="2xl">
        Zusammenbau:
      </Text>
      <Text>
      Den Gardinenring und Aluschaft mit der Schraube verbinden, den Pfeilschaft in das 8er Loch der Grundplatte stecken und die eigenen Pfeile durch den Gardinenring in die Aussparung der Grundplatte stellen. Fertig. 
      <br/>
      Kosten: fast nix, da alles aus Reststücken gebaut werden kann.
      <br/>
      Ohne Holzständer, aber mit Spitze hast du einen guten Pfeilständer, wenn du auf einer Wiese schießen willst!
      </Text>
    </VStack>
  )
}

export default Pfeilstaender;