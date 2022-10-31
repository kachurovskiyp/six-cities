import { Navigate } from 'react-router-dom';
import { AppRoute, AutorizationStatus } from '../../const';

type PrivateRoouterProps = {
  authorizationStatus: AutorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRoouterProps): JSX.Element {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === AutorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
