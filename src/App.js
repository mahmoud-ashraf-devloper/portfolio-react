import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/index';
import Home from './components/Home/Home';
import About from './components/AboutMe/About';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" element={<Layout />} >
          <Route index element={<About />} />
        </Route>
        <Route path="/contact" element={<Layout />} >
          <Route index element={<Contact />} />
        </Route>
        <Route path="/projects" element={<Layout />} >
          <Route index element={<Projects />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
