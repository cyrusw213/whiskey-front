import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Index from '../pages/Index'

const Main = () => {

    const [ whiskey, setWhiskey ] = useState(null);
    const URL = "https://whiskeywhiskey.herokuapp.com/all"
    // request for whiskey json from heroku
    const getWhiskey = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setWhiskey(data)
    }

    // create function to create a new whiskey 
const createWhiskey = async (whiskey) => {
    // make post request to create whiskey 
    await fetch(TrustedScriptURL, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(whiskey),
    })
    ;
    // update list of whiskey
    getWhiskey();
  };
    

    const updateWhiskey = async (whiskey, id) => {
        // make put request to create whiskey
        await fetch(URL + id, {
          method: "PUT",
          headers: {
            "Content-Type": "Application/json",
          },
          body: JSON.stringify(whiskey),
        });
        // update list of people
        getWhiskey(); 
      }

useEffect(() => getPeople(), [])


    return( 
    <div className="main">
 Main
     </div>
 )
 }
   
   





