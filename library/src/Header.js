import "./hedar.css";
import logo from "./loggg.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let UserDate = JSON.parse(localStorage.getItem("users"));
  let navigate = useNavigate();

  let logout = () => {
    localStorage.removeItem("users");
    navigate("/");
  };
  let Signup = () => {
    navigate("/sign");
  };

  return (
    <div>
      <nav className="navbar z-50">
        <div className="navlinks">
          <img src={logo} alt="" className="logo" />
          <Link to="/Home"> الرئيسيه </Link>
          <Link to={""} href="">
            حولنا
          </Link>
          <Link to={""}>تواصل معنى</Link>
          <Link to="/books">كتالوج الكتب</Link>
          <Link to={"/"}>قصتنا</Link>
        </div>
        <div className="logout">
          {UserDate ? (
            <button onClick={logout}>تسجيل خروج</button>
          ) : (
            <button onClick={Signup}>تسجيل حساب</button>
          )}
        </div>
        <div className="humberger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
