import React from "react"

import PlayList from "./components/PlayList";
import { Flex} from "@chakra-ui/react";
import Player from "./components/Player";

export const App = () => {
  return (
    <Flex w="100vw" h="100vh" overflow="hidden">
      <PlayList />
      <Player />
    </Flex>

  )
}
