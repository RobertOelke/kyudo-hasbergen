import {
  Table,
  Thead,
  Tbody,
  Th,
  Tr,
  Td,
  VStack,
} from "@chakra-ui/react";

export default function Termine() {
  const termine2021 = [
    { datum: "08.02.2021", termin: "Bohnenfest", ort: "Dojo" },
    { datum: "11.02.2021", termin: "Jahr des Stier, jüngeres Metall", ort: "Dojo" },
    { datum: "13.02.2021", termin: "Neujahrsschießen", ort: "Dojo" },
    { datum: "22.03.2021", termin: "Ehrung der Matoschützen, Frühlingsanfang ", ort: "Dojo" },
    { datum: "19.04.2021", termin: "Kirschblütenfest", ort: "Dojo" },
    { datum: "27.04.2021", termin: "Schnupperabend", ort: "Dojo" },
    { datum: "14.06.2021", termin: "Reisfest", ort: "Dojo" },
    { datum: "22.06.2021", termin: "Schnupperabend", ort: "Dojo" },
    { datum: "11.09.2021", termin: "Wettkampf um den Sgönaunken", ort: "Dojo" },
    { datum: "12.09.2021", termin: "Präsentation zum Tag des offenen Denkmals", ort: "Dojo" },
    { datum: "27.09.2021", termin: "Herbstanfang", ort: "Dojo" },
    { datum: "11.10.2021", termin: "Fest der Kämpfer", ort: "Dojo" },
    { datum: "01.11.2021", termin: "Kulturtag", ort: "" },
    { datum: "15.11.2021", termin: "Sieben-Fünf-Drei-Fest", ort: "Dojo" },
  ]

  const termine2022 = [
    { datum: "07.02.2022", termin: "Bohnenfest", ort: "Dojo" },
    { datum: "11.02.2022", termin: "Beginn Jahr des Tigers (Wasser)", ort: "Dojo" },
    { datum: "Februar/März", termin: "Bundesliga 1", ort: "Dojo" },
    { datum: "05.03.2022", termin: "Neujahrsschießen", ort: "Dojo" },
    { datum: "21.03.2022", termin: "Ehrung der Mato-Schützen, Frühlingsanfang ", ort: "Dojo" },
    { datum: "April/Mai ", termin: "Bundesliga 2 ", ort: "Dojo" },
    { datum: "18.04.2022", termin: "Kirschblütenfest", ort: "Dojo" },
    { datum: "27.04.2022", termin: "Schnupperabend", ort: "Dojo" },
    { datum: "30.04.2022", termin: "Niedersachsenmeisterschaft", ort: "Alte Turnhalle Hasbergen" },
    { datum: "Juni /Juli/August", termin: "Bundesliga 3", ort: "Dojo" },
    { datum: "13.06.2022", termin: "Reisfest", ort: "Dojo" },
    { datum: "07.06.2022", termin: "Schnupperabend", ort: "Dojo" },
    { datum: "27.08.2022", termin: "Wettkampf um den Sgönauken", ort: "Dojo" },
    { datum: "September/Oktober", termin: "Bundesliga 4", ort: "Dojo" },
    { datum: "11.09.2022", termin: "Präsentation zum Tag des offenen Denkmals", ort: "Dojo" },
    { datum: "26.09.2022", termin: "Herbstanfang", ort: "Dojo" },
    { datum: "10.10.2022", termin: "Fest der Kämpfer", ort: "Dojo" },
    { datum: "01.11.2022", termin: "Kulturtag", ort: ""},
    { datum: "14.11.2022", termin: "Sieben-Fünf-Drei-Fest", ort: "Dojo" },
  ]

  const termine2023 = [
    { datum: "21.01.2023", termin: "Neujahrsschießen anschl. Mitgliederversammlung", ort: "Dojo" },
    { datum: "4/5.02.2023", termin: "Anfängerseminar bis 1. Kyu R. Pohl", ort: "Wolfsburg" },
    { datum: "06.02.2023", termin: "Bohnenfest", ort: "Dojo" },
    { datum: "Februar / März", termin: "1. Runde Bundesliga", ort: "Dojo" },
    { datum: "18.03.2023", termin: "Niedersachsenmeisterschaft", ort: "Wolfsburg" },
    { datum: "April / Mai", termin: "2. Runde Bundesliga", ort: "Dojo" },
    { datum: "29.04.2023", termin: "Saisoneröffnung Außendojo", ort: "Streuobstwiese vor Hof Gösmann" },
    { datum: "12.06.2023", termin: "Reisfest", ort: "Dojo" },
    { datum: "17.06.2023", termin: "100 Pfeile Turnier", ort: "Dojo oder Streuobstwiese" },
    { datum: "Juni / Juli / August", termin: "3. Runde Bundesliga", ort: "Dojo" },
    { datum: "02.07.2023", termin: "Enteki-Turnier", ort: "Dojo" },
    { datum: "September / Oktober", termin: "4. Runde Bundesliga", ort: "Dojo" },
    { datum: "02.09.2023", termin: "Wettkampf um den Sgönaunken", ort: "Dojo oder Streuobstwiese" },
    { datum: "10.09.2023", termin: "Kyudo Präsentation zum Tag des offenen Denkmals", ort: "Dojo oder Streuobstwiese" },
    { datum: "09.10.2023", termin: "Fest der Kämpfer", ort: "Dojo" },
    { datum: "06.11.2023", termin: "Kulturtag", ort: "Kulturraum Hof Gösmann" },
    { datum: "13.11.2023", termin: "Shichi go san", ort: "Dojo" },
  ]

  return (
    <VStack>
      <Table>
        <Thead>
          <Tr>
            <Th>Datum</Th>
            <Th>Termin</Th>
            <Th>Ort</Th>
          </Tr>
        </Thead>
        <Tbody>
          {termine2023.map((item) =>
            <Tr>
              <Td>{item.datum}</Td>
              <Td>{item.termin}</Td>
              <Td>{item.ort}</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </VStack>
  )
}