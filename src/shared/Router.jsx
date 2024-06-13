import React, { useEffect, useState } from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import { ListContext } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";
import Layout from "../components/Layout";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "../lib/api/expenses";

const Router = () => {
  const [userData, setUserData] = useState(null);
  const [expensesList, setExpensesList] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      setExpensesList(data);
    }
  }, [data]);

  if (isLoading) {
    return <div>로딩중 입니다.</div>;
  }

  return (
    <ListContext.Provider
      value={{
        userData,
        setUserData,
        expensesList,
        setExpensesList,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/Detail/:id" element={<Detail />} />
          </Route>
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </BrowserRouter>
    </ListContext.Provider>
  );
};

export default Router;
