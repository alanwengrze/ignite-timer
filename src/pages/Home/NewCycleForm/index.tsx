import { useFormContext } from "react-hook-form";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";
import { useContext } from "react";
import { CyclesContext } from "../../../contexts/CyclesContext";


export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return(
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput 
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
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
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', {valueAsNumber: true})}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}