import React from 'react';
import {Flex, Image, Text} from "@chakra-ui/react";
import AudioController from "./AudioController";
import {useListController} from "../../hooks/useListController";

const Player = () => {

  const {currentAudio} = useListController();

  return (
    <Flex w="100%" h="100%" px="8rem" py="5rem" flexDirection="column" justifyContent="center" alignItems="center">
      <Image h="20rem" w="20rem" src={currentAudio.cover} alt={currentAudio.name + currentAudio.artist}
             borderRadius="30px"/>
        <Text pt="5rem" fontSize="0.75rem" color="grey">
          { currentAudio.artist}
        </Text>
      <Text py="4rem" fontSize="2rem">
        { currentAudio.name}
      </Text>
      <AudioController />
    </Flex>

  );
};

export default Player;