import './App.css';
import { auth } from './services/firebase';
import {useState, useEffect} from 'react';
import Welcome from './pages/Welcome';

import Header from './components/Header';


function App() {
  // State to control user 
  const [user, setUser] = useState(null)
useEffect(() => {
  auth.onAuthStateChanged(user => (setUser(user)));
  // observes changes to the users login state
})
  
  
  
  
  return (
    <div className="App">
      <Welcome />
      <Header user={user} />
    </div>
  );
}
 

export default App;
