import styled from "styled-components";

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