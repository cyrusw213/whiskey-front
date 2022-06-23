import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Rye(props) {
  const [whiskey, setWhiskey] = useState(props.whiskey);

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
    const rye = whiskey.filter((drink) => drink.Categories === "Rye");
    console.log(rye);
    return (
      <div className="flex-container">
        {rye.map((rye, index) => (
          <div key={index}>
            <div className={rye.Categories}>
              <img
                src={rye.Photo}
                alt={rye.brand}
                className="img-rye"
              />
              <div className="link-rye">
                {" "}
                <button>
                  <Link to={`/whiskey/${rye._id}`}>
                    {" "}
                    <h3 className="font"> {rye.Name}</h3>{" "}
                  </Link>
                </button>
              </div>
            </div>
            {/* <h5>${rye.Price}</h5> */}
          </div>
        ))}
      </div>
    );
  };
  return whiskey ? loaded() : <h2>Loading...</h2>;
}

export default Rye;
