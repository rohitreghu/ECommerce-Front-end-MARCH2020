/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

function Navbar() {

    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">E-Store</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" >
                    <a className="nav-link" href="#">Login</a>
                </li>

            </ul>
        </div>
    </nav>
}

export default Navbar;