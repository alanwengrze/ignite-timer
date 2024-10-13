import { CyclesContextProvider } from "./contexts/CyclesContext"
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
export function App() {
  return (
    <BrowserRouter>
      <CyclesContextProvider>
        <Router />
      </CyclesContextProvider>  
    </BrowserRouter>
  );
}