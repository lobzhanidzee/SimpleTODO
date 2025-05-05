import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/posts"
              className={location.pathname.includes("/users") ? "active" : ""}
            >
              Create a post
            </Link>
          </li>
          <li>
            <Link
              to="/remove"
              className={location.pathname === "/about" ? "active" : ""}
            >
              Remove a post
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2023 My Website. All rights reserved.</p>
        <p>
          Follow us on
          <a href="https://twitter.com" target="_blank">
            {" "}
            Twitter
          </a>
          ,
          <a href="https://facebook.com" target="_blank">
            {" "}
            Facebook
          </a>
          , and
          <a href="https://instagram.com" target="_blank">
            {" "}
            Instagram
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Layout;
