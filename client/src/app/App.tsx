import { CssVarsProvider } from '@mui/material-next'
import { RouterProvider } from 'react-router-dom'
import { theme } from '../shared/confing/theme/theme'
import { router } from './Router'

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <RouterProvider router={router} />
    </CssVarsProvider>
  )
}

export default App
