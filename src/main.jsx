import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Route.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ContextHouse from './Context/ContextHouse.jsx'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextHouse>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ContextHouse>

  </React.StrictMode>,
)
