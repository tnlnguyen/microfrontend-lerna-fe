import { Link, BrowserRouter } from 'react-router-dom';

export default function Root(props) {
  return (
    <BrowserRouter>
      <header>
        <h1>{props.name} is mounted!</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
            <li>
              <Link to="/snippet">Snippet</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}
