import React from "react";
//用於瀏覽器 DOM 環境的 Renderer
import { createRoot } from 'react-dom/client';
//以Router導向Route
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./styles/init.scss";
import "./styles/button.scss";
//引入頁面
import Home from "./pages/Home/index";
import List from "./pages/List/index.js";


//用容器元素建立一個 React App 的畫面渲染管轄入口 (root)
const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/list" element={<List />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

