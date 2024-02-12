import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/profile'>profile</Link>
    </nav>
  )
}

export default Navbar