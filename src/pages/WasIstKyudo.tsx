import {
  Text,
  VStack,
} from "@chakra-ui/react";

export default function WasIstKyudo() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
        Was ist Kyudo?
      </Text>
      <Text>
        Unter Kyudo (kyu =Bogen; do =Weg) versteht man eine jahrhundertealte japanische Form des Bogenschießens.
        Der auffälligste Unterschied zum westlichen Bogenschießen liegt in der Verwendung des asymmetrischen,
        etwa 2,25 Meter langen japanischen Bogens ohne irgendwelche Visiereinrichtung oder Pfeilauflage, der Kleidung,
        die sich aus der des Samuraikriegers entwickelte und dem zeremoniellen Ablauf des Schießens.
        Zeremonielles Bogenschießen wurde in Japan bereits im achten Jahrhundert von den Samurai bei besonderen Anlässen vorgeführt.
        Die Energie und Schlagkraft des Kriegers wurden mit der Würde und Ästhetik der Zeremonie verbunden.
        Nachdem im 16. Jahrhundert Feuerwaffen eingeführt worden waren und der Bogen seine Bedeutung als Waffe verloren hatte,
        traten die geistigen Aspekte von Kyudo in den Vordergrund.
        <br/>
        Schon der Anfänger lernt schnell, dass nicht Wille und Ehrgeiz zu einem guten Trefferbild führen, sondern Konzentration,
        Gelassenheit und beständiges Üben mit korrekter Technik.
      </Text>
      <Text>
        Es ist schwer, Kyudo in herkömmliche Kategorien einzuordnen, denn
        <Text ml="8">Kyudo ist Budo</Text>
        <Text ml="8">Kyudo ist Philosophie</Text>
        <Text ml="8">Kyudo ist Kunst</Text>
        <Text ml="8">Kyudo ist Sport</Text>
        <Text ml="8">Kyudo ist Gesundheitserziehung</Text>
      </Text>
      <Text fontSize="small" pl="8">
        (Akiyama Terumi, Hanchi 8. Dan, aus Zanchin 1/2021)
      </Text>
      <Text fontSize="2xl">
        Für wen ist Kyudo?
      </Text>
      <Text>
        Kyudo ist eine eher introvertierte Übung, ohne spektakuläre äußere Aktionen.
        Kyudo schult Konzentrationskraft und Gelassenheit, es schärft die Körperwahrnehmung und wirkt sich positiv auf Körperhaltung,
        Balance und Bewegungskoordination aus. Kyudo ist aber auch geistiges Training zur Entwicklung der eigenen Persönlichkeit.
        Da es nicht auf Muskelkraft ankommt, sondern auf sensible Bewegungskoordination, ist Kyudo für Frauen und Männer jeden Alters geeignet. 
      </Text>
    </VStack>
  )
}