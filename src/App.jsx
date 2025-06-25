import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from './frontend/pages/Auth/Login';
import SignUp from './frontend/pages/Auth/SignUp';
import Home from './frontend/pages/Dashboard/Home';
import Income from './frontend/pages/Dashboard/Income';
import Expense from './frontend/pages/Dashboard/Expense';
import UserProvider from './frontend/context/UserContext';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <UserProvider>
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Root/>}/>
        <Route path="/login" exact element={<Login/>}/>
        <Route path="/signup" exact element={<SignUp/>}/>
        <Route path="/dashboard" exact element={<Home/>}/>
        <Route path="/income" exact element={<Income/>}/>
        <Route path="/expense" exact element={<Expense/>}/>

        </Routes>
      </Router>
    </div>
    <Toaster 
    toastOptions={{
      className:"",
      style:{
        fontSize:'13px'
      },
    }}
    />
    </UserProvider>
  )
}

export default App

const Root =() =>{
  const isAuthenticated =!!localStorage.getItem("token");

  return isAuthenticated? (
    <Navigate to ="/dashboard"/>
  ) : (
    <Navigate to="/login"/>
  );
};
