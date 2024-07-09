// import { useState } from "react";
import React from "react";
import "./cards.css";

import { initState } from "./books";

let BookCard = () => {
  return (
    <div className="maincont">
      {initState.books.map((book) => (
        <div className="contenaer">
          <h1>{book.id}</h1>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <h6>{book.isbn}</h6>
        </div>
      ))}
    </div>
  );
};
export default BookCard;

// id

//       author
//       isbn
