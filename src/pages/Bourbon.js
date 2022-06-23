import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

function Bourbon(props) {
  const [whiskey, setWhiskey] = useState(props.whiskey);
  const FavoriteComponent = props.favoriteComponent;
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

    const bourb = whiskey.filter(drink => drink.Categories === "Bourbon")

    return bourb.map((bourb, index) => (
      <div className="flex-container">
        <div key={index} className={bourb.Categories}>
          {/* <h1>Bourbons</h1> */}
          <div className="bourbon-stack">
            <img src={bourb.Photo} alt={bourb.brand} className="img-bourbon" />
            <button className="link-bourbon">
              <Link to={`/whiskey/${bourb._id}`}>  <h3 className="font"> {bourb.Name}</h3> </Link>
              {
                props.user
                  ? <div id='favorites-link' onClick={() => props.handleFavoritesClick(whiskey)}>
                    <FavoriteComponent />
                  </div>
                  : <></>
              }
            </button>
          </div>
          {/* <h5>${bourb.Price}</h5> */}
          {/* {test Hervs Udate} */}
        </div>
      </div>
    ))
  };
  return whiskey ? loaded() : <h2>Loading...</h2>

};













export default Bourbon;