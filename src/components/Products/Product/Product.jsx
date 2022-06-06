import React from "react";

export const Product = ({property}) => {
  const [show,setShow]=React.useState(true);
  const [count,setCount]=React.useState(1);
  console.log(property);
  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <>
    <div data-cy={`product-${product.id}`}>
      <h3 data-cy="product-name">{property.name}</h3>
      <h6 data-cy="product-description">{property.description}</h6>
      {show ? <button data-cy="product-add-item-to-cart-button" onClick={()=>setShow(!show)}>Add to Cart</button> :
      (
        <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setCount(count+1)}>+</button>
        <span data-cy="product-count">
          {
            count
          }
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>{count !== 1 ? setCount(count-1) : setCount(count)}}>-</button>
        <button data-cy="product-remove-cart-item-button" onClick={()=>setShow(!show)}>Remove from Card</button>
      </div>
      )
    }
    </div>
    </>
  );
};

