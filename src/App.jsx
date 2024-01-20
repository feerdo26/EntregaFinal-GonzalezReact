import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./components/itemlistcontainer/itemlistcontainer";
import ItemDetailContainer from "./components/itemdetailcontainer/itemdetailcontainer";
import { CarritoProvider } from "./context/CarritoContext";
import Cart from "./components/cart/cart";
import Checkout from "./components/checkout/checkout";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2>Por acá no</h2>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>



    </div>
  )
}

export default App
