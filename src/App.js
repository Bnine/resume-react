import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RouteChangeTracker from './components/RouteChangeTracker';
import './App.css';

function App() {
  RouteChangeTracker();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
