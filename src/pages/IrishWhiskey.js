import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function IrishWhiskey(props) {
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

    const irish = whiskey.filter(drink => drink.Categories === "Irish")
    console.log(irish)
    return irish.map((irish, index) => (
      <div key={index} className={irish.Categories}>
        <img src={irish.Photo} alt={irish.brand} />
        <Link to={`/whiskey/${irish._id}`}>     <h3>{irish.Name}</h3> </Link>
        <h5>${irish.Price}</h5>
      </div>
    ))
  };
  return whiskey ? loaded() : <h2>Loading...</h2>

};













export default IrishWhiskey;