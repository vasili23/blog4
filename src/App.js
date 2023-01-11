import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Success from './pages/success/Success';
import Fail from './pages/fail/Fail';

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/success' element={<Success />} />
                <Route path='/fail' element={<Fail />} />
            </Routes>
        </div>
    );
}

export default App;
