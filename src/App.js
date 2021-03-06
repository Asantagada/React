import './App.css';
import Header from './NavBar/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Cart from './Cart/Cart';
import { CartContextProvider } from './Cart/CartContext/cartContext';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting ="Bienvenido a mi tienda"/>}/>
            <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting ="Bienvenido a mi tienda"/>}/>
            <Route exact path='/detalle/:idDetalle' element={<ItemDetailContainer/>}/>
            <Route exact path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
    );
}

export default App;
