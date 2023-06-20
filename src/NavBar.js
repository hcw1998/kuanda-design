import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import "./styles.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import("bootstrap") 

// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="/">KuanDa Design</a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className=" collapse navbar-collapse" id="navbarNavDropdown">
//           <ul className="navbar-nav ms-auto ">
//             <li className="nav-item">
//               <a className="nav-link mx-2" aria-current="location" href="/project">Project</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link mx-2" href="/about">About</a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link mx-2 active" href="/contact">Contact</a>
//             </li>
//             <li class="nav-item dropdown">
//               <a class="nav-link dropdown-toggle" href="/" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Dropdown
//               </a>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                 <li><a className="dropdown-item" href="/blog">Blog</a></li>
//                 <li><a className="dropdown-item" href="/fu">About Us</a></li>
//                 <li><a className="dropdown-item" href="/ck">Contact us</a></li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   )
// }

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg" style= {{backgroundColor: "#FFFFFF"}} >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">寬達設計 · KuanDa Design</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
          {/* <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="/dropdown" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                作品總覽
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item" href="/residence">住宅空間</a></li>
                <li><a className="dropdown-item" href="/commercial">商辦空間</a></li>
              </ul>
            </li> */}
            <CustomLink href="/project">作品總覽</CustomLink>
            <CustomLink href="/about">關於寬達</CustomLink>
            <CustomLink href="/work-flow">作業流程</CustomLink>
            <CustomLink href="/contact">設計團隊</CustomLink>
            <CustomLink href="/furniture">材質設備</CustomLink>
            <CustomLink href="/artlife">藝文生活</CustomLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

function CustomLink({ href, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className='nav-item'>
      <a className={path === href ? "nav-link mx-2 active" : "nav-link mx-2"} href={href} {...props}>
        {children}
      </a>
    </li>
  )
}

// export default function NavBar() {
//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         KuanDa Design
//       </Link>
//       <ul>
//         <CustomLink to="/Project">Project</CustomLink>
//         <CustomLink to="/About">About</CustomLink>
//         <CustomLink to="/Contact">Contact</CustomLink>
//       </ul>
//     </nav>
//   )
// }
// function CustomLink({ to, children, ...props }) {
//   const resolvedPath = useResolvedPath(to)
//   const isActive = useMatch({ path: resolvedPath.pathname, end:true })

//   return (
//     <li className={isActive ? "active": ""}>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   )
// }