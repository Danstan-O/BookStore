import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"


const Header = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4500/books")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);
  
  return (
    <header>
      <h1>Book Management App</h1>
      <hr />
      <section>
        <img className="bg-book-image" />
        <div className="book-content">
        </div>
      </section>

      <div
        style={{
          textAlign: "center",
          justifyContent: "center",
          padding: "2px 20px 2px 20px",
        }}
      >
        <h1 style={{ marginTop: "20px" }}>Our Bookstore</h1>
        <div className="book-members">
          {books.map((book) => (
            <div
              key={book.id}
              style={{
                outline: "0.5px solid #000",
                // border: "1px solid #000",
              }}
            >
              <div style={{ margin: "10px" }}>
                <div style={{}}>
                  <img
                    style={{ justifyContent: "center" }}
                    src={book.BookURL}
                    alt="holla me "
                  />
                </div>

                <h4>
                  {book.fullname},{" "}
                  {/* <span style={{ fontWeight: "200" }}>{member.position}</span> */}
                </h4>
                <div>{book.year}</div>
                <div>{book.isbn}</div>
                <p>{book.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="links">
        {/* <NavLink to="/" className="link"  exact>
          Books List
        </NavLink> */}

        <NavLink to="/add" className="link">
          Add Book
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
