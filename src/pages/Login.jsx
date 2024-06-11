import React from "react";
import { IdPwButton, IdPwInput, LoginFormBox } from "../style";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <LoginFormBox>
        <form>
          <h2>로그인</h2>
          <IdPwInput type="text" placeholder="아이디를 입력하세요." />
          <IdPwInput type="text" placeholder="비밀번호를 입력하세요." />
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
