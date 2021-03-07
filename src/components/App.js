/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import DisplayCards from './DisplayCards'
import Navbar from './Navbar'

function App() {

    const [products, setProducts] = useState("");
    const [productCategory, setProductCategory] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:8080/api/products")
            .then((response) => {
                setProducts(response.data._embedded.products)
            })
            .catch((err) => {
                console.log(err);
                setProducts("")
            })

        Axios.get("http://localhost:8080/api/product-category")
            .then((response) => {
                setProductCategory(response.data._embedded.productcategory);
            })
            .catch((err) => {
                console.log(err);
                setProductCategory([]);
            })
    }, [])

    function handleCategoryClick(event) {
        const { id } = event.target;

        Axios.get("http://localhost:8080/api/products/search/findBycategoryId?id=" + id)
            .then((response) => {
                setProducts(response.data._embedded.products);
            })
            .catch((err) => {
                console.log(err);
                setProducts("")
            })
    }

    return <div>

        <Navbar />
        {productCategory && <div>
            {productCategory.map((category) => {
                return <button key={category.id} id={category.id} onClick={handleCategoryClick}>{category.categoryName}</button>
            })}
        </div>}

        {products && <DisplayCards products={products} />}
    </div>

}

export default App;