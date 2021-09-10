import React from 'react';
import './App.css';
import Header from './view/header/Header';
import MenuPage from './view/menu/menuPage';
function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
       <Header
       count={count}/>
       <MenuPage
       cartCount = {count}
       setCartCount={setCount}/>
    </div>
  );
}

export default App;
