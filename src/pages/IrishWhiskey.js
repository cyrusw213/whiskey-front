import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function IrishWhiskey(props) {
  const [whiskey, setWhiskey] = useState(props.whiskey);
  const FavoriteComponent = props.favoriteComponent;
  const getWhiskey = async () => {
    const response = await fetch(props.url);

    const data = await response.json();

    setWhiskey(data);
  };

  useEffect(() => {
    getWhiskey();
    // eslint-disable-next-line
  }, []);

  const loaded = () => {
    const irish = whiskey.filter((drink) => drink.Categories === "Irish");
    console.log(irish);
    return irish.map((irish, index) => (
      <div className="flex-container">
        <div key={index} className={irish.Categories}>
          <div className="irishwhiskey-stack">
            <img
              src={irish.Photo}
              alt={irish.brand}
              className="img-irishwhiskey"
            />
            <button className="link-irishwhiskey">
              <Link to={`/whiskey/${irish._id}`}>
                {" "}
                <h3 className="font"> {irish.Name}</h3>{" "}
              </Link>
              <div id='favorites-link' onClick={() => props.handleFavoritesClick(whiskey)}>
                <FavoriteComponent />
              </div>
            </button>
          </div>

          {/* <h5>${irish.Price}</h5> */}
        </div>
      </div>
    ));
  };
  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default IrishWhiskey;
