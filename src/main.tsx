import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyle } from './styles/themes/global.ts'
import { defaultTheme } from './styles/themes/default.ts'
import { ThemeProvider } from 'styled-components'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <App/>
      <GlobalStyle/>
    </ThemeProvider>
  </StrictMode>,
)
