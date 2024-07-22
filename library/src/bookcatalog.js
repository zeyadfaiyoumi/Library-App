import React, { useState, useEffect } from "react";
import axios from "axios";
import { dbURL } from "./fairbaseconfig/config";
import BookCard from "./cards";
// import { updateDoc } from "firebase/database";

function GetBooks() {
  const [books, setBooks] = useState([]);
  const [abook, setaddbook] = useState({
    author: "",
    id: null,
    title: "",
    isbn: "",
    boolen: true,
  });
  const [Updates, setUpdate] = useState("");

  // get elemant------------------------------------------------------------------------------------------------------------------------------------
  async function fetchBooks() {
    const response = await axios.get(`${dbURL}/books.json`);
    const data = response.data;
    setBooks(data);
    if (data) {
      const booksArray = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setBooks(booksArray);
    } else {
      console.log("No books found");
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  // add new book-----------------------------------------------------------------------------------------------------------------------------------
  async function Addbooks(e) {
    e.preventDefault();
    await axios.put(`${dbURL}/books/${books.length}.json`, {
      ...abook,
      id: books.length,
      delete: true,
    });
    fetchBooks();
  }

  // delete-----------------------------------------------------------------------------------------------------------------------------------------
  async function Delete(id) {
    await axios.patch(`${dbURL}/books/${id}.json`, { delete: false });
    fetchBooks();
  }

  // update-----------------------------------------------------------------------------------------------------------------------------------------
  const updateBooksTitle = async (id) => {
    try {
      if (!Updates) {
        throw new Error("Title cannot be empty");
      }

      await axios.patch(`${dbURL}/books/${id}.json`, { title: Updates });

      document.getElementById("empty").value = "";
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };
  // -----------------------------------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <h1>Books List</h1>
      <div className="maincont">
        {/* soft delete condition ---------------------------------------------*/}
        {books.map((book) =>
          book.delete ? (
            <div className="container border p-4 rounded-lg shadow-md m-4">
              <h1 className="text-lg font-bold">{book.id}</h1>
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-sm text-gray-700">{book.author}</p>
              <h6 className="text-xs text-gray-500">{book.isbn}</h6>
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                  onClick={() => Delete(book.id)}
                >
                  <div className="bg-red-600 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="translate-x-2">Delete</p>
                </button>
                <input
                  placeholder="title"
                  id="empty"
                  onChange={(e) => setUpdate(e.target.value)}
                ></input>
                <button
                  type="button"
                  className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                  // onClick={() => setUpdate(books.id)}
                  onClick={() => updateBooksTitle(book.id)}
                  disabled={!Updates}
                >
                  <div className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="translate-x-2">Update</p>
                </button>
              </div>
            </div>
          ) : null
        )}
        {/* //soft delete condition ---------------------------------------------*/}

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Add a New Book
            </h2>
            <form className="space-y-4" onSubmit={Addbooks}>
              <div></div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={abook.title}
                  onChange={(e) =>
                    setaddbook({ ...abook, title: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-gray-700"
                >
                  Author
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={abook.author}
                  onChange={(e) =>
                    setaddbook({ ...abook, author: e.target.value })
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="isbn"
                  className="block text-sm font-medium text-gray-700"
                >
                  ISBN
                </label>
                <input
                  type="text"
                  name="isbn"
                  id="isbn"
                  className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={abook.isbn}
                  onChange={(e) =>
                    setaddbook({ ...abook, isbn: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add Book
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetBooks;
