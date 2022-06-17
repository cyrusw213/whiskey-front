import React from 'react'

function IrishWhiskey(props) {

 //create state to hold irishwhiskeys
 const [IrishWhiskeys, setIrishWhiskeys] = useState(null);

 //create function to make api call
 const getIrishWhiskeysData = async () => {
   
   //make api call and get response
   const response = await fetch(props.URL + "IrishWhiskeys");

   //turn response into javascript object
   const data = await response.json();

   //set the irishwhiskeys state to the data
   setIrishWhiskeys(data);

 };

 //make an initial call for the data inside a useEffect, so it only happens once on component load
 useEffect(() => getIrishWhiskeysData(), []);

 // define a function that will return the JSX needed once we get the data
 const loaded = () => {
   return IrishWhiskeys.map((IrishWhiskey) => (
     <div>
       <img src={IrishWhiskey.photo} />
     </div>
   ));
 };
 
 return IrishWhiskeys ? loaded() : <h1>Please Wait...</h1>;
}

export default IrishWhiskey