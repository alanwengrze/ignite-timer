import styled from "styled-components";

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
