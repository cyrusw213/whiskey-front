import { useState, useEffect } from "react";

function ProductInfo(props) {

    //Create state
    const [ productInfo, setProductInfo ] = useState(null);

    //Makes API call
    const getProductInfoData = async () => {
        const response = await fetch(props.URL + "productInfo");
        const data = await response.json();
        setProductInfo(data);
    };

    //Calls data inside
    useEffect(() => getProductInfoData(), []);

    //Function defined. Return JSX when needed
    const loaded = () => {
        return productInfo.map((productInfo) => (
            <div>
                <img src={productInfo.photo} />
                <h1>{productInfo.name}</h1>
                <h3>{productInfo.category}</h3>
                <h3>{productInfo.price}</h3>
                <h3>{productInfo.brand}</h3>
                <h3>{productInfo.country}</h3>
                <p>{productInfo.website}</p>
                

            </div>
        ));
    };

    return productInfo ? loaded () : <h1>Grab a drink. We're loading this shiz...</h1>
}

export default ProductInfo;