
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/Home';
import LocationPage from './pages/LocationPage/LocationPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/location" element={<LocationPage />} />
      </Routes>
    </main>
  );
}

export default App;
