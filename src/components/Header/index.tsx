import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import { NavLink } from "react-router-dom";
export function Header(){
  return(
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Timer"><Timer /></NavLink>
        <NavLink to="/history" title="Histórico"><Scroll /></NavLink>
      </nav>
    </HeaderContainer>
  )
}