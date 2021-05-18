
import './App.css';
import Signup from './Signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loginpage from './Loginpage';
import TodoMain from './TodoMain';
import Search from './Search';
// import BirthForm1 from './BirthForm1';
// import BirthForm2 from './BirthForm2';
// import BirthInfo from './BirthInfo';
// import Testform from './Testform';
import RegisterMain from './Components/Pages/Register/';
import Navbar from './Components/Navbar';
import Forms from './Components/Pages/Register/Form'
import birth from './Components/Pages/Register/Birth/BirthInfo';
import BirthInfo from './Components/Pages/Register/Birth/BirthInfo';


console.log('constructor')

function App() {
  return (
    <BrowserRouter>
      {console.log('render')}
      <Navbar />
      
      <Switch>
            <Route path='/login' component={Loginpage} />
            <Route path='/signup' component={Signup} />
            <Route path='/todomain' component={TodoMain} />
            <Route path='/search' component={Search} />
            <Route path='/register' component={RegisterMain} />
            <Route path='/form' component={Forms}/>
            <Route path='/birth' component={BirthInfo}/>
          </Switch>
    </BrowserRouter>
  );
}

export default App;