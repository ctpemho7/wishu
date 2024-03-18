import { CssVarsProvider } from '@mui/material-next'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { theme } from '../shared/confing/theme/theme'
import { AppDialog } from '../shared/ui/AppDialog'
import { appRouter } from './router/appRouter'

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <React.Fragment>
        <RouterProvider router={appRouter()} />
        <AppDialog />
      </React.Fragment>
    </CssVarsProvider>
  )
}

export default App
