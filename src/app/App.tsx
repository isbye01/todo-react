import { useState } from 'react'
import Button from '@mui/material/Button'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppBar from '../shared/ui-kit/AppBar.tsx'
import {ThemeProvider,createTheme} from "@mui/material"
import CssBaseline from "@mui/material/CssBaseline";

const LightMode = createTheme({
    palette: {
        mode: "light"
    }
})

const DarkMode = createTheme({
    palette: {
        mode: "dark"
    }
})

function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')
  const [isdarkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
      setDarkMode(!isdarkMode);
  }

  return (
    <>
      <AppBar />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button variant={'contained'} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
      </div>
      <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <p>text is {text}</p>
      </div>
      <ThemeProvider theme={isdarkMode? DarkMode : LightMode}>
          <CssBaseline/>
          <div style={{height:'100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button variant={'contained'} onClick={toggleDarkMode}> переключить тему</Button>
          </div>
      </ThemeProvider>
</>
  )
}

export default App
