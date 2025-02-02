import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
    <div className="navbar">
        <MyButton 
            // style={{color: "white", backgroundColor: "rgb(66, 70, 75)", border: "rgb(42, 49, 55)"}} 
            id={'navbarBtn'}
            onClick={logout}
        >
            Выйти
        </MyButton>
        <div className="navbar__links">
          {/* Link позволяет переходить между страницами без перезагрузки
          То есть соблюдаем принцип single page application */}
          <Link className="links" to="/about">О сайте</Link>
          <Link className="links" to="/posts">Посты</Link>
        </div>
    </div>
    )
}

export default Navbar;