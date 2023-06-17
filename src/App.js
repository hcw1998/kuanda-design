import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Project from './pages/Project'
import Workflow from './pages/Workflow';
import RestidenceOne from './pages/project/ResidenceOne';
import "./styles.scss";

function App() {
  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          {/* <Route path='/residence' element={<Restidence />} />
          <Route path='/commercial' element={<Commercial />} /> */}
          <Route path='/project' element={<Project />} />
          <Route path='/about' element={<About />} />
          <Route path='/work-flow' element={<Workflow />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/project/residence-one' element={<RestidenceOne />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;
