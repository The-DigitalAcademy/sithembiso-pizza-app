import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
    return (
        <div className="col-md-3 mb-4">
            <div className="card">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className=" card-body text-center">
                    <br />
                    <Link to={`/product/${item.id}`} className="btn-success">
                        BUY NOW
                    </Link>
                </div>
            </div>
        </div >
    );
}

export default Card;