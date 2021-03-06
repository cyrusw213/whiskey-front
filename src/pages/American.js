import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function American(props) {
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
    const merican = whiskey.filter((drink) => drink.Categories === "American");
    console.log(merican);
    return (
    <div className="flex-container">
      {merican.map((merican, index) => (
      <div key={index} >
        <div className={merican.Categories}>
          <div className="american-stack">
            <img src={merican.Photo} alt={merican.brand} className="img-american" />
            <button className="link-american">
              <Link to={`/whiskey/${merican._id}`}> {" "} <h3 className="font"> {merican.Name}</h3>{" "} </Link>
              {
                props.user
                  ? <div id='favorites-link' onClick={() => props.handleFavoritesClick(whiskey)}>
                    <FavoriteComponent />
                  </div>
                  : <></>
              }
            </button>
          </div>
          {/* <h5>${merican.Price}</h5> */}
        </div>
      </div>
    ))

      }
    </div>)
  };
  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default American;
