"use client";

import React, { useEffect, useState } from "react";
import { FieldComponent } from "./fieldComponent";
import { useDragoData } from "@/app/lib/context/dataContext";

export const TextBoxComponent = () => {
  const [search, setSearch] = useState("");
  const { dispatch } = useDragoData();

  useEffect(() => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: search });
  }, [search]);

  return (
    <FieldComponent
      fieldId="search"
      label="Search"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
      }}
      fieldType="text"
      placeholder="Search Drago Id"
      fieldClass="textbox-style"
      labelClass="block mb-2 text-sm font-medium text-gray-300"
    />
  );
};
