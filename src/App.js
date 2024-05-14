import './style.css';
import { Header } from "./Layout/Header/Header";
import { Footer } from "./Layout/Footer/Footer";
import Home from './Pages/Home';
import AllProjects from './Pages/AllProjects';
import Resume from './Pages/Resume';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 200,
  duration: 800,
  easing: 'ease-in-sine',
  delay: 100,
});

function App() {
  return (
    <Router>
      <div className="App" id="app">
      <Header title="My Web" searchBar={false} /> {/* You can pass props to Header here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
