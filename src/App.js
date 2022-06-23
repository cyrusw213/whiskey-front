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
import RemoveFavorites from './components/RemoveFavorites';



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

  useEffect(() => {
    setFavorites(favorites)
  }, [favorites])

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


  // useEffect(() => {
  //   const userFavorites = JSON.parse(
  //     localStorage.getItem('spirit-within-user-favorites')
  //   );
  // setFavorites(userFavorites); 
  //   }, []);



  // Save favorites to local storage ///////////////////////
  // const saveToLocalStorage = (items) => {
  //   localStorage.setItem('spirit-within-user-favorites', JSON.stringify(items))
  // };



  // Add and remove Favorites Functions //////////////////////////////////
  const addFavoriteWhiskey = (whiskey) => {

    const newFavoriteList = [...favorites, whiskey];
    setFavorites(newFavoriteList);
    // saveToLocalStorage(newFavoriteList); 


  }

  const removeFavoriteWhiskey = (whiskey) => {
      const newFavoriteList = favorites.filter(
        (fav) => fav._id !== whiskey._id

      );
      console.log(whiskey._id)
      setFavorites(newFavoriteList)

      // saveToLocalStorage(newFavoriteList)
    };
    
// ///////////// Components and Routes ////////////////////////////////////////
    return (
      <div className="App">

    <Header user={user} />
    {/* <Switch> */}
    <Route exact path="/">
      <Welcome />
    </Route>
    <Route path="/bourbon">
      <Bourbon
        user={user}
        favoriteComponent={AddFavorite}
        url={URL}
        handleFavoritesClick={addFavoriteWhiskey} />
    </Route>
    <Route path="/rye">
      <Rye
        user={user}
        favoriteComponent={AddFavorite}
        url={URL}
        handleFavoritesClick={addFavoriteWhiskey} />
    </Route>
    <Route path="/american">
      <American
        user={user}
        favoriteComponent={AddFavorite}
        url={URL}
        handleFavoritesClick={addFavoriteWhiskey} />
    </Route>
    <Route path="/irish">
      <IrishWhiskey
        user={user}
        favoriteComponent={AddFavorite}
        url={URL}
        handleFavoritesClick={addFavoriteWhiskey} />
    </Route>
    <Route path="/scotch">
      <Scotch
        user={user}
        favoriteComponent={AddFavorite}
        url={URL}
        handleFavoritesClick={addFavoriteWhiskey} />
    </Route>
    <Route exact path="/whiskey">
      <Index
        user={user}
        whiskey={whiskey}
        handleFavoritesClick={addFavoriteWhiskey}
        url={URL}
        favoriteComponent={AddFavorite} />
    </Route>
    <Route path="/whiskey/:id"
      render={(renderProps) => (
        <Show
        favoriteComponent={AddFavorite}
        user={user}
        {...renderProps}
        whiskey={whiskey}
        updateWhiskey={updateWhiskey}
        handleFavoritesClick={addFavoriteWhiskey}
        />
        )}
        />
    <Route path="/favorites">
      <Favorite
        whiskey={favorites}
        user={user}
        favoriteComponent={RemoveFavorites}
        handleFavoritesClick={removeFavoriteWhiskey}

  }

        />
        <Route path="/favorites">
          <Favorite
              whiskey={favorites}
              user={user} 
              favoriteComponent={RemoveFavorites}
              handleFavoritesClick={removeFavoriteWhiskey}
              />
        </Route>
      {/* </Switch> */}
    </div>
  );
};

export default App;
