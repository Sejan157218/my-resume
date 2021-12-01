import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Banner from './Pages/Home/Banner/Banner';
import Contact from './Pages/Contact/Contact';
import Portfolio from './Pages/Portfolio/Portfolio';



function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
