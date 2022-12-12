import React from "react";

export const AudioContext = React.createContext({
  index: 0,
  setIndex: (v: number) => {}
});