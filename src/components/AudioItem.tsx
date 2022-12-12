import React, {FC} from 'react';
import { Flex, Image, Text} from "@chakra-ui/react";
import {Music} from "../api/types";
import {useListController} from "../hooks/useListController";

const AudioItem: FC<Omit<Music, "audio"  | "color">> = ({
 id, name, cover,  artist,
}) => {

  const { setById, isCurrentAudio } = useListController();

  return (
    <Flex py="1rem" px="2rem" bgColor={isCurrentAudio(id)? "#21d5e7" : "unset"} direction="row"
          _hover={{
            bgColor:"#b0f1f8",
            cursor: 'pointer'
          }}
          onClick={() => setById(id)}
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