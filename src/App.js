import React, { useEffect, useState } from "react";
import './Styles/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from "./routes/About";
import Posts from "./routes/Posts";
import Error from "./routes/Error";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/UI/AppRouter";
import { AuthContext } from "./context";
import Footer from "./components/UI/Footer/Footer";


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, [])

  // информация обо мне
  const tel = '89605291378'
  const vkId = 'https://vk.com/id280092151'
  const tg = 'https://web.telegram.org/a/#1981855128';

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        {/* Навигационная панель */}
        <Navbar />
        <div className="main">
          {/* Навигация */}
          <AppRouter />
          {/* Футер */}
          <Footer tel={tel} vk={vkId} tg={tg}/>
        </div>

      </BrowserRouter>
    </AuthContext.Provider>

  );
}



export default App;
