import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";
import logoIgnite from "../../assets/logo.svg"
import { NavLink } from "react-router-dom";
export function Header(){
  return(
    <HeaderContainer>
      <img src={logoIgnite} alt="Dois triângulos verdes sobrepostos" />
      <nav>
        <NavLink to="/" title="Timer"><Timer /></NavLink>
        <NavLink to="/history" title="Histórico"><Scroll /></NavLink>
      </nav>
    </HeaderContainer>
  )
}