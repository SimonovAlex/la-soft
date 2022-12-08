import React, {FC} from 'react';
import { Flex, Image, Text} from "@chakra-ui/react";
import {Music} from "../api/types";

const AudioItem: FC<Omit<Music, "id" | "audio"  | "color">> = ({
  name, cover,  artist, active
}) => {
  return (
    <Flex py="1rem" px="2rem" bgColor={active? "#21d5e7" : "unset"} direction="row"
    >
      <Image src={cover} h="4rem" w="4rem" alt={name + artist} />
      <Flex  px='1rem' direction="column" justifyContent="center">
        <Text color="grey">
          {name}
        </Text>
        <Text fontSize="0.5rem" color="grey">
          {artist}
        </Text>
      </Flex>
    </Flex>
  );
};

export default AudioItem;