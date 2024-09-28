import { useEffect, useState } from "react";
import { CountDownContainer, Separator } from "./styles";
import { differenceInSeconds } from "date-fns";

interface CountdownProps {
  minutes: number;
  seconds: number;
}
export function Countdown({minutes, seconds}: CountdownProps) {
  const [amountSecondsPassed , setAmountSecondsPassed] = useState(0)

  // get the amount of seconds
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;

  useEffect(() => {
    let interval: number

    if(activeCycle){
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(new Date(), activeCycle.startDate)

        if(secondsDifference >= totalSeconds){
          handleInterruptCycle()
          clearInterval(interval)
          return
        }else{
          setAmountSecondsPassed(secondsDifference)
        }
  
      }, 1000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])
  
  return(
    <CountDownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountDownContainer>
  )
}