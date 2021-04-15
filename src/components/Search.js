import React from 'react';

function Search() {

    function handleSearch(e) {
        e.preventDefault();
        
        
        
    }

    return <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search" ></input>
        <button type="submit"><span className="material-icons">search</span></button>
    </form>
}

export default Search;