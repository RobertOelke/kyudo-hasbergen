import {
  Text,
  Center,
  Image,
  VStack
} from "@chakra-ui/react";
import kyudoka from '../../public/images/knienderkyudoka.gif'

function Home() {

  return (
    <VStack spacing="8">
      <Center>
        <Text fontSize="2xl" textAlign="center">
          Herzlich Willkommen im Silbersee-Dojo,
          <br/>
          Kyudo-Verein Hasbergen e.V.
        </Text>
      </Center>
      <Center>
        <Image src={kyudoka} alt="kniender-kyudoka" px="6" width="full" maxWidth="400px" objectFit="contain"/>
      </Center>
    </VStack>
  )
};

export default Home;