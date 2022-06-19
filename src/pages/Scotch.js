import { useState, useEffect } from "react";

function Scotch(props) {
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
    
    const scotch =  whiskey.filter(drink => drink.Categories === "Scotch")
    console.log(scotch)
    return scotch.map((scotch, index) => (
      <div key={index} className={scotch.Categories}>
        <img src={scotch.Photo} alt={scotch.brand} />
        <h3>{scotch.Name}</h3>
        <h5>${scotch.Price}</h5>
      </div>
    ))
  };
return whiskey ? loaded() : <h2>Loading...</h2>

};










    
     

export default Scotch;