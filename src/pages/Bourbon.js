import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

function Bourbon(props) {
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
    
    const bourb =  whiskey.filter(drink => drink.Categories === "Bourbon")
 
    return bourb.map((bourb, index) => (
      <div key={index} className={bourb.Categories}>
        <h1>Bourbons</h1>
        <img src={bourb.Photo} alt={bourb.brand} />
        <Link to={`/whiskey/${bourb._id}`}>  <h3>{bourb.Name}</h3> </Link>
        <h5>${bourb.Price}</h5>
      </div>
    ))
  };
return whiskey ? loaded() : <h2>Loading...</h2>

};










    
     

export default Bourbon;