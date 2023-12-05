import { ItemListContainer as Home } from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ItemCounter } from "./Components/ItemCounter/ItemCounter";
import NavBar from "./Components/NavBar/NavBar";
import { ItemDetailContainer } from "./Components/ItemDetailContainer/ItemDetailContainer";
import { CartContainer } from "./Components/CartContainer/CartContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { NavBarContainer } from "./Components/ItemListContainer/itemLlist/NavBarContainer";

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
          <Route path="/navBar/:categoria" element={<NavBarContainer greeting="saluda pura vida surf club" />} />
          {/* <Route path="*" element={<Navigate to="`/detail/${product.id}`" />} /> */}
        </Routes>
        
        <ItemCounter initial={1} stock={6} onAdd={() => `/detail/${product.id}`} />
      </div>
    </Router>
  );



  }


export default App;
