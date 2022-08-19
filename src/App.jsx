import { NavBar, ItemListContainer,ItemCount } from './components';
import './App.css';

function App() {
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };
  return (
    <>
    <div className="page d-flex flex-column justify-content-between">
      <NavBar/>
      <div className='container-fluid'>
        <div className="row justify-content-md-center">
          <div className="col-md-auto mt-5">
            <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/>
            <ItemCount stock={5} initial={0} onAdd={onAdd}/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;