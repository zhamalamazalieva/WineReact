import React from 'react';
import ProductItem from '../productItem';
import {SortMenu} from './const';
import "./style.scss";

const Sort = () => {
    const [activeItem, setActiveItem] = React.useState(0);
    const handleClick = (index) => {
        setActiveItem(index);
        console.log(index)
    };
    return (
        <section className="sort">
            <div className="container">
                <div className="column align-items">
                    <h2 className="sort__title section__title">Featured <span className="orange">Products</span></h2>
                    <ul className="sort__filter row filter">
                        {SortMenu.map((item, index) => {
                            return (
                                <li 
                                onClick={() =>{handleClick(index)}}
                                className={`filter__items ${activeItem === index ? 'filter__items--active' : ''}`}
                                >{item}</li>
                            )
                        })}
                    </ul>
                    <div className="sort__row row">
                        <ProductItem/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sort;
