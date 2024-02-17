import React, { useState } from "react";
import { FieldComponent } from "./fieldComponent";
import { useDragoData } from "@/app/lib/context/dataContext";

export const RangeFieldComponent = () => {
  const { state, dispatch } = useDragoData();
  const [rangeLvl, setRangeLvl] = useState(0);

  let dragoData = state.dragoDatas;

  return (
    <FieldComponent
      fieldId="rangeLvl"
      label="Fusion Level"
      value={rangeLvl}
      onChange={(e) => {
        setRangeLvl(e.target.value);
      }}
      fieldType="range"
      min="0"
      max="8"
      fieldClass="textbox-style"
      labelClass="block mb-2 text-sm font-medium text-gray-300"
      isDisabled={Array.isArray(dragoData) ? false : true}
    />
  );
};
