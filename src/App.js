import './style.css';
import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { ContainerOne } from "./Components/Body/ContainerOne";
import { ContainerTwo } from "./Components/Body/ContainerTwo";
import { ContainerThree } from "./Components/Body/ContainerThree";
import { Contact } from './Components/Body/ContactContainer';
import { Resume } from './Components/Body/ResumeContainer';
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
          <Route path="/my-web" element={<MyWeb />} />
          <Route path="/my-web/contact" element={<Contact />} />
          <Route path="/my-web/allprojects" element={<AllProjects />} />
          <Route path="/my-web/resume" element={<ResumeComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function MyWeb() {
  return (
    <>
      <ContainerOne />
      <ContainerTwo />
      <Resume tittle="Project" />
      <ContainerThree tittle="Project" />
    </>
  );
}

function AllProjects() {
  return <ContainerThree tittle="Project" />;
}

function ResumeComponent() {
  return <Resume tittle="Resume1" />;
}

function NotFound() {
  return (
    <>
      <ContainerOne />
      <ContainerTwo />
      <Resume tittle="Project" />
      <ContainerThree />
    </>
  );
}

export default App;
