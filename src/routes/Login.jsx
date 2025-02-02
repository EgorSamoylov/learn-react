import React, { useContext, useState } from "react";
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import { AuthContext } from "../context";
import '../Styles/App.css';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const [log, setLog] = useState('');
    const [pas, setPas] = useState('');

    // сохранение пароля в localStorage
    localStorage.setItem('login', 'Egor');
    localStorage.setItem('password', 'qwerty')

    const login = event => {
        event.preventDefault();
        if (log == localStorage.getItem('login') && pas == localStorage.getItem('password')){
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
        } else {
            setLog('');
            setPas('');
        }
        // setIsAuth(true);
        // localStorage.setItem('auth', 'true');
    }
    return (
        <div className="loginPage">
            <h1 style={{marginTop: "0px", marginBottom: "10px"}}>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput 
                    value={log}
                    id="logInput" 
                    type="text" 
                    placeholder="логин"
                    onChange={e => setLog(e.target.value)}
                />
                <MyInput 
                    value={pas}
                    id="logInput" 
                    type="password" 
                    placeholder="пароль"
                    onChange={e => setPas(e.target.value)}
                />
                <MyButton id="logBtn">Войти</MyButton>
            </form>
        </div>
    )
}

export default Login;