import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 118rem;
  height: calc(100vh - 16rem);
  margin: 8rem auto;
  padding: 4rem;

  background-color: ${props => props.theme.colors.gray800};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`