import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./Reducer";

let API = "http://";

const initialState = {
  isLoading: true,
  query: "mobile",
  price: "0",
  product: [],
};

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async (url) => {
    dispatch({ type: "SET_Loding" });

    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_DATA",
        payload: {
          product: data.product,
          price: data.price,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

const removePost = (product) => {
  dispatch({
    type: "REMOVE_PRODUCT",
    payload: product.id,
  });
};
const searchPost = (searchQuery) => {
  dispatch({
    type: "SEARCH_QUERY",
    payload: searchQuery,
  });
};

useEffect(() => {
  fetchApi(`${API}query=${state.query}`);
}, [state.query]);

export default function App() {
  return (
    <AppContext.Provider value="query">
      <User />
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

function User() {
  const value = React.useContext(AppContext);

  return <h1>{value}</h1>;
}
