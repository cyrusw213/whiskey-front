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
    return (
      <div className="flex-container">
        {scotch.map((scotch, index) => (
          <div key={index}>
            <div className={scotch.Categories}>
              <img
                src={scotch.Photo}
                alt={scotch.brand}
                className="img-scotch"
              />
              <div className="link-scotch">
                {" "}
                <button>
                  <Link to={`/whiskey/${scotch._id}`}>
                    {" "}
                    <h3 className="font"> {scotch.Name}</h3>{" "}
                  </Link>
                </button>
              </div>
            </div>
            {/* <h5>${scotch.Price}</h5> */}

          </div>
        ))}
      </div>
    );
  };
  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default Scotch;
