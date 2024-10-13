import { createContext, useState } from "react";

interface Cycle{
  id: string;
  task: string;
  minutesAmount: number;
  startDate: Date;
  interruptedDate?: Date;
  finishedDate?: Date;
}

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
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  const [amountSecondsPassed , setAmountSecondsPassed] = useState(0)

  // get the active cycle
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

    // Create a new cycle (submit)
  function createNewCycle(data: CreateCycleData) {
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
    setSecondsPassed(0)

  }
  
  function interruptCurrentCycle() {
    // search for cycle by id and interrupt it
    setCycles(state => 
      state.map((cycle) => {
      if(cycle.id === activeCycleId){
        return {...cycle, interruptedDate: new Date()}
      }else {
        return cycle
      }
    }))
    setActiveCycleId(null)
  }

  function markCurrentCycleAsFinished() {
    setCycles(state => 
      state.map(cycle => {
        if(cycle.id === activeCycleId){
          return {...cycle, finishedDate: new Date()}
        }else {
          return cycle
        }
      })
    )
    // setActiveCycleId(null)
  }

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

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