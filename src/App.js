import React from "react"
import './App.css';
import Header from "./components/Header/header.js"
import Shop from "./components/shop/shop.js"
import Review from "./components/Review/review.js"



import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";









function App() {
  return (
    <div >
      <Header/>
      
      <Router>
        <Routes>
          
          <Route path="/shop" element={<Shop/>} />
          
          <Route path="/review" element={<Review/>} />
 
          
          
          
          
          
          
        </Routes>
      </Router>
      
   
        
        
         
          
          
        
   
      
      
      
      
      
      
      
      
      
    </div>
  );
}

export default App;
