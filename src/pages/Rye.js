import { useState, useEffect } from "react";

function Rye(props) {
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
    
    const rye =  whiskey.filter(drink => drink.Categories === "Rye")
    console.log(rye)
    return rye.map((rye, index) => (
      <div key={index} className={rye.Categories}>
        <img src={rye.Photo} alt={rye.brand} />
        <h3>{rye.Name}</h3>
        <h5>${rye.Price}</h5>
      </div>
    ))
  };
return whiskey ? loaded() : <h2>Loading...</h2>

};




export default Rye;