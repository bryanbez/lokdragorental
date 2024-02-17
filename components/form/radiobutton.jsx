import React, { useState, useEffect } from "react";
import { FieldComponent } from "./fieldComponent";
import { useDragoData } from "@/app/lib/context/dataContext";

export const RadioButtonComponent = () => {
  const { state, dispatch } = useDragoData();
  const [isRented, setIsRented] = useState("all");

  useEffect(() => {
    dispatch({ type: "IS_RENTED_QUERY", payload: isRented });
    const allRadioBtn = document.querySelectorAll('input[type="radio"]');
    const isDragoDatasArray = Array.isArray(state.dragoDatas);
    allRadioBtn.forEach((radioBtn) => {
      radioBtn.disabled = !isDragoDatasArray;
    });
  }, [state.dragoDatas, isRented]);

  return (
    <>
      <FieldComponent
        fieldId="all"
        label="All"
        value="all"
        checked={isRented === "all"}
        onChange={(e) => {
          setIsRented(e.target.value);
        }}
        fieldType="radio"
        fieldClass="radio-style"
        labelClass="flex items-center mb-2 text-gray-300"
      />
      <FieldComponent
        fieldId="rented"
        label="Rented"
        value="rented"
        checked={isRented === "rented"}
        onChange={(e) => {
          setIsRented(e.target.value);
        }}
        fieldType="radio"
        fieldClass="radio-style"
        labelClass="flex items-center mb-2 text-gray-300"
      />
      <FieldComponent
        fieldId="notRented"
        label="Not Rented"
        value="notRented"
        checked={isRented === "notRented"}
        onChange={(e) => {
          setIsRented(e.target.value);
        }}
        fieldType="radio"
        fieldClass="radio-style"
        labelClass="flex items-center mb-2 text-gray-300"
      />
    </>
  );
};
