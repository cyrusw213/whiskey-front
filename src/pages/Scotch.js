import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Scotch(props) {
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
    const scotch = whiskey.filter((drink) => drink.Categories === "Scotch");
    console.log(scotch);
    return scotch.map((scotch, index) => (
      <div className="flex-container">
        <div key={index} className={scotch.Categories}>
          <div className="scotch-stack">
            <img src={scotch.Photo} alt={scotch.brand} className="img-scotch" />
            <button className="link-scotch">
              <Link to={`/whiskey/${scotch._id}`}>
                {" "}
                <h3 className="font"> {scotch.Name}</h3>{" "}
              </Link>
              <div id='favorites-link' onClick={() => props.handleFavoritesClick(whiskey)}>
                <FavoriteComponent />
              </div>
            </button>
          </div>
          {/* <h5>${scotch.Price}</h5> */}
        </div>
      </div>
    ));
  };
  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default Scotch;
