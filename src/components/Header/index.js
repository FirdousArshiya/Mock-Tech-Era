import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header">
    <div>
      <Link to="/">
        <img
          className="header-logo"
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </div>
  </div>
)
export default Header
