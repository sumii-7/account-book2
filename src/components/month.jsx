import styled from "styled-components";

const MonthButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: ${(props) => (props.isseleted ? "#61a740" : "#eee")};
  border: none;
  border-radius: 10px;
  font-size: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Month = ({ month, changemonth, onClick }) => {
  const isseleted = Number(month.replace("월", "")) === changemonth; // 삼항연산자를 쓰기위해 불리언타입으로 만드는 것
  return (
    <MonthButton onClick={() => onClick(month)} isseleted={isseleted}>
      {month}
    </MonthButton>
  );
};

export default Month;
