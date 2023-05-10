import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './page/Home';
import Add from './page/Add';
import Products from './page/Products';
import ProductDetail from './page/ProductDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Add' element={<Add />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productdetail/:id' element={<ProductDetail />} />



        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
