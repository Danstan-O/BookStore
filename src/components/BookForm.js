import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const BookForm = (props) => {
  const [book, setBook] = useState({
    booktitle: props.book ? props.book.title : "",
    author: props.book ? props.book.author : "",
    quantity: props.book ? props.book.quantity : "",
    year: props.book ? props.book.year : "",
    bookgenre: props.book ? props.book.genre : "",
    isbn: props.book ? props.book.isbn : "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { booktitle, author, price, quantity, bookgenre } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [booktitle, author, price, quantity, bookgenre];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        // id: new date(),
        booktitle,
        bookgenre,
        author,
        price,
        quantity,
    
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
      case "price":
        if (value === "" 
        || value.match(/^\d{1,}(\.\d{0,2})?$/)
        )         {
          setBook((prevState) => ({
            ...prevState,
            [name]: value,
          }));
        }
        break;
        
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Title</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="booktitle"
            value={booktitle}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Book Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="bookgenre">
          <Form.Label>Book Genre</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookgenre"
            value={bookgenre}
            placeholder="Enter genre of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="quantity"
            value={quantity}
            placeholder="Enter available quantity"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
