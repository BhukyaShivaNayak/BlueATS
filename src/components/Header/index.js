import {Link, withRouter} from 'react-router-dom'

import Cookie from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookie.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <div className="logo-img">
          <h1>.B</h1>
        </div>
        <p className="logo-name">Blue</p>
      </div>
      <ul className="list-container">
        <li className="l">
          <Link className="list-item" to="/">
            Home
          </Link>
        </li>
        <li className="l">
          {' '}
          <Link to="/applicant" className="list-item">
            Applicant
          </Link>
        </li>
        <li className="l">
          {' '}
          <Link to="/client" className="list-item">
            Client
          </Link>
        </li>
        <li className="l">
          {' '}
          <Link to="/vendor" className="list-item">
            Vendor
          </Link>
        </li>
        <button onClick={onClickLogout} className="logout-button" type="button">
          Logout
        </button>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
