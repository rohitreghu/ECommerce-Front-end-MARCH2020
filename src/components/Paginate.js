import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import ReactPaginate from 'react-paginate';

import DisplayCards from './DisplayCards'

function Paginate(props) {

    const [products, setProducts] = useState("");
    const [paginationValues, setPaginationValues] = useState("");
    const [charToBeAppendedOntoUrl, setCharToBeAppendedOntoUrl] = useState("");

    useEffect(() => {
        console.log("Hello");

        if (props.url.includes("?")) {
            setCharToBeAppendedOntoUrl("&");
        } else {
            setCharToBeAppendedOntoUrl("?")
        }


        Axios.get(props.url)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data._embedded.products);
                setPaginationValues(response.data.page);
            })
            .catch((err) => {
                console.log(err);
                setProducts("")
            })
    }, [props.url])




    function handlePageClick(data) {
        const { selected } = data;


        Axios.get(`${props.url + charToBeAppendedOntoUrl}page=${selected}&size=20`)
            .then((response) => {
                console.log(response.data);
                setProducts(response.data._embedded.products);
                setPaginationValues(response.data.page);
            })
            .catch((err) => {
                console.log(err);
                setProducts("")
            })
    }

    return <div>
        {products && <DisplayCards products={products} />}

        <ReactPaginate
            previousLabel={'<-'}
            nextLabel={'->'}
            breakLabel={'...'}
            pageCount={paginationValues.totalPages}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
        />;
    </div>
}

export default Paginate;