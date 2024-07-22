import { useState } from "react";
import React from "react";
import "./cards.css";
import { initState } from "./books";
import { Link } from "react-router-dom";

let BookCard = () => {
  const [Book, setBook] = useState(initState.books);

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Book.map((book, index) => (
          <div
            key={index}
            className="bg-stone-300 rounded-3xl shadow-lg overflow-hidden"
          >
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-800 lg:text-3xl mb-2">
                  {book.title}
                </h2>
                <p className="text-lg font-medium text-gray-600">{book.id}</p>
                <div className="mt-4">
                  <p className="text-xl font-semibold text-black">
                    {book.author}
                  </p>
                  <p className="text-sm font-medium text-gray-500">/author</p>
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                    {book.isbn}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-center px-6 pb-8 sm:px-8">
              <Link
                aria-describedby="tier-company"
                className="inline-flex items-center justify-center w-full px-6 py-3 text-white duration-200 bg-black border-2 border-black rounded-full hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                href="#"
              >
                Get started
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
