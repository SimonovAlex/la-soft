import React from 'react';
import {ButtonGroup, Flex, IconButton} from "@chakra-ui/react";
import { ReactComponent as PlayIcon}  from "../../icons/play.svg";
import { ReactComponent as StopIcon}  from "../../icons/stop.svg";
import { ReactComponent as PreviousIcon}  from "../../icons/previous.svg";
import { ReactComponent as NextIcon}  from "../../icons/next.svg";

import ProgressBar from "./ProgressBar";

const AudioController = () => {
  return (
    <Flex w="100%" direction="column">
      <ProgressBar />
      <Flex justifyContent="space-around" mt="4rem" >
          <IconButton icon={<PreviousIcon />}  bg='transparent' aria-label='previous'/>
          <IconButton icon={<PlayIcon />} bg='transparent' aria-label='start stop'/>
          <IconButton icon={<NextIcon />} bg='transparent' aria-label='next'/>
      </Flex>
    </Flex>
  );
};

export default AudioController;