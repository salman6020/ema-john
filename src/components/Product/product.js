import React from "react"
import "./product.css"




const Product =(props)=>{
  return(
    <div className = "product">
      <div>
        <img src={props.product.img} />
      </div>
      <div>
        <h4>{props.product.name}</h4>
       
      </div>
    </div>
    
    
    
    
    )
}










export default Product ;
