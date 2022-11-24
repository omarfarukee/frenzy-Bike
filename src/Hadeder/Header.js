import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Page/AuthProviuder/AuthProvider';
const Header = () => {
const {user, logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => console.error(error))
  }
  const berItem = <React.Fragment>
    <p className='mt-3 font-bold'>{user?.email ? user.displayName : 'user not login'}</p>

    <li><Link to='/home'>home</Link></li>
    <li><Link to='/category'>Category</Link></li>
    <li><Link to='/blog'>Blog</Link></li>
    {user?.uid ? <button className='btn btn-warning' onClick={handleLogOut}>logout</button>
      : <> <li><Link to='/signUp'>Sign-up</Link></li>
        <li><Link to='/login'>Login</Link></li> </>}


  </React.Fragment>
  return (
    <div>
      <div className="navbar bg-base-200 rounded flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {berItem}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='bg-green-600 rounded-lg p-2'>Bike</span>Frenzy</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {berItem}
          </ul>
        </div>
            {/* <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label> */}
      </div>
    </div>
  );
};

export default Header;