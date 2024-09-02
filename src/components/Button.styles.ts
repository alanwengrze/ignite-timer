import styled from "styled-components";

//define as possíveis variantes de cores
export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger';

//fornece 
interface ButtonContainerProps {
  variant: ButtonVariant
}

//define as cores de cada variante
const buttonVariants = {
  primary: 'red',
  secondary: 'green',
  success: 'blue',
  danger: 'yellow',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.colors.green300};
  color: ${props => props.theme.colors.gray100};
  
  /* passa a cor de acordo com base na variante */
  /* ${ props => `background-color: ${buttonVariants[props.variant]};`
  } */

`;