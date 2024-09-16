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
  font-size: 1.8rem;
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
`;

export const TaskInput = styled(BaseInput)`
  /* Flex: 1 é um shorthand (atalho) para aplicar o flex-grow, flex-shrink e flex-basis ao elemento. 
  flex-grow define se o elemento pode aumentar. 
  flex-shrink define se o elemento pode reduzir.
  flex-basis define se o elemento vai aumentar ou reduzir.
  */
  flex: 1;
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
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

export const StartCountDownButton = styled.button`
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

  background: ${props => props.theme.colors.green500};
  color: ${props => props.theme.colors.gray100};

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