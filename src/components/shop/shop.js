import React from "react"
import {useState} from "react"
import "./shop.css"
import Product from "../Product/product.js"

import fakeData from "../../fakeData/products.json"




const Shop=()=>{
  const first10 = fakeData.slice(0,10)
  const [products,setProducts] = useState(first10)
  
  
  return(
    <div className="shop-container" >
      <div className="products-container" >
        {
          products.map((product) => <Product product={product} />)
        }
        
      </div>
      <div className="cart-container">
        <h3>This is a cart</h3>
      </div>
      
      
    </div>
    
    
    
    )
  
  
  
  
  
}


export default Shop ;







