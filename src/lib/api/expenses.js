import axios from "axios";

export const getExpenses = async () => {
  try {
    const { data } = await axios.get(
      "https://indigo-sky-entree.glitch.me/List"
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getExpense = async ({ queryKey }) => {
  try {
    const { data } = await axios.get(
      `https://indigo-sky-entree.glitch.me/List/${queryKey[1]}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postExpenses = async (newExpenses) => {
  try {
    const { data } = await axios.post(
      "https://indigo-sky-entree.glitch.me/List",
      newExpenses
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const putExpense = async (updatedExpense) => {
  console.log(updatedExpense);
  const { id, ...rest } = updatedExpense;
  try {
    const { data } = await axios.put(
      `https://indigo-sky-entree.glitch.me/List/${id}`,
      rest
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
