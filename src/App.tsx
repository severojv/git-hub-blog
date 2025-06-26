import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/thems/default'
import { GlobalStyles } from './styles/thems/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>

  )
}

export default App
