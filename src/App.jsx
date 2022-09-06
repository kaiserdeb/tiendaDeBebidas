import { NavBar,
  Cart,
  ItemListContainer, 
  ItemDetailContainer,
 } from './components';
 import { CartProvider } from './contexts/CartProvider'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div className="page d-flex flex-column justify-content-between">
      <CartProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={ <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/> }/>
          <Route path='/item/:id' element={ <ItemDetailContainer /> }/>
          <Route path='/category/:category' element={ <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/> }/>
          <Route path='/cart' element={ <Cart /> }/>
        </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
    </>
  );
}
export default App;