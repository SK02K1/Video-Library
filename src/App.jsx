import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages';
import { Navigation } from './components';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
