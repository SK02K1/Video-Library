import { Route, Routes } from 'react-router-dom';
import './App.css';
import {
  History,
  Home,
  Login,
  Playlists,
  Profile,
  Signup,
  SingleVideo,
  Videos,
} from './pages';
import { Navigation, PlaylistModal, PrivateRoute } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='App'>
      <Toaster position='top-right' />
      <Navigation />
      <PlaylistModal />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/videos/:videoID' element={<SingleVideo />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

        {/* Private Routes */}
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/history' element={<History />} />
          <Route path='/playlists' element={<Playlists />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
