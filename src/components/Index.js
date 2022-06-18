import { useState, useEffect } from "react";

function Index(props) {
const [whiskey, setWhiskey] = useState(props.whiskey);
    
const getWhiskey = async () => {
    const response = await fetch(props.url);

    const data = await response.json();

    setWhiskey(data);
};

useEffect(() => {
    getWhiskey()
    // eslint-disable-next-line
}, []);

const loaded = () => {
    
    return whiskey.map((whiskey, index) => (
        <div key={index} className={whiskey.Categories}>
            <img src={whiskey.Photo} alt={whiskey.brand} />
            <h3>{whiskey.Name}</h3>
            <h5>{whiskey.Price}</h5>
        </div>




    ));
};

return whiskey ? loaded() : <h2>Loading...</h2>

};










    
     

export default Index;