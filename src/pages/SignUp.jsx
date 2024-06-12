import React, { useState } from "react";
import { IdPwButton, IdPwInput, LoginFormBox } from "../style";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async () => {
    try {
      const user = {
        id: userId,
        password: userPw,
        nickname: userNickname,
      };
      const {} = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/register",
        user
      );

      navigate("/Login");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <LoginFormBox>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
          }}
        >
          <h2>회원가입</h2>
          <IdPwInput
            type="text"
            placeholder="아이디"
            onChange={(e) => {
              setUserId(e.target.value);
            }}
          />
          <IdPwInput
            type="password"
            placeholder="비밀번호"
            onChange={(e) => {
              setUserPw(e.target.value);
            }}
          />
          <IdPwInput
            type="text"
            placeholder="닉네임"
            onChange={(e) => {
              setUserNickname(e.target.value);
            }}
          />
          <IdPwButton>가입하기</IdPwButton>
        </form>
      </LoginFormBox>
    </>
  );
};

export default SignUp;
