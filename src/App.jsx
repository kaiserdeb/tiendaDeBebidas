import { NavBar, 
  //ItemCount,
  //ItemListContainer, 
  ItemDetailContainer } from './components';
import './App.css';

function App() {
  // const onAdd = (qty) => {
  //   alert(`Agregaste ${qty} productos`);
  // };
  return (
    <>
    <div className="page d-flex flex-column justify-content-between">
      <NavBar/>
      <div className='container mt-4 px-lg-5'>
        <div className="row justify-content-md-center">
          <div className="col-lg-10 col-md-12">
            {/* <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/> */}
            {/* <ItemCount stock={5} initial={0} onAdd={onAdd}/> */}
            <ItemDetailContainer/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;