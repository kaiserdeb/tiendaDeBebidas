import { NavBar, 
  //ItemCount,
  ItemListContainer, 
  ItemDetailContainer } from './components';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const onAdd = (qty) => {
  //   alert(`Agregaste ${qty} productos`);
  // };
  return (
    <>
    <div className="page d-flex flex-column justify-content-between">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/> }/>
        <Route path='/item/:id' element={ <ItemDetailContainer /> }/>
        <Route path='/category/:category' element={ <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/> }/>
      </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}
export default App;