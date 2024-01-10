import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Singleproducts = () => {
    let params = useParams();
    console.log("working");
    return (
        <div>Singleproducts{params.id}</div>
    )
}

export default Singleproducts