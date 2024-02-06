import React from 'react'
import { remove } from '../Store/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

function Cart() {
  const products = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  function handleClick(product){
    dispatch( remove(product) )
  }
  return (
      <div class="d-flex flex-wrap">
      {
        products.map((product)=>{ return(
          <div style={{ 
            border: "2px solid gray",
            boxShadow: "0px 0px 5px black",
            height: "400px",
            width: "250px",
            margin: "10px",
            padding: "10px",
            textAlign: "center",
            display: "flex",
            flexDirection:"column",
            justifyContent: "space-between"
            
            }}>
            <p>{product.title}</p>
            <div style={{ height:"150px", width: "150px;"}}>
              <img src={ product.image } width={ "80px" } />
            </div>
            
            <p>price: {product.price}</p>
            <button onClick={ ()=>{ handleClick(product) } }>remove from cart</button>


          </div>
        ) })

      }
    </div>
  )
}

export default Cart
