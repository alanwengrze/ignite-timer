import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1{
    font-size: 2.4rem;
    color: ${props => props.theme.colors.gray100};
  }

`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table{
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th{
      background: ${props => props.theme.colors.gray600};
      padding: 1.6rem;
      text-align: left;
      color: ${props => props.theme.colors.gray100};
      font-size: 1.4rem;
      line-height: 1.6;

      /* Aplica o border-radius somente na primeira e última coluna */
      &:first-child{
        border-top-left-radius: 8px;
        padding-left: 2.4rem;
      }

      &:last-child{
        border-top-right-radius: 8px;
        padding-right: 2.4rem;
      }
    }

    td{
      background: ${props => props.theme.colors.gray700};
      border-top: 4px solid ${props => props.theme.colors.gray800};
      padding: 1.6rem;
      font-size: 1.4rem;
      line-height: 1.6;

      &:first-child{
        width: 50%;
        padding-left: 2.4rem;
      }

      &:last-child{
        padding-right: 2.4rem;
      }
    }
  }
`
const STATUS_COLOR = {
  yellow: 'yellow500',
  red: 'red500',
  green: 'green500'
} as const
interface StatusProps {
  statusColor:  keyof typeof STATUS_COLOR;
}
export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before {
    content: '';
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 9999px;
    background: ${(props ) => props.theme.colors[STATUS_COLOR[props.statusColor]]};
  }
`