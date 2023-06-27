import { Route, Routes, Outlet } from 'react-router-dom';

import NavBar from './NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home'
import Project from './pages/Project'
import Workflow from './pages/Workflow';
import Residence from './pages/Residence';


function Layout(props) {
  return (
    <>
      <div className='min-vh-100'>
        <NavBar />
        <div className='container'>
          {props.children}
        </div>
      </div>
      <Footer />
    </>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout><Outlet/></Layout>}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/project' element={<Project />} />
        <Route path='/project/:projectId' element={<Residence />} />
        <Route path='/about' element={<About />} />
        <Route path='/work-flow' element={<Workflow />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App;
