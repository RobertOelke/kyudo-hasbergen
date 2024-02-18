import {
  Text,
  VStack,
  Center,
  Image,
  OrderedList,
  ListItem,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import Sehnengalgen from '../../public/images/Sehnengalgen.gif';
import Schutzw1 from '../../public/images/Schutzw1.gif';
import Schutzw2 from '../../public/images/Schutzw2.gif';
import Schutzw3 from '../../public/images/Schutzw3.gif';

export default function Sehnen() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
        Herstellen von Bogensehnen 
      </Text>
      <Text>
        <b>Material:</b> Fastflight- oder Kevlar-Sehenegarn, Wickelgarn (z.B. Fastflight Nr. 2), rotes und violettes / dunkelblaues Schleifenband, Textilkleber
        <br/>
        <b>Hilfsmittel:</b>	Sehnengalgen, Wickelgerät, Klammer
        <br/>
        <b>Werkzeug:</b> Messer, Schere, Bleistift, Maßband
      </Text>
      <Text fontSize="2xl">
        Herrichten der Hilfsmittel
      </Text>
      <OrderedList>
        <ListItem>
          Sehnengalgen aufbauen (nachfolgend ist ein handelsübliches Gerät abgebildet;
          man kann aber auch hilfsweise 4, im festen Abstand voneinander aufgebaute Rundstäbe mit einem Gesamtaußenumfang von 286 cm verwenden).
          <Center>
            <Image src={Sehnengalgen} alt="Sehnengalgen" px="6" width="full" maxWidth="400px" objectFit="contain" mr="auto"/>
          </Center>
        </ListItem>
        <ListItem>
          Wickelgerät mit dem Wickelgarn bestücken.
        </ListItem>
        <ListItem>
          Ein Stück Wickelgarn (ca. 15 cm) abschneiden und bereit legen.
        </ListItem>
      </OrderedList>
      <Text fontSize="2xl">
        Wickeln der Sehne
      </Text>
      <Text>
        Sehnengarnende an Stab "C" mit Klammer befestigen und im Uhrzeigersinn 13 mal um alle Stäbe führen; an Stab "D" abschneiden.
        Das so erhaltene Ende ungefähr in der Mitte zwischen "D" und "C" auf der Sehne verknoten; Überhang belassen.
        Das an "C" befestigte Ende lösen, unter dem Knoten hervorziehen und dicht neben dem ersten Knoten ebenfalls verknoten (zwischen diesen beiden Knoten wird später die Sehne durchgeschnitten).
      </Text>
      <Text fontSize="2xl">
        Anbringen der Schutzwicklungen
      </Text>
      <OrderedList>
        <ListItem>
          Links vom linken Knoten beginnend, unter Miteinwickeln des freien Sehnenendes die untere Schutzwicklung anbringen.
          Länge: 26 cm. (Man legt mit dem Wickelgarn einen einfachen Knoten um die Sehne und wickelt das freie Ende ca. 2 cm mit ein.)
          Das Ende der Schutzwicklung wird, wie in den nachfolgenden Bildern dargestellt, festgelegt.
          <br/>
          <Wrap mt="4">
            <WrapItem>
              <Center>
                <Image src={Schutzw1} alt="Schutzw1" px="6" width="full" maxWidth="300px" objectFit="contain" mr="auto"/>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Image src={Schutzw2} alt="Schutzw2" px="6" width="full" maxWidth="300px" objectFit="contain" mr="auto"/>
              </Center>
            </WrapItem>
            <WrapItem>
              <Center>
                <Image src={Schutzw3} alt="Schutzw3" px="6" width="full" maxWidth="300px" objectFit="contain" mr="auto"/>
              </Center>
            </WrapItem>
          </Wrap>
        </ListItem>
        <ListItem>
          Schutzwicklung nach rechts, an der rechten Seite des rechten Knotens beginnend, mit 28 cm Länge anlegen.
        </ListItem>
        <ListItem>
          8,5 cm vom rechten Rand der rechten Schutzwicklung entfernt beginnend, nach rechts laufend eine 3 cm lange Wicklung zum Schutz gegen das Anschlagen der Sehne gegen die Kante der oberen Bogenspitze anbringen.
        </ListItem>
        <ListItem>
          Über die rechte Schutzwicklung rotes Schleifenband wickeln und mit Textilkleber fixieren, über die Linke violettes (dunkelblaues für 4-sun-nobi).
        </ListItem>
        <ListItem>
          Kleber aushärten lassen und Sehne zwischen den Knoten durchtrennen.
        </ListItem>
      </OrderedList>

      <Text fontSize="2xl">
        Anpassend der Sehne
      </Text>
      <OrderedList>
        <ListItem>
          Sehnenknoten am oberen und unteren Sehnenende herstellen.
        </ListItem>
        <ListItem>
          Ein Auge über einen der Stäbe schieben und durch das andere einen Knebel stecken; mit Hilfe des Knebels die Sehne bis auf die Länge einer fertigen verdrillen.
        </ListItem>
        <ListItem>
          Sehne auf den Bogen spannen und mehrfach bis zum Vollauszug aufspannen (jede neue Sehne "setzt" sich; dadurch wird mehrmaliges Nachverdrillen erforderlich).
        </ListItem>
        <ListItem>
          Wenn die Sehne ihre Aufspannhöhe beibehält, auf dem Bogen mit kleinem Lederlappen warm reiben (das Wachs am Sehnengarn verläuft und die Sehne glättet sich).
        </ListItem>
        <ListItem>
          Sitz der Nockpunktverstärkung festlegen und Nockpunktwicklung am aufgespannten Bogen mit dem Wickelgerät aufbringen.
        </ListItem>
      </OrderedList>
    </VStack>
  )
}