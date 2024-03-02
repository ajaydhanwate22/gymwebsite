import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Achivement from './Component/Achivement';
import Navbar from './Component/Navbar';
import Services from './Component/Services';
import Award from './Component/Award';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Contact from './Component/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/Achivement" element={<Achivement />}>
          </Route>
          <Route path="/About" element={<About />}>
          </Route>
          <Route path="/Services" element={<Services />}>
          </Route>
          <Route path="/Award" element={<Award />}>
          </Route>
          <Route path="/Contact" element={<Contact />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
