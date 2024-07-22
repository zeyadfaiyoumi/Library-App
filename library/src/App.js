import "./App.css";
import Signup from "./signup";
import Navbar from "./Header";
import BookCard from "./cards";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetBooks from "./bookcatalog";

function App() {
  let UserDate = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <h1 className="text-red-500">test</h1>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="welcome-message">
          {UserDate ? <h3>Welcome {UserDate.name} in our library</h3> : <></>}
        </div>

        <Routes>
          <Route path="/Home" element={<BookCard />} />
          <Route path="/sign" element={<Signup />} />
          <Route path="/books" element={<GetBooks />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
