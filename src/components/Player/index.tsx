import React from 'react';
import {Flex, Image, Text} from "@chakra-ui/react";
import {v4 as uuidv4} from "uuid";
import AudioController from "./AudioController";

const Player = () => {

  const currentAudio = {
    name: "Beaver Creek",
    cover: "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Aso, Middle School, Aviino",
    audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    color: ["#205950", "#2ab3bf"],
    id: uuidv4(),
    active: true,
  };

  return (
    <Flex w="100%" h="100%" px="8rem" py="5rem" flexDirection="column" justifyContent="center" alignItems="center">
      <Image h="20rem" w="20rem" src={currentAudio.cover} alt={currentAudio.name + currentAudio.artist}
             borderRadius="30px"/>
        <Text>
          { currentAudio.artist}
        </Text>
      <Text>
        { currentAudio.name}
      </Text>
      <AudioController />
    </Flex>

  );
};

export default Player;