import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './Index.tsx'
import './index.css'
import CartContext from './CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CartContext>
      <Index />
    </CartContext>
  </React.StrictMode>,
)
