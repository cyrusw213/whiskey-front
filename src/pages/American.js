import React from 'react'

function American(props) {

  //create state to hold americans
  const [ americans, setAmericans] = useState(null);

  //create function to make api call
  const getAmericansData = async () => {
    
    //make api call and get response
    const response = await fetch(props.URL + "americans");

    //turn response into javascript object
    const data = await response.json();

    //set the americans state to the data
    setAmericans(data);

  };

  //make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getAmericansData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return americans.map((American) => (
      <div>
        <img src={American.photo} />
      </div>
    ));
  };
  
  return americans ? loaded() : <h1>Please Wait...</h1>;
}

export default American