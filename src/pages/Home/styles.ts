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