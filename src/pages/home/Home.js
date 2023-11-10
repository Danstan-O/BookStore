import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header>
        <h1>Book Management App</h1>
        <hr />
        <div className="links">
          <NavLink to="/" className="link" activeClassName="active" exact>
            Books List
          </NavLink>
          <NavLink to="/add" className="link" activeClassName="active">
            Add Book
          </NavLink>
        </div>
      </header>
    </div>
  );
}

export default Home;
