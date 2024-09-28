import { HandPalm, Play } from "phosphor-react";

import { 
  HomeContainer, 
  StartCountDownButton, 
  StopCountDownButton
} from "./styles";
import { useEffect, useState } from "react";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";

interface Cycle{
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
} 

export function Home(){

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  
  // Create a new cycle (submit)
  function handleCreateNewCycle(data: NewCycleFormData) {
    // create a cycle (like a Cycle interface) based on the data
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    // add the new cycle to the state (list of cycles)
    setCycles((state) => [...state, newCycle])

    // set the active cycle id
    setActiveCycleId(newCycle.id)

    // reset the seconds passed
    setAmountSecondsPassed(0)

    // reset the form
    reset()
  }
  
  function handleInterruptCycle() {
    
    // search for cycle by id and interrupt it
    setCycles(state => 
      state.map(cycle => {
      if(cycle.id === activeCycleId){
        return {...cycle, interruptedDate: new Date()}
      }else {
        return cycle
      }
    }))

    setActiveCycleId(null)
  }

  // get the active cycle
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  // get the amount of seconds remaining
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  console.log(activeCycle)

  // watch for changes in the task input (controlled input)
  const task = watch('task')
  const isSubmitDisabled = !task

  useEffect(() => {
    if(activeCycle){
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        
        <NewCycleForm />
        <Countdown />
        {
          activeCycle ? (

          <StopCountDownButton 
            type="button"
            onClick={handleInterruptCycle}
          >
            <HandPalm size={24} />
            Interromper
          </StopCountDownButton>
            
          ) : (
          <StartCountDownButton 
            type="submit"
            disabled={isSubmitDisabled}
          >
            <Play size={24} />
            Começar
          </StartCountDownButton>
          )
        }
      </form>
    </HomeContainer>
  )
}