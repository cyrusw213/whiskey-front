import './style/App.css';
import './style/bourbon.css';
import './style/rye.css';
import './style/american.css';
import './style/irishwhiskey.css';
import './style/scotch.css';
import './style/custom.css';
import './style/index.css';
import './style/item.css';
import './style/show.css'
import { auth } from './services/firebase';
import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Index from './components/Index'
import Header from './components/Header';
import Bourbon from './pages/Bourbon';
import IrishWhiskey from './pages/IrishWhiskey';
import Scotch from './pages/Scotch';
import Rye from './pages/Rye';
import American from './pages/American'
import Show from './pages/Show'
import AddFavorite from './components/AddFavorite';
import Favorite from './pages/Favorite';




function App() {

  const [whiskey, setWhiskey] = useState(null);
  const [favorites, setFavorites] = useState([]);
  // State to control user 
  const [user, setUser] = useState(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => (setUser(user)));
    // observes changes to the users login state
    return () => {
      unsubscribe();
    };
  }, []);


  const URL = "https://whiskeywhiskey.herokuapp.com/whiskey/"
  // const URL = "http://localhost:4000/all"

  // request for whiskey json from heroku

  const getWhiskey = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setWhiskey(data)
  }

  // create function to create a new whiskey 
  const createWhiskey = async (createdWhiskey) => {
    // make post request to create whiskey 
    await fetch(URL, {
      method: 'POST',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(createdWhiskey),
    })
      ;
    // update list of whiskey
    getWhiskey();
  };


  const updateWhiskey = async (updatedWhiskey, id) => {
    // make put request to create whiskey
    await fetch(URL + id, {
      method: 'PUT',
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(updatedWhiskey),
    });
    // update list of people
    getWhiskey();
  }

  useEffect(() => { getWhiskey() }, [])

  const addFavoriteWhiskey = (whiskey) => {
    if (!user) {
      alert("You must be logged in to add favorite")
    } else {
      // const token = await props.user.getIdToken();

      const newFavoriteList = [...favorites, whiskey];
      setFavorites(newFavoriteList);
    }
  }





  return (
    <div className="App">

      <Header user={user} />
      {/* <Switch> */}
        <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/bourbon">
          <Bourbon url={URL} />
        </Route>
        <Route path="/rye">
          <Rye url={URL} />
        </Route>
        <Route path="/american">
          <American url={URL} />
        </Route>
        <Route path="/irish">
          <IrishWhiskey url={URL} />
        </Route>
        <Route path="/scotch">
          <Scotch url={URL} />
        </Route>
        <Route exact path="/whiskey">
          <Index
            whiskey={whiskey}
            handleFavoritesClick={addFavoriteWhiskey}
            url={URL}
            favoriteComponent={AddFavorite} />
        </Route>
        <Route path="/whiskey/:id"
          render={(renderProps) => (
            <Show
              {...renderProps}
              whiskey={whiskey}
              updateWhiskey={updateWhiskey}
            />
          )}
        />
        <Route path="/favorites">
          <Favorite whiskey={favorites}
            user={user} />
        </Route>
      {/* </Switch> */}
    </div>
  );
};

export default App;
