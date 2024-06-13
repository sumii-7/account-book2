import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailSection, DetailWrap, Detaildiv, Detailinput } from "../style";
import { ListContext } from "../context/Context";

const Detail = () => {
  const { expensesList, setExpensesList } = useContext(ListContext);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  const navigate = useNavigate();
  const { id } = useParams();
  const inputRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  function changeBtn() {
    const newExpensesList = accountList.map((i) => {
      if (i.id === id) {
        i.date = inputRef.current.value;
        i.item = itemRef.current.value;
        i.amoun = amountRef.current.value;
        i.description = descriptionRef.current.value;
      }
      return i;
    });
    setExpensesList(newExpensesList);
    navigate(-1);
  }

  function deleteBtn() {
    const deleteExpensesList = accountList.filter((i) => i.id !== id);
    alert("정말로 삭제하겠습니까?");
    setExpensesList(deleteExpensesList);
    navigate(-1);
  }

  const [dataList, setDataList] = useState({});

  useEffect(() => {
    const selectId = expensesList.filter((i) => i.id === id);
    setDataList(selectId[0]);
  }, [expensesList]);
  if (!dataList) return null;

  return (
    <DetailWrap>
      <DetailSection>
        <Detaildiv>
          <label for="date">날짜</label>
          <Detailinput
            type="text"
            id="date"
            defaultValue={dataList.date}
            ref={inputRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label for="item">항목</label>
          <Detailinput
            type="text"
            id="item"
            defaultValue={dataList.item}
            ref={itemRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label for="amount">금액</label>
          <Detailinput
            type="text"
            id="amount"
            defaultValue={dataList.amount}
            ref={amountRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label for="description">내용</label>
          <Detailinput
            type="text"
            id="description"
            defaultValue={dataList.description}
            ref={descriptionRef}
          />
        </Detaildiv>

        <button onClick={changeBtn}>수정하기</button>
        <button onClick={deleteBtn}>삭제하기</button>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          Home으로 이동
        </button>
      </DetailSection>
    </DetailWrap>
  );
};

export default Detail;
