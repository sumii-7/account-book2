import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { ListContext } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import axios from "axios";

const Router = () => {
  const [accountList, setAccountList] = useState([]);

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
    <ListContext.Provider value={{ accountList, setAccountList }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
};

export default Router;
