"use client";
import React, { createContext, useReducer, useContext } from "react";

const initalState = {
  dragoDatas: null,
  searchQuery: null,
  fusionLevelQuery: 0,
  isRentedQuery: "all",
};

const DragoContext = createContext();

const DragoReducer = (state, action) => {
  switch (action.type) {
    case "SET_DRAGO_DATAS":
      return {
        ...state,
        dragoDatas: action.payload,
      };
    case "SET_SEARCH_QUERY":
      return {
        ...state,
        searchQuery: action.payload,
      };
    case "SET_FUSION_LEVEL_QUERY":
      return {
        ...state,
        fusionLevelQuery: action.payload,
      };
    case "IS_RENTED_QUERY":
      return {
        ...state,
        isRentedQuery: action.payload,
      };
    default:
      return state;
  }
};

export const useDragoData = () => useContext(DragoContext);

export const DragoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DragoReducer, initalState);
  return (
    <DragoContext.Provider value={{ state, dispatch }}>
      {children}
    </DragoContext.Provider>
  );
};
