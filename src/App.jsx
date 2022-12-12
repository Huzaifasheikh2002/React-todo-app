import './App.css';
import Login from './Screens/Login';
import {Route, Routes } from 'react-router-dom';
import SignUp from './Screens/SignUp';
import ProtectedRoute from './ProtectedRoute';
import Website from './Screens/Websitemya';
import Todo from './Components/Todo';

const App = ()=> {
  return(<>
    {/* main todo jisme login signup hai */}
 { <Routes>
<Route index element={<Login/>}></Route> 

      <Route path='/signup'element={<SignUp />}></Route>  
      <Route element={<ProtectedRoute/>}>
      <Route path="/todo" element={<Todo/>}></Route>
          {/* <Route path="/website" element={<Website/>}></Route> */}
      </Route>
</Routes> }
    {/* End main todo jisme login signup hai */}

</>);
};

export default App;

