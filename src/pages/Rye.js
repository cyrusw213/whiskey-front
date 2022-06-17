import React from 'react'

function Rye(props) {

   //create state to hold ryes
   const [ryes, setRyes] = useState(null);

   //create function to make api call
   const getRyesData = async () => {
     
     //make api call and get response
     const response = await fetch(props.URL + "ryes");
 
     //turn response into javascript object
     const data = await response.json();
 
     //set the ryes state to the data
     setRyes(data);
 
   };
 
   //make an initial call for the data inside a useEffect, so it only happens once on component load
   useEffect(() => getRyesData(), []);
 
   // define a function that will return the JSX needed once we get the data
   const loaded = () => {
     return ryes.map((Rye) => (
       <div>
         <img src={Rye.photo} />
       </div>
     ));
   };
   
   return ryes ? loaded() : <h1>Please Wait...</h1>;
}

export default Rye