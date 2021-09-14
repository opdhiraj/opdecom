import React from 'react'
import Rating from '../component/Rating';

import data from '../data'

const ProductScreen = (props) => {
    // const product = props;
    const product = data.products.find((item) => item.id.toString() === props.match.params.id.toString());
    console.log(product);
    if (!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            <div className="row" >
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name} />

                </div>
                <div className="col-1" >
                    <ul>
                        <li>
                            <h1>{props.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReview={product.numReview} />
                        </li>
                        <li>Price:{product.price}</li>
                        <li>Discription: <p>{product.discription}</p></li>
                    </ul>

                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    {product.price}
                                </div>
                            </li>
                        </ul>

                    </div>



                </div>


            </div>
        </div>

    )
}

export default ProductScreen
