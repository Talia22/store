import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { HomeComp, Products, Books} from './components'


function App() {

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Fake Store</h1>
      </header>
      <div className='container'>
        <div className='sideBar'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Jewelry">Jewelry</Link></li>
          <li><Link to="/Electronics">Electronics</Link></li>
          <li><Link to="/Books">Books</Link></li>
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomeComp />}></Route>
            <Route path="/Jewelry" element={<Products category={"jewelry"} />}></Route>
            <Route path="/Electronics" element ={<Products category = {"electronics"} />}></Route>
            <Route path="/Books" element ={<Products category = {"books"} />}></Route>

          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;

