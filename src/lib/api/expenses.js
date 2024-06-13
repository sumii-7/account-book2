import axios from "axios";

export const getExpenses = async () => {
  try {
    const { data } = await axios.get("http://localhost:4000/List");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const { data } = await axios.get("http://localhost:4000/List");
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postExpenses = async (newExpenses) => {
  try {
    const { data } = await axios.post(
      "http://localhost:4000/List",
      newExpenses
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
