
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/Home';

function App() {
  return (
   <main>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
   </main>
  );
}

export default App;
