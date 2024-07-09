import "./hedar.css";
import logo from './loggg.svg';
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="navlinks">
          <img src={logo} alt="" className="logo" />
          <a href="">كتالوج المنتجات </a>
          <a href="">منتجاتي</a>
          <a href="">طلباتي</a>
          <a href="">اعدادات الحساب</a>
          <a href="">المحفضة المالية</a>
          <a href="">قصتنا</a>
        </div>
        <div className="logout">
          <a href="">تسجيل الخروج</a>
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
