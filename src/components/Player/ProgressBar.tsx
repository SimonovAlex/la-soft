import React, {FC} from 'react';
import {Box, Flex, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Tooltip} from "@chakra-ui/react";
import {getDisplayTimeBySeconds} from "../../utils";

interface Props {
  duration: number,
  progress: number,
  onChangeTime: (v: number) => void;
}

const ProgressBar: FC<Props> = ({
                                  duration,
                                  progress,
                                  onChangeTime,
                                }) => {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <Flex>
      <Box px="2rem">
        {getDisplayTimeBySeconds(progress, duration)}
      </Box>
      <Slider
        id='slider'
        defaultValue={0}
        value={progress}
        min={0}
        max={duration}
        colorScheme='teal'
        onChange={onChangeTime}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack>
          <SliderFilledTrack/>
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={getDisplayTimeBySeconds(progress, duration)}
        >
          <SliderThumb/>
        </Tooltip>
      </Slider>
      <Box px="2rem">
        {getDisplayTimeBySeconds(duration, duration)}
      </Box>
    </Flex>
  );
};

export default ProgressBar;
