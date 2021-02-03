import React from 'react';
import {Item} from './const';
import "./style.scss";
const ProductItem = () => {
   return (
    <>
    {Item.map((item) => {
        return (
         <div class="col-3 sort__item" data-all data-red>
         <span class="sort__discount">{item.discount}% off</span>
         <img src={item.img} alt="Wein" class="sort__img"/>
         <div class="column sort__column">
             <span class="sort__product-name">{item.name}</span>
             <div class="row align-items">
                 <span class="sort__old-price">{item.oldPrice}</span>
                 <span class="sort__new-price">{item.newPrice}</span>
             </div>         
         </div>
     </div>
        )
    })}
    </>
   )
}

export default ProductItem;
