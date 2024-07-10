import "./App.css";
import Signup from "./signup";
import Navbar from "./Header";
import BookCard from "./cards";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let UserDate = JSON.parse(localStorage.getItem("users"));

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {UserDate ? <h1>hi {UserDate.name}</h1> : <></>}

        <Routes>
          <Route path="/Home" element={<BookCard />} />
          <Route path="/sign" element={<Signup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
