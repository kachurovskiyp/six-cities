import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getUserEmail } from '../../store/user-process/user-selectors';

function HeaderUser(): JSX.Element {
  const userEmail = useAppSelector(getUserEmail);

  return (
    <li className="header__nav-item user">
      <Link to={{ pathname: '/favorites' }}>
        <div className="header__nav-link header__nav-link--profile">
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__user-name user__name">{userEmail}</span>
          <span className="header__favorite-count">3</span>
        </div>
      </Link>
    </li>

  );
}

export default HeaderUser;
