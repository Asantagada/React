import './App.css';
import Header from './NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className= "hook-app">
      <Header/>
      <ItemListContainer greeting ="Bienvenido a mi tienda"/>
    </div>
    );
}

export default App;
