import React from 'react';
import {ButtonGroup, Flex, IconButton} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { ReactComponent as StartIcon }  from "../../icons/start.svg";


import ProgressBar from "./ProgressBar";

const AudioController = () => {
  return (
    <Flex w="100%">
      <ProgressBar />
      <Flex>
        <ButtonGroup>
          <IconButton icon={<ChevronLeftIcon />}  aria-label='previous'/>
          <IconButton icon={<StartIcon />}  aria-label='start stop'/>
          <IconButton icon={<ChevronRightIcon />}  aria-label='next'/>
        </ButtonGroup>

      </Flex>
    </Flex>
  );
};

export default AudioController;