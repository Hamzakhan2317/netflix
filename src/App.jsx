import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebase';
import  { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import TVShowsPage from './pages/TVShows/TVShows';
import TitleCards from './components/TitleCards/TitleCards';
  


const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
     onAuthStateChanged(auth, async (user)=>
    {
      if (user) {
        console.log("Logged In");
        navigate('/');
        
      } else {
        console.log("Logged out");
        navigate('/login')
     
      }
    
      
    
   })}, []);
  
  return (
    
    <div>
      <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player />} />
        <Route path='/TVshows' element={<TVShowsPage />} />
        <Route path="/movies" element={<TitleCards title="Movies by Genre" />} />
      </Routes>
    </div>
  );
};



export default App;
