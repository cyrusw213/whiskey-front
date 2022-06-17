import { useState, useEffect } from 'react'

function Scotch(props) {

  //create state to hold scotches
  const [scotches, setScotches] = useState(null);

  //create function to make api call
  const getScotchesData = async () => {
    
    //make api call and get response
    const response = await fetch(props.URL + "scotches");

    //turn response into javascript object
    const data = await response.json();

    //set the scotches state to the data
    setScotches(data);

  };

  //make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getScotchesData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return scotches.map((Scotch) => (
      <div>
        <img src={Scotch.photo} />
      </div>
    ));
  };
  
  return scotches ? loaded() : <h1>Please Wait...</h1>;
}

export default Scotch