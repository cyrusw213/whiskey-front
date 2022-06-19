import { useState, useEffect } from "react";

function American(props) {
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
    
    const merican =  whiskey.filter(drink => drink.Categories === "American")
    console.log(merican)
    return merican.map((merican, index) => (
      <div key={index} className={merican.Categories}>
        <img src={merican.Photo} alt={merican.brand} />
        <h3>{merican.Name}</h3>
        <h5>${merican.Price}</h5>
      </div>
    ))
  };
return whiskey ? loaded() : <h2>Loading...</h2>

};










    
     

export default American;