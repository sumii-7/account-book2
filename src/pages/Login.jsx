import React, { useState } from "react";
import { IdPwButton, IdPwInput, LoginFormBox } from "../style";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loginUserId, setLoginUserId] = useState("");
  const [loginUserPw, setLoginUserPw] = useState("");
  const navigate = useNavigate();

  const onLoginHandler = async () => {
    try {
      const loginUser = {
        id: loginUserId,
        password: loginUserPw,
      };
      const { data } = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        loginUser
      );

      console.log(data);

      const token = await axios.get("https://moneyfulpublicpolicy.co.kr/user", {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      });
      console.log(token);

      localStorage.setItem("accessToken", data.accessToken);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginFormBox>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoginHandler();
            alert("로그인 성공!");
          }}
        >
          <h2>로그인</h2>
          <IdPwInput
            type="text"
            placeholder="아이디를 입력하세요."
            onChange={(e) => {
              setLoginUserId(e.target.value);
            }}
          />
          <IdPwInput
            type="text"
            placeholder="비밀번호를 입력하세요."
            onChange={(e) => {
              setLoginUserPw(e.target.value);
            }}
          />
          <IdPwButton>로그인</IdPwButton>
          <IdPwButton
            onClick={() => {
              navigate("/SignUp");
            }}
          >
            회원가입
          </IdPwButton>
        </form>
      </LoginFormBox>
    </>
  );
};

export default Login;
