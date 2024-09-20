import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { 
  CountDownContainer, 
  FormContainer, 
  HomeContainer, 
  MinutesAmountInput, 
  Separator, 
  StartCountDownButton, 
  TaskInput 
} from "./styles";
import { useState } from "react";

// Create a new zod schema
const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, 'Informe a tarefa'),
  minutesAmount: z.number().min(5).max(60),
  owner: z.string().optional()
})

// Create a new zod type (infer get the type of the schema)
type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

interface Cycle{
  id: string;
  task: string;
  minutesAmount: number
} 

export function Home(){

  const [cycles, setCycles] = useState<Cycle[]>([]);
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null);
  
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0
    }
  });

  // Create a new cycle (submit)
  function handleCreateNewCycle(data: NewCycleFormData) {
    // create a cycle (like a Cycle interface) based on the data
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount
    }

    // add the new cycle to the state
    setCycles((state) => [...state, newCycle])

    // set the active cycle id
    setActiveCycleId(newCycle.id)

    // reset the form
    reset()
  }

  // get the active cycle
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId);

  console.log(activeCycle)

  // watch for changes in the task input (controlled input)
  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput 
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Projeto 1"/>
            <option value="Projeto 2"/>
            <option value="Projeto 3"/>
            <option value="Banana"/>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput 
            id="minutesAmount" 
            type="number"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', {valueAsNumber: true})}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton 
          type="submit"
          disabled={isSubmitDisabled}
        >
          <Play size={24} />
          Começar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}