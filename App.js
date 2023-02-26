import React from 'react'
// import '../styles/app.css';
import {UserProfile} from './components/UserProfile';

const UserContext = React.createContext();

const App= () => {
  return (
    <div id="main">

    <UserContext.Provider value={{name:"Newton",age:"12"}}>
     <UserProfile />
    </UserContext.Provider>
    </div>
  );
}

export default App;
export {UserContext}