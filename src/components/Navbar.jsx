import './Navbar.css'
import {formatCurr} from '../utils/formatCurr'

function Navbar () {
  const total = 25000;
  const token = true;
  return (
    <nav className="layout__navbar">
      <div className="navbar__title">
        <h2>Pizzería Mamma Mía</h2>
      </div>
      <div className="navbar__btns">
        <button className="btn__home">🍕 Home</button>
        {token ? (
          <div>
            <button className="btn__login">🔐 Login</button>
            <button className="btn__register">🔐 Register</button>
          </div>
        ) : (
          <div>
            <button className="btn__profile">🔓 Profile</button>
            <button className="btn__logout">🔓 Logout</button>
          </div>
        )}
      </div>
      <button className="navbar__cart">🛒 Total: ${formatCurr(total)}</button>
    </nav>
  )
}

export default Navbar