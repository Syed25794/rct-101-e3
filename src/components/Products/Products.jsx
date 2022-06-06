import React from "react";
import data from '../../db.json';
import {Product} from './Product/Product';

const Products = ({handleShow}) => {
  return <div>
  <button onClick={handleShow}>LogOut</button>
  {data.products.map((product)=>{
  return   <Product  key={product.id} property={product} />
  })}
  </div>;
};

export default Products;
