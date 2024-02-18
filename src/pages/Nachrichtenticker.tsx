import {
  Text,
  VStack,
  Center,
  Image,
} from "@chakra-ui/react";
import imgAdventsschiessen from "../../public/images/adventsschiessen.jpg";
import imgNiedersachsenmeister from "../../public/images/niedersachsenmeister.jpg";
import imgNiedersachsenmeisterschaft2022 from "../../public/images/niedersachenmeisterschaft_2022.jpg";
import imgNiedersachsenmeisterschaft2023 from "../../public/images/niedersachenmeisterschaft_2023.jpg";
import entekiTaikaiWolfsburg2022 from "../../public/images/EntekiTaikaiWolfsburg.jpg";

function Nachrichtenticker() {
  return (
    <VStack spacing="12" alignItems="start">

      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">
          Niedersachsenmeisterschaft 2023
        </Text>
        <Text>
          10 Mannschaften trafen sich am 18. März in Wolfsburg, um die niedersächsische Kyudomeisterschaft auszuschießen.
          Das Silbersee-Dojo aus Hasbergen meldete 2 Mannschaften, die als sehr erfreuliches Ergebnis den 3. und 4. Platz belegten, zumal wir auch den Vizemeister im Einzelschießen aus unseren Reihen beglückwünschen können.
        </Text>
        <Text>
          Vielen Dank an unseren Landestrainer Markus, der so souverän für eine ruhigen und konzentrierte Atmosphäre während der Meisterschaft sorgte und an das Orgateam, das uns mit selbst gerollten Sushi und anderen Köstlichkeiten kulinarisch verwöhnte.
        </Text>
        <Text>
          Die Kyudoka des Silbersee-Dojos konnten in diesem Jahr an ihre gute Form des Vorjahres anknüpfen. 
        </Text>
        <Center>
          <Image src={imgNiedersachsenmeisterschaft2023} alt="Niedersachsenmeisterschaft" px="6" width="full" maxWidth="900px" objectFit="contain"/>
        </Center>
      </VStack>

      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">
          Gute Wettkampferfolge und eifrige Lehrgangsteilnahme 2022
        </Text>
        <Text>
          Die Kyudoka des Silbersee-Dojos konnten in diesem Jahr an ihre gute Form des Vorjahres anknüpfen. 
        </Text>
        <Text>
          Ende April fand die Niedersachsenmeisterschaft im Kyudo in Hasbergen statt.
          Die 1. Mannschaft aus Hasbergen (Arnd Hellwig, Daniel Hülsmann und Robert Oelke) erreichte den 2. Platz, im Einzel kam Arnd Hellwig auf den 3. Platz.
          Der 1. Platz ging an die Mannschaft aus Wardenburg, Platz 3 an die Mannschaft aus Wolfsburg.
        </Text>
        <Center>
          <Image src={imgNiedersachsenmeisterschaft2022} alt="Niedersachsenmeisterschaft" px="auto" width="full" maxWidth="700px" objectFit="contain"/>
        </Center>
      </VStack>

      <VStack spacing="2" alignItems="start">
        <Text>
          Das Seminar mit Roland Pohl und der Übungsleiterlehrgang mit Johannes Maringer im Juni und Juli haben viele Hasberger Schützen in ihrer Schießtechnik nach der Heki Schule einen großen Schritt weitergebracht.
        </Text>
      </VStack>

      <VStack spacing="2" alignItems="start">
        <Text>
          Das Resultat zeigte sich prompt beim Enteki Taikai (Wettkampf über 60 m Schussdistanz) am 1. Feriensonntag in Wolfsburg.
          Mit dem 2. Platz von Daniel Hülsmann und dem 3. Platz nach Stechen von Annegret Kollmeier-Loew stellte Hasbergen die beiden erfolgreichsten niedersächsischen Schützen.
          Herzlichen Glückwunsch an den Sieger Christian aus Berlin!
        </Text>
        <Center>
          <Image src={entekiTaikaiWolfsburg2022} alt="Enteki Taikai" px="6" width="full" maxWidth="900px" objectFit="contain"/>
        </Center>
      </VStack>

      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">
          Hasberger Kyudo-Bogenschützen werden Niedersachsenmeister
        </Text>
        <Text>
          Am Sonntag trafen sich Niedersachsens Kyudo-Bogenschützen in der OGS-Sporthalle Kronsberg in Hannover zur Ausrichtung ihrer Landesmeisterschaften.
        </Text>
        <Text>
          Kyudo ist das japanische Langbogenschießen, dass in Deutschland ca. 2.000 Schützen betreiben.
          In Hasbergen wird diese Sportart nach Gründung des Vereins Silbersee-Dojo Hasbergen durch Michael Ende seit 36 Jahren betrieben.
          Die beste Platzierung, die Hasbergen bei Meisterschaften erreichte, war bisher ein dritter Platz.
          Doch an diesem Wochenende konnten sie sich gegen die starken Mannschaften aus Hannover, Wolfsburg, Hildesheim, Göttingen und Wardenburg (bei Oldenburg) durchsetzen.
        </Text>
        <Text>
          Geschossen wurde in Dreiermannschaften (Tachi) in 5 Durchgängen auf eine 28 Meter entfernte Scheibe (Mato) mit einem japanischen Langbogen ohne technische Zielhilfsmittel.
          Der Abschuss vom 2,25 Meter langen Bogen ist asymmetrisch und erfordert deshalb eine besondere Schießtechnik.
        </Text>
        <Text>
          Am Ende des Wettkampfes gingen die Hasberger Schützen Robert Oelke, Daniel Hülsmann und Dr. Arnd Hellwig als Sieger aus der Halle.
        </Text>
        <Text>
          In der Einzelwertung hatten Robert Oelke und der Landesverbandsvorsitzende Jürgen Salomon aus Hannover die gleiche Trefferzahl.
          Sie lieferten sich ein drei Runden dauerndes Stechen, bei dem Robert Oelke Jürgen Salomon den Vortritt lassen musste.
        </Text>
        <Text>
          Die Hasberger Bogenschützen werden die nächste Niedersachenmeisterschaft am 30. April 2022 ausrichten.
        </Text>
        <div>
          <Center>
            <Image src={imgNiedersachsenmeister} alt="Niedersachsenmeisterschaft" px="6" width="full" maxWidth="900px" objectFit="contain"/>
          </Center>
          <Center>
            <Text fontSize="14px">V. l.: Robert Oelke, Daniel Hülsmann und Dr. Arnd Hellwig</Text>
          </Center>
        </div>

      </VStack>

      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">
          15. Sgönauken Turnier
        </Text>
        <Text>
          am 2. Septembersamstag im Kyudo Verein Hasbergen,
          wir treffen uns bei bedecktem Himmel auf der Streuobstwiese neben Gösmann’s Hof und bauen unser neues Außendojo auf.
        </Text>
        <Text>
          Pünktlich um 14.00 Uhr beginn der Wettkampf um den Sgönauken und als Ziele dienen nicht die üblichen Kasumimatos mit 36 cm Durchmesser,
          sondern verschiedene Ziele: größere und kleinere, waagerechte und senkrechte, nahe und dieses Jahr zum ersten Mal das Entekimato auf 60 Meter.
          Die Schützen müssen zwar wie immer genau die Mitte des Zieles anvisieren, jedoch wirken die verschiedenen Formen irritierend.
        </Text>
        <Text>
          In diesem Jahr kommt als zusätzliche Schwierigkeit die für viele ungewohnte Situation im Freien dazu.
          Drei Schützen liegen relativ schnell vorn, Robert aus Osnabrück gewinnt das Turnier dann aber souverän.
        </Text>
        <Text>
          Herzlichen Glückwunsch! 
        </Text>
      </VStack>

      <VStack spacing="2" alignItems="start">
        <Text fontSize="2xl">
          Adventszeit 2020, Lockdown
        </Text>
        <Text>
          Die niedersächsische Corona-Verordnung erlaubt uns nur das Schießen zu zweit mit strengem Hygienekonzept.
          Also gibt es jetzt mehrere Trainingspaare, die sich zu vereinbarten Terminen im Dojo treffen.
        </Text>
        <Text>
          Eigentlich sind wir ja noch gut dran, Vereine, die Sporthallen benutzen, haben eine veritable Zwangspause.
          Aber ein kleiner vereinsinterner Wettkampf soll das einsame Training auflockern: Wer trifft die Kerze auf dem Adventskranz?
        </Text>
        <Text>
          Die Aufgabe, ein Ziel mit 10 cm Durchmesser auf 28 Metern zu treffen, ist für die meisten von uns eine Herausforderung, aber damit auch unsere „Anfänger“ Erfolgserlebnisse haben, vergrößern wir kurzerhand die Trefferfläche drumherum auf 50 cm.
          Im Verlauf der 3 Adventswochen schießen wir 3 Durchgänge und mit 68 Punkten ist Daniel der Spitzenreiter, zumal er und Arnd auch eine bzw. zwei getroffene Kerze an den Weihnachtsbaum hängen können.
          Eine gelungene Aktion, die wieder Lust macht auf bessere Trainingszeiten.
        </Text>
        <Image src={imgAdventsschiessen} alt="Adventsschiessen" px="6" width="full" maxWidth="700px" objectFit="contain"/>
      </VStack>
    </VStack>
  );
};

export default Nachrichtenticker;