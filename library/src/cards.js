import { useState } from "react";
import React from "react";
import "./cards.css";

import { initState } from "./books";

let BookCard = () => {
  //   return (
  //     <div className="maincont">
  //       {initState.books.map((book) => (
  //         <div className="contenaer">
  //           <h1>{book.id}</h1>
  //           <h2>{book.title}</h2>
  //           <p>{book.author}</p>
  //           <h6>{book.isbn}</h6>
  //         </div>
  //       ))}
  //     </div>
  //   );
  const [Book, setBook] = useState(initState.books);
  return (
    <div className="maincont">
      {Book.map((book) => (
        <div className="contenaer">
          <h1>{book.id}</h1>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <h6>{book.isbn}</h6>
          <button
            onClick={() =>
              setBook([
                {
                  id: 1,
                  title: "",
                  author: "",
                  isbn: "",
                },
                {
                  id: 2,
                  title: "",
                  author: "",
                  isbn: "",
                },
                {
                  id: 3,
                  title: " ",
                  author: "",
                  isbn: "",
                },
                {
                  id: 4,
                  title: " ",
                  author: "   ",
                  isbn: "",
                },

                {
                  id: 5,
                  title: "  ",
                  author: "   ",
                  isbn: "",
                },
                {
                  id: 6,
                  title: "   ",
                  author: "  ",
                  isbn: "",
                },
              ])
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default BookCard;
