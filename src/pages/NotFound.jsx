import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to="/">Return to Main</Link>
    </>
  );
}

export default NotFound;
