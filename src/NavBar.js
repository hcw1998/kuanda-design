import { Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/project', label: '作品總覽' },
  { to: '/about', label: '關於H-C-D' },
  { to: '/work-flow', label: '作業流程' },
  { to: '/contact', label: '聯絡我們' },
  { to: '/furniture', label: '材質設備' },
]

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">H-C-D Design of Art · 程奕設計</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
          aria-expanded="false" aria-label="開啟選單">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {links.map((link) => <NavItem key={link.to} {...link} />)}
          </ul>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ to, label }) {
  // useLocation 會在切換路由時重新渲染；
  // 舊版讀 window.location.pathname，用 <Link> 之後就不會更新了。
  const { pathname } = useLocation()
  const isActive = pathname === to || pathname.startsWith(`${to}/`)

  return (
    <li className="nav-item">
      <Link className={isActive ? 'nav-link mx-2 active' : 'nav-link mx-2'}
        to={to} aria-current={isActive ? 'page' : undefined}>
        {label}
      </Link>
    </li>
  )
}
