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
    return (

      <div className="flex-container">
        {whiskey.map((whiskey, index) => (
      <div key={index} className={whiskey.Categories}>
        
          <img src={whiskey.Photo} alt={whiskey.brand} className="img-index" />
          
          
          <div className="link-index">
            <button>
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
        {/* <h5>{whiskey.Price}</h5> */}
      </div>
    ))
    }
      </div>
      
  )};

  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default Index;
