import React from "react";

function Item(props) {
  
  //create state to hold items
  const [items, setItems] = useState(null);

  //create function to make api call
  const getItemsData = async () => {

    //make api call and get response
    const response = await fetch(props.URL + "items");

    //turn response into javascript object
    const data = await response.json();

    //set the items state to the data
    setItems(data);
  };

  //make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getItemsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return items.map((Item) => (
      <li>
        <div>
          <h1>{Item.name}</h1>
          <a href={Item.website}>
            <button>Purchase</button>
          </a>
        </div>
      </li>
    ));
  };

  return items ? loaded() : <h1>Please Wait...</h1>;
}

export default Item;
