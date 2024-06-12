import React, { useContext, useEffect, useState } from "react";
import { ProfileWrap } from "../style";
import { ListContext } from "../context/Context";
import axios from "axios";

const MyPage = () => {
  const { userData, setUserData } = useContext(ListContext);
  const [nickname, setNickname] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await axios.get(
        "https://moneyfulpublicpolicy.co.kr/user",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const { id, avatar, nickname } = userInfo.data;
      setUserData({ id, avatar, nickname });
      setNickname(nickname);
    };
    getUserInfo();
  }, []);

  return (
    <>
      <ProfileWrap>
        <div>
          <p>프로필 사진</p>
          <button>프로필 사진 변경</button>
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <button>닉네임 변경</button>
        </div>
      </ProfileWrap>
    </>
  );
};

export default MyPage;
