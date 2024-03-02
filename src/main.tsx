import React from 'react'
import ReactDOM from 'react-dom/client'
import CoreAppRouter from './Routers/CoreAppRouter'
import { BrowserRouter } from 'react-router-dom'

// Loaded CSS styles Start ----------------------------------------------------------------
import './Utilities/StyleUtils.css'
import './CommonComponents/TextInput/TextInputStyles.css'
import './Components/LoginAndSignup/LoginAndSignupStyles.css'
import './Components/Splash/SplashStyles.css'
// Loaded CSS styles End ----------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CoreAppRouter />
    </BrowserRouter>
  </React.StrictMode>,
)
