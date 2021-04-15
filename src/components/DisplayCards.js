import React from 'react';

function DisplayCards(props) {

    return <div>
        {props.products.length > 0 ?
            <div className="row">
                {props.products.map((product, index) => {
                    return <div key={index} className="card col-md-2 col-sm-3 col-4" >
                        <img className="card-img-top" src={product.imageUrl} alt="Card cap" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                })}
            </div> :
            <div>

            </div>}
    </div>

}

export default DisplayCards;