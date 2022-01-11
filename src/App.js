import './App.css';
import Header from './NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className= "hook-app">
      <Header/>
      <ItemListContainer greeting ="Bienvenido a mi tienda"/>
      <ItemDetailContainer/>
    </div>
    );
}

export default App;
