const addHeadingZero = (num: number): string => {
  return num > 9 ? num.toString() : `0${num}`
}

export const getDisplayTimeBySeconds = (seconds: number, totalSeconds: number): string => {

  if(isNaN(seconds)){
    if (totalSeconds >= 3600) {
      return "00:00:00"
    } else {
      return "00:00"
    }
  }

  const min = Math.floor(seconds / 60)
  const minStr = addHeadingZero(min)
  const secStr = addHeadingZero(Math.floor(seconds % 60))
  const minStrForHour = addHeadingZero(Math.floor(min % 60))
  const hourStr = Math.floor(min / 60)

  const mmSs = `${minStr}:${secStr}`
  const hhMmSs = `${hourStr}:${minStrForHour}:${secStr}`

  if (totalSeconds >= 3600) {
    return hhMmSs
  } else {
    return mmSs
  }
}