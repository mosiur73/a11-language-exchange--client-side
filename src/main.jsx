import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './component/Style/Style.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <AuthProvider>
 <div className='w-full min-h-screen'>
 <RouterProvider router={router}></RouterProvider>
 </div>
 </AuthProvider>
  </StrictMode>,
)
