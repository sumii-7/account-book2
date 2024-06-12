import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { ListContext } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import axios from "axios";
import MyPage from "../pages/MyPage";

const Router = () => {
  const [accountList, setAccountList] = useState([]);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/List");
        setAccountList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);

  return (
    <ListContext.Provider
      value={{ accountList, setAccountList, userData, setUserData }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
};

export default Router;
