import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Login, Profile, Signup, SingleVideo, Videos } from './pages';
import { Navigation, PrivateRoute } from './components';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='App'>
      <Toaster position='top-right' />
      <Navigation />
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
