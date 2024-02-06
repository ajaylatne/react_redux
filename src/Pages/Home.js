import React, { useState, useEffect } from 'react'
import { add } from '../Store/cartSlice';
import { useDispatch } from 'react-redux';



function Home() {
  const dispatch = useDispatch();
  const [ products, setProducts ] = useState([]);
  async function fetchAllDatFromWeb(){
      const result = await fetch('https://fakestoreapi.com/products');
      const data = await result.json()
      setProducts(data);
  }
  useEffect(()=>{ fetchAllDatFromWeb() }, [])

  function handleClick(product){
    dispatch( add(product) )
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
            <button onClick={ ()=>{ handleClick(product) } }>add to cart</button>
          </div>
        ) })

      }
    </div>
  )
}

export default Home
