import React from 'react'
import ReactDOM from 'react-dom/client'
import CoreAppRouter from './Routers/CoreAppRouter'
import { BrowserRouter } from 'react-router-dom'

// Loaded CSS styles Start ----------------------------------------------------------------
import './Utilities/StyleUtils.css'
import './CommonComponents/CustomButton/CustomButtonStyles.css'
import './Components/AboutMe/AboutMeStyles.css'
import './Components/Header/HeaderStyles.css'
import './Components/Dashboard/DashboardStyles.css'
import './CommonComponents/CustomToasts/CustomToastStyles.css'
import './CommonComponents/TextInput/TextInputStyles.css'
import './Components/LoginAndSignup/LoginAndSignupStyles.css'
import './Components/Splash/SplashStyles.css'
import { Provider } from 'react-redux'
import ConfigureStore from './Redux/ConfigureStore'
export const store = ConfigureStore();
// Loaded CSS styles End ----------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <CoreAppRouter />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
