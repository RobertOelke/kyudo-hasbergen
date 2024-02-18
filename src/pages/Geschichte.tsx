import {
  Text,
  VStack,
  Image,
  Center,
} from "@chakra-ui/react";
import imgbogenschuetze from '../../public/images/bogenschuetze.jpg';

export default function Geschichte() {
  return (
    <VStack spacing="4" alignItems="start">
      <Text fontSize="2xl">
        Vereinsgeschichte
      </Text>
      <Text>
        Der Kyudoverein Silbersee Dojo Hasbergen e.V, wurde am 17. Juli 1985 in Hasbergen auf Initiative von Michael Ende gegründet, der Kyudo 1982 in Hannover bei Eva-Maria Mentz kennengelernt hatte.
      </Text>
      <Center>
        <Image src={imgbogenschuetze} alt="Bogenschütze" px="6" width="full" maxWidth="450px" objectFit="contain" mr="auto"/>
      </Center>
      <Text>
        Schon einem Monat nach Gründung hatte der Verein mit dem ehemaligen Heuboden des Hofes Gösmann einen Trainingsraum erhalten und konnte nach dem Verlegen des Bodens und der Beleuchtung im November mit dem Trainingsbetrieb beginnen. Im Laufe der Jahre hat das Dojo sein jetziges Aussehen und Ausstattung erhalten. Das Bild des überlebensgroßen Kyudoschützen von Friedhelm Kükelmann an der Stirnseite stammt noch aus dem Gründungsjahr.
      </Text>
      <Text>
        Der Verein ist über den Niedersächsischen Judobund Mitglied im Deutschen Kyudobund, ebenso im Kreissportbund und dem Landessportbund. 
      </Text>
      <Text>
        Seit 2003 richtet der Verein das Sgönauken-Turnier aus, zu dem die Kyudovereine aus Niedersachsen eingeladen werden. Die Kyujin des Silbersee-Dojos nehmen seit Jahren mit 2-3 Mannschaften an der Kyudo-Bundesliga teil.
      </Text>
    </VStack>
  );
};