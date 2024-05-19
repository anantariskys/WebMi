import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Route from './routes/Route'

import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route/>
  </React.StrictMode>,
)
