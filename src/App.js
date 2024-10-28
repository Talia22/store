import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomeComp, Jewlery, Electronics } from './components'


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Fake Store</h1>
      </header>
      <div className='container'>
        <div className='sideBar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/jewlery">Jewlery</Link></li>
          <li><Link to="/electronics">Electronics</Link></li>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomeComp />}></Route>
            <Route path="/jewlery" element={<Jewlery />}></Route>
            <Route path="/electronics" element ={<Electronics />}></Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;

