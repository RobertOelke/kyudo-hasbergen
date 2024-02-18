import { Box, ChakraProvider, Flex, extendTheme, useMediaQuery } from "@chakra-ui/react";
import DesktopFooter from "./components/DesktopFooter";
import { HashRouter, Route, Routes } from "react-router-dom";
import DesktopHeader from "./components/DesktopHeader";
import SideNavigation from "./components/SideNavigation";
import MobileHeader from "./components/MobileHeader";
import MobileFooter from "./components/MobileFooter";
import Home from "./pages/Home";
import Links from "./pages/Links";
import Impressum from "./pages/Impressum";
import TrainingsortZeit from "./pages/TrainingsortZeit";
import Training from "./pages/Training";
import KyudoKennenlernen from "./pages/KyudoKennenlernen";
import Kontakt from "./pages/Kontakt";
import Termine from "./pages/Termine";
import Geschichte from "./pages/Geschichte";
import WasIstKyudo from "./pages/WasIstKyudo";
import Sehnen from "./pages/Sehnen";
import Sehnenwinkel from "./pages/Sehnenwinkel";
import Pfeilstaender from "./pages/Pfeilstaender";
import Nachrichtenticker from "./pages/Nachrichtenticker";
import Vorstand from "./pages/Vorstand";
import Formulare from "./pages/Formulare";
import Pfeile from "./pages/Pfeile";

const theme = extendTheme({
  colors: {
    brand: {
      main: "#1A202C",
      bg: "#F8F8FA",
    },
  },
});

export default function App() {
  let [isPageWide] = useMediaQuery('(min-width: 800px)');
  let [isPageLarge] = useMediaQuery('(min-width: 1280px)');

  let routerSwitch = 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/links" element={<Links/>}/>
      <Route path="/impressum" element={<Impressum/>}/>
      <Route path="/trainingsort-zeit"element={<TrainingsortZeit/>}/>
      <Route path="/training" element={<Training/>}/>
      <Route path="/kyudo-kennenlernen" element={<KyudoKennenlernen/>}/>
      <Route path="/kontakt" element={<Kontakt/>}/>
      <Route path="/termine" element={<Termine/>}/>
      <Route path="/verein" element={<Geschichte/>}/>
      <Route path="/was-ist-kyudo" element={<WasIstKyudo/>}/>
      <Route path="/sehnen" element={<Sehnen/>}/>
      <Route path="/sehnenwinkel" element={<Sehnenwinkel/>}/>
      <Route path="/pfeilstaender" element={<Pfeilstaender/>}/>
      <Route path="/nachrichtenticker" element={<Nachrichtenticker/>}/>
      <Route path="/vorstand" element={<Vorstand/>}/>
      <Route path="/formulare" element={<Formulare/>}/>
      <Route path="/pfeile" element={<Pfeile/>}/>
    </Routes>

  
return (
  <ChakraProvider theme={theme}>
  {
    (isPageWide)
    ? (
      <HashRouter>
        <Flex height="100vh" width="100%" bg="brand.bg" overflowY="scroll" display="flex" flexDirection="column">
          <DesktopHeader />
          <Flex flex={1} direction="row" width="full" alignItems="stretch" alignContent="stretch"
                mx="auto" maxWidth="1540px">
            <Box flex={1} maxWidth="230px">
              <SideNavigation/>
            </Box>
            <Box flex={10} as="main" py="8" px={isPageLarge ? "20" : "12"} bgColor="white" minWidth="600px" maxWidth="1080px">
              {routerSwitch}
            </Box>
            {
              (isPageLarge)
              ? (<Box flex={1} maxWidth="230px"/>)
              : (<></>)
            }
          </Flex>
          <DesktopFooter/>
        </Flex>
      </HashRouter>
    )
    : (
      <Flex direction="column" height="100%" width="100vw" bg="brand.bg">
        <HashRouter>
          <Box as="header" top="0" left="0">
            <MobileHeader />
          </Box>
          <Box as="main" overflowY="auto" height="full" pt="4" px="2" pb="2">
            {routerSwitch}
          </Box>
          <MobileFooter/>
        </HashRouter>
      </Flex>
    )
  }
  </ChakraProvider>)
}