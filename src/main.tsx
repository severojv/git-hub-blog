import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { GitContextProvaider } from './contextApiGit/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GitContextProvaider>
      <App />

    </GitContextProvaider>

  </StrictMode>,
)
