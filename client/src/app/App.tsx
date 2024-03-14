import { CssVarsProvider } from '@mui/material-next'
import { RouterProvider } from 'react-router-dom'
import { theme } from '../shared/confing/theme/theme'
import { appRouter } from './router/appRouter'

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <RouterProvider router={appRouter()} />
    </CssVarsProvider>
  )
}

export default App
