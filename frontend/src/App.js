import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Bookspage from './pages/Bookspage';
import Moviepage from './pages/Moviepage';
import Seriespage from './pages/Seriespage';
import Songspage from './pages/Songspage';
import Animepage from './pages/Animepage';
import Podcastpage from './pages/Podcastpage';
import UserForm from './pages/UserForm';

import axios from  'axios';
axios.defaults.baseURL="http://localhost:8090";
axios.defaults.withCredentials =true;



function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path='/' Component={Homepage}/>
        <Route path='/home' Component={Homepage}/>
        <Route path='/signin' Component={SignIn}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/profile' Component={Profile}/>
        <Route path='/anime' Component={Animepage}/>
        <Route path='/books' Component={Bookspage}/>
        <Route path='/movies' Component={Moviepage}/>
        <Route path='/series' Component={Seriespage}/>
        <Route path='/songs' Component={Songspage}/>
        <Route path='/podcasts' Component={Podcastpage}/>
        <Route path='/userform' Component={UserForm}/>
      </Routes>
    </BrowserRouter> 
  );
}

export default App;
