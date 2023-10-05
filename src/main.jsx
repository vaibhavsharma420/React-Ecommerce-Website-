import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './context/ProductContext.jsx';
import { FilterContextProvider} from './context/Filter_Context.jsx';
import { CartProvider } from './context/Cart_Context.jsx';
/*import './index.css'*/

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  
);
