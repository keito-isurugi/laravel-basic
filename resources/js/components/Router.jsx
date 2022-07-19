import {BrowserRouter, Route, Routes, Link, NavLink, useResolvedPath, useMatch, useNavigate} from "react-router-dom"
import {Home} from "./Home"
import {Page1} from "./Page1"
import {Page2} from "./Page2"
import {Page1A} from "./Page1A"
import {Page1B} from "./Page1B"

export const Router = () => {
  const Nav = () => {
    const navigate = useNavigate();
    return (
      <button onClick={() => navigate('/page2')}>Page2</button>
    )
  }

  function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({
      path: resolved.pathname,
      end: true,
    });
    console.log(match);
    return (
      <div>
        <Link style={{ color: match ? 'green' : 'none' }} to={to}> 
          {children}
        </Link>
      </div>
    );
  }

  return (
  <BrowserRouter>
      <Nav />
      <Link to="/">Home</Link>
      <Link to="/page1">Page1</Link>
      <Link to="/page2">Page2</Link>
      <NavLink style={({ isActive }) => (isActive ? { color: 'red' } : undefined)} to="/">Home</NavLink>
      <CustomLink to="/">Home</CustomLink>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />}>
        <Route path=":pageId" element={<Page1A />} />
      </Route>
      <Route path="/page2" element={<Page2 />} />
    </Routes> 
  </BrowserRouter>
  )
}