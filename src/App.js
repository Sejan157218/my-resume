import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Details from './Pages/Details/Details';



function App() {
  return (
    <div>
    <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="home/details/:id" element={<Details />} />
      
    </Routes>
    </Router>
    </div>
  );
}

export default App;
