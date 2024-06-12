import React from "react";
import { BgHeader, StHeader } from "../style";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <BgHeader>
      <StHeader>
        <div className="left">
          <Link to={"/"} className="homelink">
            <h1>Home</h1>
          </Link>
          <Link to={"/MyPage"} className="mypagelink">
            <button className="profile">내 프로필</button>
          </Link>
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
