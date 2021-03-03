/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import DisplayCards from './DisplayCards'
import Navbar from './Navbar'

function App() {

    const [products, setProducts] = useState("");
    const [categoryProducts, setCategoryProducts] = useState("")

    useEffect(() => {
        Axios.get("http://localhost:8080/api/products?size=100")
            .then((response) => {
                setProducts(response.data._embedded.products)
                console.log(response.data._embedded.products);
            })
            .catch((err) => {
                console.log(err);
                setProducts("")
            })
    }, [])

    function handleCategoryClick(event) {
        const {name} = event.target;
        let id = null;

        if (name==="Books"){
            id = "1";
        }else if (name==="Coffee Mugs"){
            id = "2";
        }else if (name==="Mouse Pads"){
            id = "3";
        }else if (name==="Luggage Tags"){
            id = "4";
        }
        console.log(typeof(id));
        Axios.get("http://localhost:8080/api/products/search/findBycategoryId?id="+id)
            .then((response) => {
                setCategoryProducts(response.data._embedded.products)
                console.log(response.data._embedded.products);
            })
            .catch((err) => {
                console.log(err);
                setCategoryProducts("")
            })
    }

    

    return <div>

        <Navbar />
        <div>
            <button name="Books" onClick={handleCategoryClick}>Books</button>
            <button name="Coffee Mugs" onClick={handleCategoryClick}>Coffee Mugs</button>
            <button name="Mouse Pads" onClick={handleCategoryClick}>Mouse Pads</button>
            <button name="Luggage Tags" onClick={handleCategoryClick}>Luggage Tags</button>
        </div>
        {categoryProducts ? <DisplayCards products={categoryProducts} /> : <DisplayCards products={products}/>}
    </div>

}

export default App;