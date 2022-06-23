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

const loaded = () => {
  const bourb = whiskey.filter((drink) => drink.Categories === "Bourbon");
  console.log(bourb);
  return (
    <div className="flex-container">
      {bourb.map((bourb, index) => (
        <div key={index}>
          <div className={bourb.Categories}>
            <img
              src={bourb.Photo}
              alt={bourb.brand}
              className="img-bourb"
            />
            <div className="link-bourb">
              {" "}
              <button>
                <Link to={`/whiskey/${bourb._id}`}>
                  {" "}
                  <h3 className="font"> {bourb.Name}</h3>{" "}
                </Link>
              </button>
            </div>
          </div>
          {/* <h5>${bourb.Price}</h5> */}
        </div>
      ))}
    </div>
  );
};
return whiskey ? loaded() : <h2>Loading...</h2>


};













export default Bourbon;