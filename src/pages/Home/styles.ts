import styled from "styled-components"

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;

  }


`;
export const FormContainer = styled.div`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${props => props.theme.colors.gray100};
  font-size: 1.6rem;
  font-weight: 700;
  flex-wrap: wrap;

`;

const BaseInput = styled.input`
  background: transparent;
  height: 4rem;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.gray500};
  font-weight: 700;

  /* O valor inherit herda o valor do elemento pai, que nesse caso é o FormContainer */
  font-size: inherit;
  padding: 0 1.6rem;
  color: ${props => props.theme.colors.gray100};

  /* Para tirar o outline quando clica no input */
  &:focus{
    box-shadow: none;
    border-color: ${props => props.theme.colors.green500};
  }

  /* Estilizar o placeholder */
  &::placeholder {
    color: ${props => props.theme.colors.gray500};
  }

  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const TaskInput = styled(BaseInput)`
  /* Flex: 1 é um shorthand (atalho) para aplicar o flex-grow, flex-shrink e flex-basis ao elemento. 
  flex-grow define se o elemento pode aumentar. 
  flex-shrink define se o elemento pode reduzir.
  flex-basis define se o elemento vai aumentar ou reduzir.
  */
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 4.8rem;
  padding: 0 0 0 0.8rem;
`;


export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${props => props.theme.colors.gray100};

  display: flex;
  gap: 1.6rem;

  span{
    background: ${props => props.theme.colors.gray700};
    padding: 3.2rem 1.6rem;
  }
`;

export const Separator = styled.div`
  padding: 2.4rem 0;
  color: ${props => props.theme.colors.green500};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const BaseCountDownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1.6rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;
  font-weight: bold;

  cursor: pointer;

  color: ${props => props.theme.colors.gray100};

`;

export const StartCountDownButton = styled(BaseCountDownButton)`

  background: ${props => props.theme.colors.green500};

  /* Aplica o hover apenas se o botão não estiver desabilitado */
  &:not(:disabled):hover{
    background: ${props => props.theme.colors.green700};
  }
  /* Desabilitado */
  &:disabled{
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StopCountDownButton = styled(BaseCountDownButton)`

  background: ${props => props.theme.colors.red500};

  &:hover{
    background: ${props => props.theme.colors.red700};
  }

`;