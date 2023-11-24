import { ItemListContainer as Home } from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ItemCounter } from "./Components/ItemCounter/ItemCounter";
import NavBar from "./Components/NavBar/NavBar";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./Components/CartContainer/CartContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home greeting="saluda pura vida surf club" />} />
          <Route path="/category/:cid" element={<Home greeting="saluda pura vida surf club" />} />
          <Route path="/detail/:pid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* Use the ItemCounter component with proper props */}
        <ItemCounter initial={1} stock={6} onAdd={() => { /* Define your onAdd logic here */ }} />
      </div>
    </Router>
  );
}

export default App;
