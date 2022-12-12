import React, {useState} from "react"

import PlayList from "./components/PlayList";
import { Flex} from "@chakra-ui/react";
import Player from "./components/Player";
import {AudioContext} from "./context/AudioContext";

export const App = () => {
  const [index, setIndex] = useState(0);

  return (
    <Flex w="100vw" h="100vh">
      <AudioContext.Provider value={{index, setIndex }}>
        <PlayList />
        <Player />
      </AudioContext.Provider>
    </Flex>

  )
}
