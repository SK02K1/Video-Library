import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, SingleVideo, Videos } from './pages';
import { Navigation } from './components';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/videos/:videoID' element={<SingleVideo />} />
      </Routes>
    </div>
  );
}

export default App;
