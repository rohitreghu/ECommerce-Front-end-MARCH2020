import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Paginate from './Paginate';

function Home() {
    const [productCategory, setProductCategory] = useState([])
    const [url, setUrl] = useState("http://localhost:8080/api/products")


    useEffect(() => {

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

        setUrl("http://localhost:8080/api/products/search/findBycategoryId?id=" + id)

    }

    return <div>
        {productCategory && <div>
        {productCategory.map((category) => {
            return <button key={category.id} id={category.id} onClick={handleCategoryClick}>{category.categoryName}</button>
        })}
    </div>}

    <Paginate url={url} />
    </div>
}

export default Home;
