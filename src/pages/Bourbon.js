import React from 'react'

function Bourbon(props) {

 //create state to hold bourbons
 const [bourbons, setBourbons] = useState(null);

 //create function to make api call
 const getBourbonsData = async () => {
   
   //make api call and get response
   const response = await fetch(props.URL + "bourbons");

   //turn response into javascript object
   const data = await response.json();

   //set the bourbons state to the data
   setBourbons(data);

 };

 //make an initial call for the data inside a useEffect, so it only happens once on component load
 useEffect(() => getBourbonsData(), []);

 // define a function that will return the JSX needed once we get the data
 const loaded = () => {
   return bourbons.map((Bourbon) => (
     <div>
       <img src={Bourbon.photo} />
     </div>
   ));
 };
 
 return bourbons ? loaded() : <h1>Please Wait...</h1>;
}

export default Bourbon