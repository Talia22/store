import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomeComp, Jewlery, Electronics } from './components'


function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to the store</h1>
      </header>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jewlery">Jewlery</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomeComp />}></Route>
          <Route path="/jewlery" element={<Jewlery />}></Route>
          <Route path="/electronics" element ={<Electronics />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
