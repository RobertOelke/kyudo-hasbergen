import {
  Box,
  VStack,
  Text,
  Link,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons"

export default function Impressum() {
  return (
    <VStack spacing="4" alignItems="start" mx="4">
      <Text fontSize="2xl">
        Impressum
      </Text>
      <Text>
        <b>Kyudo-Verein Silbersee-Dojo Hasbergen e.V.</b>
        <br/>
        Eingetragen im Vereinsregister:
        <br/>
        Amtsgericht Osnabrück VR 2112 vom 25.2.1986
        <br/>
        SteuerNr. 
        <br/>
        65/270/09260
      </Text>
      <Box>
        <Text fontWeight="semibold">
          Rechtlicher Vertreter (gemäß § 26 BGB):
        </Text>
        <Text>
          Annegret Kollmeier-Loew,
          <br/>
          Bültestraße 176,
          32584 Löhne
          <br/>
          <Link href="mailto:vorstand@kyudo-hasbergen.de" isExternal>
            <EmailIcon mr="1"/>vorstand@kyudo-hasbergen.de
          </Link>
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">
          Redaktion:
        </Text>
        <Text>
          Udo Meyer,
          <br/>
          Am Botterbusch 1a,
          49504 Lotte
          <br/>
          <Link href="info@kyudo-hasbergen.de" isExternal>
            <EmailIcon mr="1"/>info@kyudo-hasbergen.de
          </Link>
        </Text>
      </Box>
      <br/>
      <Box>
        <Text fontWeight="semibold">
          Haftung für Inhalte
        </Text>
        <Text>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt.
          Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
          Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
          <br/>
          Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">
          Haftung für Links
        </Text>
        <Text>
          Diese Internetseite enthält Links zu extenen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
          Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
          Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">
          Urheber- und Leistungsschutzrechte
        </Text>
        <Text>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
          Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
          Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
          Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
          Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis.
          Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">
          Kontakt
        </Text>
        <Text>
          Nehmen Sie per E-Mail Kontakt mit uns auf, so speichern wir Ihre Angaben zum Zweck der Bearbeitung ihrer Anfrage.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="semibold">
          Cookies
        </Text>
        <Text>
          Diese Internetseite verwendet keine Cookies.
        </Text>
      </Box>
    </VStack>
  );
};