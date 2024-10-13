import { HandPalm, Play } from "phosphor-react";

import { 
  HomeContainer, 
  StartCountDownButton, 
  StopCountDownButton
} from "./styles";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { NewCycleForm } from "./NewCycleForm";
import { Countdown } from "./Countdown";
import { useContext } from "react";
import { CyclesContext } from "../../contexts/CyclesContext"


// Create a new zod schema
const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z.number().min(1).max(60),
  owner: z.string().optional()
})

// Create a new zod type (infer get the type of the schema)
type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home(){
  const { activeCycle, createNewCycle, interruptCurrentCycle } = useContext(CyclesContext)
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  const { handleSubmit, watch, reset } = newCycleForm

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data)
    reset()
  }
  
  // watch for changes in the task input (controlled input)
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}  action="">  
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />
        {
          activeCycle ? (

          <StopCountDownButton 
            type="button"
            onClick={interruptCurrentCycle}
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