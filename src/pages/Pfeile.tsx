import {
  Text,
  VStack,
  UnorderedList,
  ListItem
} from "@chakra-ui/react";

function Pfeile() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
      Herstellen von Kyudo-Pfeilen (Matoya)
      </Text>
      <Text fontSize="2xl">
        Material
      </Text>
      <UnorderedList pl="6">
        <ListItem>4 Stück EASTON-Aluschäfte 2015 xx 0075</ListItem>
        <ListItem>sechs linke, sechs rechte Federn (günstig Truthahn, keine Federn von Vögeln, die unter das Washingtoner Artenschutzabkommen fallen!)</ListItem>
        <ListItem>4 Stück Spitzen</ListItem>
        <ListItem>4 Stück Nocken</ListItem>
        <ListItem>Kleber für Federn, Spitzen und Nocken</ListItem>
        <ListItem>Fotokarton</ListItem>
        <ListItem>farbiges Nähgarn</ListItem>
        <ListItem>Ponal o ä.</ListItem>
        <ListItem>Nagellack (klar)</ListItem>
      </UnorderedList>
      <Text fontSize="2xl">
        Hilfsmittel
      </Text>
      <Text>
        Befiederungsgerät, Schnittschablone event. Halterung zum Formschnitt der Federn
      </Text>
      <Text fontSize="2xl">
        Werkzeug
      </Text>
      <Text>
        Rohrschneider o. Metallsäge, Schere, Schlüsselfeile, Ziehklinge, Hammer, Messer, Pinsel
      </Text>
      <Text fontSize="2xl">
        1. Herrichten der Hilfsmittel
      </Text>
      <Text>
        Schnittschablone für Federn: Umriss einer nicht abgenutzten Federfahne auf  Fotokarton übertragen; diese Schablone ausschneiden.
        Die Länge der Fahne sollte 1/6-tel der Pfeillänge betragen.
      </Text>
      <Text fontSize="2xl">
        2. Vorbereiten der Pfeilschäfte
      </Text>
      <Text>
        Pfeilschaft auf Auszugslänge (Kehlkopfmitte bis Ende Mittelfinger bei ausgestrecktem rechtem Arm / Hand) plus 6 cm, bei Anfängern plus 10 cm, bringen.
        <br/>
        Markierungen für die Wicklungen anbringen (vom Schaftende Richtung Spitze: 8 mm Wicklung – 8 mm Freiraum – 18 mm Wicklung – Federlänge – 28 mm Wicklung).
        <br/>
        Spitze anbringen
        <br/>
        Nocke einkleben und innen rund feilen.
        <br/>
        Die beiden Wicklungen am Schaftende (8 u. 18 mm) anbringen und lackieren ( siehe 5. Abschließende Arbeiten).
        <br/>
        Schaft im Befiederungsbereich staub- und fettfrei putzen.
      </Text>
      <Text fontSize="2xl">
        3. Vorbereiten der Federn
      </Text>
      <Text>
        Nach Art, Musterung und rechts / links (HAYA / OTOYA) sortieren.
        <br/>
        Federkiel mit Messer aufspalten und knapp entlang der Fahne nachschneiden.
        <br/>
        Den Kiel auf Fahnenlänge zuzüglich 2 cm vor Beginn der Fahne ablängen.
        <br/>
        Beginnend am vorderen Kielende 2 cm weit die Fahne vom Kiel abschneiden.
        <br/>
        Den so erhaltenen Rohling in die Federklammer des Befiederungsgeräts nehmen und den Federkiel glattschleifen.
        <br/>
        Zum Formschnitt der Federn Schablone auflegen und daran entlang überstehende Fahnen mit Hilfe von Ziehklinge und Hammer abschlagen oder, mit der Federschneidhilfe in Form bringen.
      </Text>
      <Text fontSize="2xl">
        4. Befiedern der Pfeile
      </Text>
      <Text>
        Federn mit Hilfe eines Befiederungsgerätes mit handelsüblichem Federnkleber oder Pattex ankleben.
      </Text>
      <Text fontSize="2xl">
        5. Abschließende Arbeiten
      </Text>
      <Text>
        Freie Kielenden mit Messer oder Feile allseitig anschrägen.
        <br/>
        Ohne Verwendung von Kleber Wicklungen aus Nähgarn anbringen.
        Fertige Wicklungen zweimal mit dünnem Ponal überstreichen; zwischendurch mit feinem Schmirgelpapier vorsichtig hochstehende Nähgarnfasern abschleifen.
        <br/>
        Nach Austrocknen 2 x mit Nagellack überziehen.
      </Text>
      <Text>
        Zum Erkennen der eigenen Pfeile kann eine Signatur entweder zwischen der Federend- und der Nockwicklung oder zwischen der Stellfeder und der dem Schützen zugewandten Feder angebracht werden.
      </Text>
      <Text>
        Der fertige Pfeil sollte seinen Schwerpunkt bei halber Gesamtlänge vermindert um 3 cm, von der Spitze aus gemessen, haben.
      </Text>
    </VStack>
  )
}

export default Pfeile;