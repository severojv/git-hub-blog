import { ThemeProvider } from 'styled-components'
import './App.css'
import { defaultTheme } from './styles/thems/default'
import { GlobalStyles } from './styles/thems/global'
import { Cover } from './components/Cover'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Cover></Cover>
    </ThemeProvider>

  )
}

export default App
