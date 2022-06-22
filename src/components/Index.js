import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Index(props) {
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
    return whiskey.map((whiskey, index) => (
      <div className="flex-container">
        <div key={index} className={whiskey.Categories}>
          <div className="item-stack">
            <img src={whiskey.Photo} alt={whiskey.brand} className="img-item" />
            <button className="link-item">
              <Link to={`/whiskey/${whiskey._id}`}>
                <h3 className="font">{whiskey.Name}</h3>{" "}
              </Link>
            </button>
              <div
                id="favorites-link"
                onClick={() => props.handleFavoritesClick(whiskey)}
              >
                <FavoriteComponent />
              </div>
          </div>
        </div>
      </div>
    ));
  };

  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default Index;
