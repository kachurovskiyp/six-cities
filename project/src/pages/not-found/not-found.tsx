import { Link } from 'react-router-dom';

function NotFound(): JSX.Element {
  return (
    <div>
      <p>Page not found</p>
      <p>
        <Link to="/">
          Back to main page
        </Link>
      </p>
    </div>
  );
}

export default NotFound;
