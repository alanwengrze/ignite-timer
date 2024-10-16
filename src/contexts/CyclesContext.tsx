import { createContext, useState, useReducer, useEffect } from "react";
import { Cycle, cyclesReducer } from "../reducers/cycles/reducer";
import { addNewCycleAction, interruptCurrentCycleAction, markCurrentCycleAsFinishedAction } from "../reducers/cycles/actions";
import { differenceInSeconds } from "date-fns";

interface CreateCycleData {
  task: string;
  minutesAmount: number;
}

interface CyclesContextType {
  cycles: Cycle[]
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
  children: React.ReactNode
}

export function CyclesContextProvider({children}: CyclesContextProviderProps) {
  const [cyclesState, dispatch] = useReducer(cyclesReducer,
  {
    cycles: [],
    activeCycleId: null
  }, (initialState)=>{
    const storageStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')
    if(storageStateAsJSON){
      return JSON.parse(storageStateAsJSON)
    }
    return initialState
  });

  const { cycles, activeCycleId } = cyclesState

  // get the active cycle
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  const [amountSecondsPassed , setAmountSecondsPassed] = useState(()=>{
    // reset value with 0 seconds
    if(activeCycle){
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }
    return 0
  })

    // Create a new cycle (submit)
  function createNewCycle(data: CreateCycleData) {
    // create a cycle (like a Cycle interface) based on the data
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    dispatch(addNewCycleAction(newCycle))

    // reset the seconds passed
    setSecondsPassed(0)
  }
  
  function interruptCurrentCycle() {

    dispatch(interruptCurrentCycleAction())
  }

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
  }, [cyclesState])
  return(
    <CyclesContext.Provider 
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        setSecondsPassed,
        createNewCycle,
        markCurrentCycleAsFinished,
        interruptCurrentCycle
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}