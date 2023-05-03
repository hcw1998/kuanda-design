import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Project from './pages/Project'
import Workflow from './pages/Workflow';
import "./styles.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/work-flow' element={<Workflow />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
