import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import { useState } from 'react';
import Error from './components/Error';
function App() {
  const [userData, setUserData] = useState([]);
  const [authUser, setAuthUser] = useState();
  const [flag, setFlag] = useState(false);
  const getUserRecord = (record) => {
    setUserData([...userData ,record]);
  }
  const userLogin = (authUserData) =>{
    setAuthUser(authUserData);
  }
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login passData={ userData } userValidate={userLogin} authAvailable={setFlag}/>} />
        <Route path='/signup' element={<SignUp forUserInfromation={getUserRecord} />} />
        <Route path='/dashboard' element={ flag === false ? <Error flagTest={flag}/> : <Dashboard  getUserInfo={authUser} checkUser={setFlag} />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
