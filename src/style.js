import styled from "styled-components";

export const StWrap = styled.div`
  width: 950px;
  height: 1300px;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Whiteform = styled.form`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 20px;
  display: flex;
`;

export const SaveButton = styled.button`
  width: 70px;
  background-color: #61a740;
  color: white;
  font-size: 17px;
  letter-spacing: 1px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const Section = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 20px;
  display: grid;
  place-items: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  gap: 15px;
`;

export const ListSection = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 30px 20px;
  border-radius: 15px;
`;

// export const LoginBox = styled.div`
//   width: 950px;
//   padding: 0 30px;
//   display: flex;
//   justify-content: right;

//   button {
//     border: none;
//     background: none;
//     font-size: 20px;

//   }
// `;

// List style
export const Stul = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Stli = styled.li`
  background-color: #eee;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px 30px;
  position: relative;
`;

export const FirstP = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 13px;
`;

export const SecondP = styled.p`
  width: 85%;
  height: 20px;
  font-size: 20px;
  color: #61a740;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ListP = styled.p`
  font-size: 20px;
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 21px;
  color: #61a740;
  font-weight: bold;
`;

// Detail.jsx
export const DetailWrap = styled.div`
  width: 950px;
  height: 460px;
  background-color: #ffe176;
  border-radius: 25px;
  margin: 30px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 30px;
`;

export const DetailSection = styled.section`
  width: 100%;
  background-color: #fff;
  border-radius: 15px;
  padding: 30px 20px;
`;

export const Detaildiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 20px;
`;

export const Detailinput = styled.input`
  height: 35px;
  margin-top: 10px;
  outline: none;
  font-size: 18px;
  text-indent: 5px;
  border-radius: 7px;
  border: 1px solid #999;
`;

// Login.jsx
export const LoginFormBox = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 350px;
    height: 450px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #61a740;
    border-radius: 10px;
    border: 3px dashed #fff;
  }

  h2 {
    font-size: 28px;
    text-align: center;
    margin-bottom: 30px;
    color: #fff;
    letter-spacing: 2px;
  }
`;

export const IdPwInput = styled.input`
  width: 85%;
  height: 35px;
  margin: 0 auto 40px auto;
  border: none;
  text-indent: 10px;
  border-radius: 5px;
  outline: none;
`;

export const IdPwButton = styled.button`
  width: 85%;
  height: 35px;
  margin: 0 auto 40px auto;
  border: none;
  border-radius: 5px;
`;

// Header.jsx
export const BgHeader = styled.header`
  height: 60px;
  background-color: #eee;
`;

export const StHeader = styled.div`
  width: 950px;
  height: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .left {
    display: flex;
    gap: 8px;
    h1 {
      width: 55px;
      font-size: 20px;
      line-height: 60px;
    }

    .profile {
      border: none;
      font-size: 16px;
    }
  }
  .right {
    display: flex;
    align-items: center;

    button {
      border: none;
      font-size: 20px;
    }
  }
`;
