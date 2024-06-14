import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DetailSection, DetailWrap, Detaildiv, Detailinput } from "../style";
import { ListContext } from "../context/Context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getExpense, putExpense, deleteExpense } from "../lib/api/expenses";

const Detail = () => {
  const { setExpensesList } = useContext(ListContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const {
    data: selectedExpense,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["expenses", id],
    queryFn: getExpense,
  });

  console.log(selectedExpense);

  const inputRef = useRef(null);
  const itemRef = useRef(null);
  const amountRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    if (selectedExpense) {
      inputRef.current.value = selectedExpense.date;
      itemRef.current.value = selectedExpense.item;
      amountRef.current.value = selectedExpense.amount;
      descriptionRef.current.value = selectedExpense.description;
    }
  }, [selectedExpense]);

  const mutationDelete = useMutation({
    mutationFn: deleteExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries(["expenses"]);
    },
  });

  const mutationEdit = useMutation({
    mutationFn: putExpense,
    onSuccess: () => {
      navigate("/");
      queryClient.invalidateQueries(["expenses"]);
    },
  });

  function changeBtn(e) {
    e.preventDefault();

    const newExpense = {
      id: id,
      date: inputRef.current.value,
      item: itemRef.current.value,
      amount: amountRef.current.value,
      description: descriptionRef.current.value,
    };

    mutationEdit.mutate(newExpense);
    navigate(-1);
  }

  function deleteBtn() {
    mutationDelete.mutate(id);
  }

  const [dataList, setDataList] = useState({});

  return (
    <DetailWrap>
      <DetailSection>
        <Detaildiv>
          <label htmlFor="date">날짜</label>
          <Detailinput
            type="text"
            id="date"
            defaultValue={dataList.date}
            ref={inputRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label htmlFor="item">항목</label>
          <Detailinput
            type="text"
            id="item"
            defaultValue={dataList.item}
            ref={itemRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label htmlFor="amount">금액</label>
          <Detailinput
            type="text"
            id="amount"
            defaultValue={dataList.amount}
            ref={amountRef}
          />
        </Detaildiv>
        <Detaildiv>
          <label htmlFor="description">내용</label>
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
