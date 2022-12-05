import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { store } from '../../store';
import { AuthorizationStatus, AppRoute } from '../../const';
import HeaderUser from '../header-user/header-user';

function Header(): JSX.Element {

  const authStatus = useAppSelector((state) => state.authorizationStatus);
  const navigate = useNavigate();

  const onSignButtonClick = (evt: SyntheticEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    if(authStatus === AuthorizationStatus.Auth){
      store.dispatch(logoutAction());
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={{ pathname: '/' }}>
              <div className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </div>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                authStatus === AuthorizationStatus.Auth ?
                  <HeaderUser/> :
                  null
              }
              <li className="header__nav-item">
                <a onClick={onSignButtonClick} className="header__nav-link" href="index">
                  <span className="header__signout">{authStatus === AuthorizationStatus.Auth ? 'Sign out' : 'Sign in'}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
