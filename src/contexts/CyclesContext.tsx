import { createContext, useState, useReducer } from "react";
import { Cycle, cyclesReducer, ActionTypes } from "../reducers/cycles";


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
  });

  const [amountSecondsPassed , setAmountSecondsPassed] = useState(0)
  const { cycles, activeCycleId } = cyclesState

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

    dispatch({
      type: ActionTypes.ADD_NEW_CYCLE,
      payload: {
        newCycle
      },
    })

    // add the new cycle to the state (list of cycles)
    // setCycles((state) => [...state, newCycle])

    // set the active cycle id
    cyclesState.activeCycleId = newCycle.id

    // reset the seconds passed
    setSecondsPassed(0)
  }
  
  function interruptCurrentCycle() {

    dispatch({
      type: ActionTypes.INTERRUPT_CURRENT_CYCLE,
      payload: {
        activeCycleId
      },
    })
  }

  function markCurrentCycleAsFinished() {

    dispatch({
      type: ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED,
      payload: {
        activeCycleId
      },
    })

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