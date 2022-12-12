import React from 'react';
import {Button, Flex, IconButton} from "@chakra-ui/react";
import { ReactComponent as PlayIcon}  from "../../icons/play.svg";
import { ReactComponent as StopIcon}  from "../../icons/stop.svg";
import { ReactComponent as PreviousIcon}  from "../../icons/previous.svg";
import { ReactComponent as NextIcon}  from "../../icons/next.svg";

import ProgressBar from "./ProgressBar";
import {useListController} from "../../hooks/useListController";
import {usePlayer} from "../../hooks/usePlayer";

const AudioController = () => {
  const {next, prev} = useListController();
  const { duration, isPlaying, toggle, trackProgress, changeTime} = usePlayer();

  return (
    <Flex w="100%" direction="column">
      <ProgressBar duration={duration} progress={trackProgress} onChangeTime={changeTime} />
      <Flex justifyContent="space-around" mt="4rem" >
          <Button  bg='transparent'  onClick={() => changeTime(trackProgress - 5)}>-5</Button>
          <IconButton icon={<PreviousIcon />}  bg='transparent' aria-label='previous' onClick={prev}/>
          <IconButton icon={isPlaying? <StopIcon /> : <PlayIcon />} bg='transparent' aria-label='start stop' onClick={toggle}/>
          <IconButton icon={<NextIcon />} bg='transparent' aria-label='next' onClick={next}/>
          <Button  bg='transparent'  onClick={() => changeTime(trackProgress + 5)}>+5</Button>
      </Flex>
    </Flex>
  );
};

export default AudioController;