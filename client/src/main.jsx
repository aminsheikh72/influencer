import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from 'react'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './features/store.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
<<<<<<< Updated upstream
<<<<<<< HEAD
  <StrictMode>
    <BrowserRouter>
    
=======
 
    
   
      <Provider store={store}>
         <QueryClientProvider client={queryClient}>
>>>>>>> e9716cfa57db93857112698faad1dc14114346f5
      <App />
      </QueryClientProvider>
=======



      <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                  <App />
            </QueryClientProvider>
>>>>>>> Stashed changes
      </Provider>


)