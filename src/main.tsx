import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import QualquerCoisa from './App' - Export não nomeado, o dev o nomeia e pode alterar o seu nome como quiser, ms pode gerar problemas
import { App } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <QualquerCoisa /> */}
    <App />
  </StrictMode>,
)
