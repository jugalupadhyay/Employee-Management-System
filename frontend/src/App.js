import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exect path='/' element={<Home/>}/>
        <Route exect path='/adduser' element={<AddUser/>}/>
        <Route exect path='/edituser/:id' element={<EditUser/>}/>
        <Route exect path='/viewuser/:id' element={<ViewUser/>}/>
      </Routes>
      </Router>      
    </div>
  );
}

export default App;
