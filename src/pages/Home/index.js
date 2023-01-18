import React from "react";
import { Link } from 'react-router-dom';
import "../../styles/home.scss";

const Home=function(){
    return (
        <div className="home">
            <h1>Todo List</h1>
            <Link to="/list" className="btn">
                start
            </Link>
        </div>
    );
}
export default Home;