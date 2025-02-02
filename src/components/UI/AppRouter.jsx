import React, { useContext } from "react";
import App from "../../App";
import About from "../../routes/About";
import Posts from "../../routes/Posts";
import Error from "../../routes/Error";
import PostIdPage from "../../routes/PostIdPage";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../routes/Login";
import { AuthContext } from "../../context";
import Loader from "./Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    console.log(isAuth);

    if (isLoading) {
        return <Loader/>
    }

    return (
        // exact - props, необходимый для разделения по смыслу
        <Routes>
            {isAuth
            ? 
            <>
            <Route path="/About" element={<About/>}/>
            <Route exact path="/Posts" element={<Posts/>}/>
            <Route exact path="/Posts/:id" element={<PostIdPage/>}/>  
            <Route path="*" element={<Navigate to="/Posts" replace />}/>        
            </>
            :
            <>
            <Route path="Login" element={<Login/>}/>
            <Route path="*" element={<Navigate to="/Login" replace />}/>
            </>   
            }
            {/* <Route path="*" element={<Error/>} /> */}
        </Routes>
    )
}

export default AppRouter;