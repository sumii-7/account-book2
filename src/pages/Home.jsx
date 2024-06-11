import { useContext, useEffect, useState } from "react";
import Input from "../components/Input";
import Month from "../components/Month";
import { v4 as uuidv4 } from "uuid";
import {
  SaveButton,
  StWrap,
  Section,
  Whiteform,
  ListSection,
  Stul,
  Stli,
  FirstP,
  SecondP,
  ListP,
} from "../style";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ListContext } from "../context/Context";

function Home() {
  const { accountList, setAccountList } = useContext(ListContext);
  // const year = new Array(12).fill(null);
  const year = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [changemonth, setChangemonth] = useState(1);

  const selectedmonth = (id) => {
    setChangemonth(id);
    localStorage.setItem("lastmonth", id);
  };

  useEffect(() => {
    setChangemonth(Number(localStorage.getItem("lastmonth")));
  }, []);

  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const addList = (e) => {
    e.preventDefault();
    const newList = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: amount,
      description: description,
    };

    setAccountList([...accountList, newList]);
    setDate("");
    setItem("");
    setAmount("");
    setDescription("");
  };

  return (
    <>
      <StWrap>
        <Whiteform onSubmit={addList}>
          <Input
            input="날짜"
            id="title"
            value={date}
            type={"date"}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <Input
            input="항목"
            id="category"
            placeholder="지출 항목"
            value={item}
            type={"text"}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
          <Input
            input="금액"
            id="amount"
            placeholder="지출 금액"
            value={amount}
            type={"text"}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <Input
            input="내용"
            id="data"
            placeholder="지출 내용"
            type={"text"}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <SaveButton type="submit">저장</SaveButton>
        </Whiteform>

        <Section>
          {year.map((_, index) => {
            return (
              <Month
                key={index}
                month={`${index + 1}월`}
                changemonth={changemonth}
                onClick={() => selectedmonth(index + 1)}
              />
            );
          })}
        </Section>

        <ListSection>
          <List changemonth={changemonth} />
        </ListSection>
      </StWrap>
    </>
  );
}

export default Home;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const List = ({ changemonth }) => {
  const { accountList } = useContext(ListContext);

  return (
    <Stul>
      <>
        {accountList
          .filter(
            (item) =>
              item.date.split("-")[1] ===
              changemonth.toString().padStart(2, "0")
          )
          .map((item) => (
            <Stli key={item.id}>
              <StyledLink to={`/Detail/${item.id}`}>
                <FirstP>{item.date}</FirstP>
                <SecondP>
                  {item.item} - {item.description}
                </SecondP>
                <ListP>{item.amount} 원</ListP>
              </StyledLink>
            </Stli>
          ))}
      </>
    </Stul>
  );
};
