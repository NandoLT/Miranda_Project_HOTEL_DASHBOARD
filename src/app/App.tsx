import React, { useState, useReducer } from 'react';
import { Layout } from '../components/commons/Layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../components/dashboard/Dashboard';
import { Booking } from '../components/booking/Booking';
import { BookingDetail } from '../components/booking/BookingDetail';
import { Rooms } from '../components/rooms/Rooms';
import { RoomDetail } from '../components/rooms/RoomDetail';
import { Users } from '../components/users/Users';
import { UserDetail } from '../components/users/UserDetail';
import { Contact } from '../components/contact/Contact';
import { Login } from '../components/login/Login';
import { NotFound } from '../components/commons/NotFound';
import PrivateRoute from '../components/privateroute/PrivateRoute';
import storage from '../utils/storage';
import { authContext } from '../contexts/user.context';
import { authReducer, initialState } from '../useReducer/authReducer';

import '../assets/css/App.css';

interface AppProps {
  isLogged: boolean
}
// function App({ isLogged  }) {
const  App:React.FC<AppProps> = ({ isLogged  }) => {

  const [logged, setLogged] = useState(isLogged);

  const [state, dispatch] = useReducer(authReducer, initialState)

  const onLogOut = () => {
    storage.set('auth', false);
    setLogged(!logged);
  }
  console.log('APP STATE', state);
  return (
    <div className="App">
      <authContext.Provider
        value={state}
      > 
        <Layout onLogOut={onLogOut} isLogged={logged}  dispatch={ dispatch }>
          <Routes>
              <Route 
                path="/" 
                element={ <PrivateRoute isLogged={ logged } component={ Dashboard }  />}
              />
              
              <Route 
                path="/booking" 
                element={ <PrivateRoute isLogged={ logged } component={ Booking } />} 
              />
              <Route 
                path="/booking/:id" 
                element={ <PrivateRoute isLogged={ logged } component={ BookingDetail }  />} 
              />
              
              <Route 
                path="/rooms" 
                element={ <Rooms /> } 
              />
              <Route 
                path="/rooms/:id" 
                element={ <PrivateRoute isLogged={ logged } component={ RoomDetail }  /> } 
              />
              
              <Route 
                path="/users" 
                element={ <PrivateRoute isLogged={ logged } component={ Users }  /> } 
              />
              <Route 
                path="/users/:id" 
                element={ <PrivateRoute isLogged={ logged } component={ UserDetail }  /> } 
              />
              
              <Route 
                path="/contact" 
                element={ <PrivateRoute isLogged={ logged } component={ Contact }  /> }
              />

            <Route path="/login" element={ <Login isLogged= { logged } dispatch={ dispatch }/> } />

            <Route path="/404" element={ <NotFound /> } />

            <Route path="*" element={ <Navigate to='404' /> } />

          </Routes>
        </Layout>
      </authContext.Provider>
    </div>
  )
}

export default App
