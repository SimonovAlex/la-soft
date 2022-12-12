import React from 'react';
import {Box, Heading} from "@chakra-ui/react";
import useChillHopList from "../api/useChillHopList";
import AudioItem from "./AudioItem";

const PlayList: React.FC = () => {

  const chillHopList = useChillHopList();

  return (
    <Box w="20rem" h="100%" boxShadow="lg" overflowY="scroll"
      sx={{
       '&::-webkit-scrollbar': {
         width: '4px',
         borderRadius: '8px',
         backgroundColor: `rgba(0, 0, 0, 0.05)`,
       },
       '&::-webkit-scrollbar-thumb': {
         backgroundColor: `rgba(0, 0, 0, 0.05)`,
       },
      }}
    >
      <Heading p='2rem'>Library</Heading>
      {chillHopList.map(i => <AudioItem key={i.id} {...i} />)}
    </Box>
  );
};

export default PlayList;