import {useEffect, useRef, useState} from "react";
import {useListController} from "./useListController";

export function usePlayer() {
  const {currentAudio, next} = useListController();

  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(new Audio(currentAudio.audio));
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const toggle = () => setIsPlaying(v => !v)

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        next();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, 1000);
  }

  const play = () => {
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .then(() => startTimer())
  }

  const stop = () => {
    audioRef.current.pause();
    setIsPlaying(false)
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if (isPlaying) {
      play();
    } else {
      stop();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(currentAudio.audio);
    setTrackProgress(audioRef.current.currentTime);
    audioRef.current.onloadeddata = () => play();
  }, [currentAudio]);

  const changeTime = (value: number) => {
    if( value >= audioRef.current.duration ){
      next();
      play();
      return;
    }

    if( value <= 0){
      audioRef.current.currentTime = 0;
      setTrackProgress(0);
      return;
    }

    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  return {toggle, duration: audioRef.current.duration ,isPlaying, changeTime, trackProgress };
}