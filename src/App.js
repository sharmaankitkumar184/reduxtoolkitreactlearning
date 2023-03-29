import './App.css';
import Navbar from './components/Navbar';
// import Account from './components/Account';
import Products from './components/Products';
import Cart from "./components/Cart";
import React ,{ useState }from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode,setMode] =useState('light');
  // const limit = 3;
  // const [progress,setProgress] =useState(0);
  
    const changeMode=()=>{
        if(mode==='light')
        {
            setMode('dark');
            document.body.style.background = '#2a2f32';
        }
        else{

            setMode('light');
            document.body.style.background = 'linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5)';
        }
    }
  return (
<>
<div>
    <Router>
      
    <Navbar mode={mode} changeMode={changeMode} />
    <Cart mode={mode}/>
        <Switch>
        {/* <Route exact path="/"><Account mode={mode}/></Route>  */}
        <Route exact path="/"><Products mode={mode} key="general"/></Route> 
           </Switch>
        </Router>
    </div>
</>
  );
}

export default App;
