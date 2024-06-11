import React from "react";
import { IdPwButton, IdPwInput, LoginFormBox } from "../style";

const SignUp = () => {
  return (
    <>
      <LoginFormBox>
        <form>
          <h2>회원가입</h2>
          <IdPwInput type="text" placeholder="아이디" />
          <IdPwInput type="password" placeholder="비밀번호" />
          <IdPwInput type="text" placeholder="닉네임" />
          <IdPwButton>가입하기</IdPwButton>
        </form>
      </LoginFormBox>
    </>
  );
};

export default SignUp;
