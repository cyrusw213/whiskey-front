import './App.css';
import { auth } from './services/firebase';
import {useState, useEffect} from 'react';
import { Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Index from './components/Index'
import Header from './components/Header';



function App() {
  // State to control user 
  const [user, setUser] = useState(null)
useEffect(() => {
 const unsubscribe = auth.onAuthStateChanged(user => (setUser(user)));
  // observes changes to the users login state
  return () => {
    unsubscribe(); 
  };
}, []); 
  
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
await fetch(URL, {
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

useEffect(() =>{getWhiskey()}, [])



  
  
  return (
    <div className="App">
     
      <Header user={user} />
      <Route exact path="/">
      <Welcome  />
      </Route>
      <Route path="/all">
      <Index url={URL}/>
      </Route>
   
    </div>
  );
};
 

export default App;
