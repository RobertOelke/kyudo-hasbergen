import {
  Box,
  Text,
  VStack,
  Center,
  Image
} from "@chakra-ui/react";
import { Map, Marker } from 'pigeon-maps';
import imgDojo from '../../public/images/dojo.jpg'

export default function TrainingsortZeit() {
  return (
    <VStack alignItems="start">
      <Text fontSize="2xl">
        Trainingszeit/-ort
      </Text>
      <Center>
        <Image src={imgDojo} alt="Dojo" width="full" maxWidth="800px" objectFit="contain" mr="auto"/>
      </Center>
      <Text>
        Jeden Montag ab 20:00 Uhr
        <br/>
        auf dem ehemaligen Heuboden Hof Gösman
        <br/>
        (unabhängig von Schulferien)
      </Text>
      <Text fontSize="2xl">
        Anfahrt
      </Text>
      <Box width="full" maxWidth="800px" height="350px">
        <Map defaultCenter={[52.24166, 7.95612]} defaultZoom={16}>
          <Marker anchor={[52.23964, 7.95710]} payload={1} onClick={() => {}} />
        </Map>
      </Box>
      <Text fontSize="sm" color="gray.500">
        Schulstraße 4, 49205 Hasbergen
      </Text>
    </VStack>
  );
};