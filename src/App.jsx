import { NavBar, ItemListContainer } from './components';
import './App.css';

function App() {
  return (
    <>
    <div className="page d-flex flex-column justify-content-between">
      <NavBar/>
      <div className='container-fluid'>
        <div className="row justify-content-md-center">
          <div className="col-md-auto mt-5">
            <ItemListContainer titulo='¡BIENVENIDOS A NUESTRA TIENDA ONLINE!'/>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default App;