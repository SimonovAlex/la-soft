import useChillHopList from "../api/useChillHopList";
import {useContext} from "react";
import {AudioContext} from "../context/AudioContext";


export function useListController () {
  const playerList = useChillHopList();

 const { index, setIndex } = useContext(AudioContext);

  const next = () => {
    if (index < playerList.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const prev = () => {
    if (index - 1 < 0) {
      setIndex(playerList.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const setById = (id: string) => {
    const idx = playerList.findIndex(i => i.id === id);
    setIndex(idx);
  };

  const isCurrentAudio = (id: string) => {
    return id === playerList[index].id;
  }

  return {next, prev, setById, isCurrentAudio, currentAudio: playerList[index]}
}