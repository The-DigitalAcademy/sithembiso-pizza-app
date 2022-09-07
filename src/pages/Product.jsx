import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pizza from '../folderPizza/pizza';

const Product = () => {
    const { id } = useParams()

    const [product, setProduct] = useState(null)

    useEffect(() => {
            let pizza = Pizza.find((pizza) => pizza.id === Number(id));
            setProduct(pizza);
    }, []);

    return (
        <div>
                <div className='card'>
                    <img src={product?.image} alt="" />
                    <h2>{product?.name}</h2>
                    <h1>{product?.price}</h1>
                </div>
        </div>
    )
}

export default Product;