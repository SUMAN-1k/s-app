import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import './Header.css';
import Product from './Product';
import './Product.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Header/>
    <div className="ding">
    <Product name="Urbanic dress" price="3500" url="https://tse4.mm.bing.net/th?id=OIP.0EPXSa2SKZVOndbu1BKUXwAAAA&pid=Api&P=0&h=180"/>
    <Product name="Rare beauty" price="30000" url="https://tse4.mm.bing.net/th?id=OIP.dYapuQgdXCEiXU6RZ1HsxAHaFj&pid=Api&P=0&h=180"/>
    <Product name="Apple watch" price="19000" url="https://tse3.mm.bing.net/th?id=OIP.e9GMiEwOZA2neV4JBfJjwQHaHa&pid=Api&P=0&h=180"/>
   </div>
    <App />
  
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
