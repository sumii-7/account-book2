import React from "react";
import { BgHeader, StHeader } from "../style";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <BgHeader>
      <StHeader>
        <div className="left">
          <h1>Home</h1>
          <button className="profile">내 프로필</button>
        </div>
        <div className="right">
          <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            로그인
          </button>
        </div>
      </StHeader>
    </BgHeader>
  );
};

export default Header;
