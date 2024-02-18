import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  Image
} from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Lexikon from "../../public/documents/Lexikon.pdf";
import logoIcon from '../../public/images/logo-faecher.png';

type State = {show: boolean, expanded: string, currentRoute: string }

const reducer = (state: State, action: any) => {
  switch (action.type) {
    case 'SHOW_MENU':
      return { ... state, show: true };
    case 'HIDE_MENU':
      return { ... state, show: false, expanded: 'NONE' };
    case 'HIDE_AKTUELLES':
      return { ... state, expanded: 'NONE' };
    case 'SHOW_AKTUELLES':
      return { ... state, expanded: 'AKTUELLES' };
    case 'HIDE_WASISTKYUDO':
      return { ... state, expanded: 'NONE' };
    case 'SHOW_WASISTKYUDO':
      return { ... state, expanded: 'WASISTKYUDO' };
    case 'HIDE_VEREIN':
      return { ... state, expanded: 'NONE' };
    case 'SHOW_VEREIN':
      return { ... state, expanded: 'VEREIN' };
    case 'SHOW_SELBSTBAU':
      return { ... state, expanded: 'SELBSTBAU' };
    case 'HIDE_SELBSTBAU':
      return { ... state, expanded: 'NONE' };
    default:
      throw new Error();
  }
};

const routerToName = (s: string) => {
  switch (s) {
    case '/': return "Aktuelles";
    case '/kyudo-hasbergen': return "Aktuelles";
    case '/impressum': return "Impressum";
    case '/kontakt': return "Kontakt";
    case '/trainingsort-zeit': return "Trainingsort und -zeit";
    case '/kyudo-kennenlernen': return "Kyudo Kennenlernen";
    case '/was-ist-kyudo': return "Was ist Kyudo";
    case '/training': return "Training";
    case '/links': return "Links";
    case '/verein': return "Verein";
    case '/termine': return "Termine im Dojo";
    case '/pfeile': return "Pfeilbau";
    case '/sehnen': return "Sehnenbau";
    case '/sehnenwinkel': return "Sehnenwinkel";
    case '/pfeilstaender': return "Pfeilständer";
    case '/nachrichtenticker': return "Nachrichtenticker";
    case '/vorstand': return "Vorstand";
    case '/formulare': return "Formulare";
    default: return s;
  }
}

export default function MobileHeader() {
  const [state, dispatch] = React.useReducer(reducer, {show: false, expanded: 'NONE', currentRoute: ''});
  const location = useLocation();

  const handleToggle = () => {
    dispatch({type: state.show ? 'HIDE_MENU' : 'SHOW_MENU'});
  }

  return (
    <Box>
      <Flex justify="space-between"
            bg="brand.main"
            align="center"
            width="full"
            color="white">
        <Box height="50px" minWidth="50px" width="50px">
          <RouterLink to="/">
            <Box display="flex">
              <Image src={logoIcon} alt="logo" width="44px" height="44px" objectFit="contain" m="3px" />
            </Box>
          </RouterLink>
        </Box>

        <Box px="2" flex="1" minWidth="0px">
          <Text fontSize="2xl" isTruncated={true}>
            <span>{routerToName(location.pathname)}</span>
          </Text>
        </Box>

        <Box mr="2" onClick={handleToggle}>
          <svg
            fill="white"
            width="30px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            cursor="pointer"
            >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>
      </Flex>
      <VStack width="full" mt="2px" bg="brand.main" display={state.show ? "block" : "none"}
              spacing="2" px="4" py="2">
        {
          (state.expanded === 'AKTUELLES')
          ? (
            <VStack spacing="1" width="full" display="block">
              <Text cursor="pointer"
                    fontSize="xl"color="white"
                    onClick={() =>  dispatch({type: 'HIDE_AKTUELLES' })}>
                Aktuelles<ChevronDownIcon/>
              </Text>
              <Text fontSize="l" color="white" pl="6">
                <RouterLink to="/trainingsort-zeit" onClick={handleToggle}>Trainingsort und -zeit</RouterLink>
              </Text>
              <Text fontSize="l" color="white" pl="6">
                <RouterLink to="/kyudo-kennenlernen" onClick={handleToggle}>Kyudo Kennenlernen</RouterLink>
              </Text>
              <Text fontSize="l" color="white" pl="6">
                <RouterLink to="/nachrichtenticker" onClick={handleToggle}>Nachrichtenticker</RouterLink>
              </Text>
            </VStack>
          )
          : (
            <Text cursor="pointer" fontSize="xl" color="white" onClick={() => dispatch({type: 'SHOW_AKTUELLES'})}>Aktuelles<ChevronDownIcon/></Text>
          )
        }
        {
          (state.expanded === 'WASISTKYUDO')
          ? (
            <VStack spacing="1" width="full" display="block">
              <Text cursor="pointer"
                    fontSize="xl"color="white"
                    onClick={() =>  dispatch({type: 'HIDE_WASISTKYUDO' })}>
                Kyudo<ChevronDownIcon/>
              </Text>
              <Text cursor="pointer"
                    fontSize="l" color="white" pl="6"
                    onClick={handleToggle}>
                <RouterLink to="/was-ist-kyudo" onClick={handleToggle}>Was ist Kyudo</RouterLink>
              </Text>
              <Text cursor="pointer" fontSize="l" color="white" pl="6">
                <RouterLink to="/training" onClick={handleToggle}>Training</RouterLink>
              </Text>
              <Text cursor="pointer" fontSize="l" color="white" pl="6">
                <RouterLink to="/links" onClick={handleToggle}>Links</RouterLink>
              </Text>
              <Text cursor="pointer" fontSize="l" color="white" pl="6">
                <a href={Lexikon} target="_blank">
                  Lexikon
                </a>
              </Text>
            </VStack>
          )
          : (
            <Text cursor="pointer" fontSize="xl" color="white" onClick={() => dispatch({type: 'SHOW_WASISTKYUDO'})}>Kyudo<ChevronDownIcon/></Text>
          )
        }
        {
          (state.expanded === 'SELBSTBAU')
          ? (
            <VStack spacing="1" width="full" display="block">
              <Text cursor="pointer"
                    fontSize="xl"color="white"
                    onClick={() =>  dispatch({type: 'HIDE_SELBSTBAU' })}>
                DIY im Kyudo<ChevronDownIcon/>
              </Text>
              <Text cursor="pointer"
                    fontSize="l" color="white" pl="6"
                    onClick={handleToggle}>
                <RouterLink to="/sehnen" onClick={handleToggle}>Sehnen</RouterLink>
              </Text>
              <Text cursor="pointer" fontSize="l" color="white" pl="6">
                <RouterLink to="/pfeile" onClick={handleToggle}>Pfeile</RouterLink>
              </Text>
              <Text cursor="pointer" fontSize="l" color="white" pl="6">
                <RouterLink to="/sehnenwinkel" onClick={handleToggle}>Sehnenwinkel</RouterLink>
              </Text>
              <Text cursor="pointer" fontSize="l" color="white" pl="6">
                <RouterLink to="/pfeilstaender" onClick={handleToggle}>Pfeilständer</RouterLink>
              </Text>
            </VStack>
          )
          : (
            <Text cursor="pointer" fontSize="xl" color="white" onClick={() => dispatch({type: 'SHOW_SELBSTBAU'})}>DIY im Kyudo<ChevronDownIcon/></Text>
          )
        }
        {
          (state.expanded === 'VEREIN')
          ? (
            <VStack spacing="1" width="full" display="block">
              <Text cursor="pointer"
                    fontSize="xl"color="white"
                    onClick={() =>  dispatch({type: 'HIDE_VEREIN' })}>
                Verein<ChevronDownIcon/>
              </Text>
              <Text cursor="pointer"
                    fontSize="l" color="white" pl="6"
                    onClick={handleToggle}>
                <RouterLink to="/verein" onClick={handleToggle}>Geschichte</RouterLink>
              </Text>
              <Text cursor="pointer"
                    fontSize="l" color="white" pl="6"
                    onClick={handleToggle}>
                <RouterLink to="/vorstand" onClick={handleToggle}>Vorstand</RouterLink>
              </Text>
              <Text fontSize="l" color="white" pl="6">
                <RouterLink to="/termine" onClick={handleToggle}>Termine im Dojo</RouterLink>
              </Text>
              <Text fontSize="l" color="white" pl="6">
                <RouterLink to="/formulare" onClick={handleToggle}>Formulare</RouterLink>
              </Text>
            </VStack>
          )
          : (
            <Text cursor="pointer" fontSize="xl" color="white" onClick={() => dispatch({type: 'SHOW_VEREIN'})}>Verein<ChevronDownIcon/></Text>
          )
        }
      </VStack>
    </Box>
  );
}