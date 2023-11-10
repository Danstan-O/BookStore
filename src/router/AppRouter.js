import React from "react";
import Header from "../components/Header";
import AddBook from "../components/AddBook";
import BooksList from "../components/BooksList";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

const AppRouter = () => {
    const [books, setBooks] = useLocalStorage("books", []);
  return (
    <Router>
      <div>
        <Header />
        <div className="main-content">
          <Routes>
            <Route component={BooksList} path="/" />
                     <Route
              render={(props) => (
                <AddBook {...props} books={books} setBooks={setBooks} />
              )}
              path="/add"
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default AppRouter;
