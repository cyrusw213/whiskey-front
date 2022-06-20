import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

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
        <Link to={`/whiskey/${whiskey._id}`}><h3>{whiskey.Name}</h3> </Link> 
            <h5>{whiskey.Price}</h5>
        </div>
            
            




    ));
};

return whiskey ? loaded() : <h2>Loading...</h2>

};










    
     

export default Index;