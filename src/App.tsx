import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { ShoppingCartProvider } from './contexts/ShoppingCartContext';
import Store from './pages/Store/Store';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <ShoppingCartProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
