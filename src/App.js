import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Article from './pages/Article';

function App() {
    return (
        <div className="App">
            <Router>
                {/* Nav here, because Link comps must be inside <Router/> */}
                <nav>
                    <h1>My Articles</h1>
                    <NavLink to="/">home</NavLink>
                    <NavLink to="/contact">contact</NavLink>
                    <NavLink to="/about">about</NavLink>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/articles/:id" element={<Article />}></Route>
                    <Route path="/*" element={<h1>404: NOT FOUND!</h1>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
