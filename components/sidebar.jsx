"use client";

import { RadioButtonComponent } from "./form/radiobutton";
import { RangeFieldComponent } from "./form/range";
import SelectOptionComponent from "./form/selectOption";
import { TextBoxComponent } from "./form/textbox";


export const Sidebar = () => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
        <button className="text-gray-300 hover:text-white focus:outline-none">
          X
        </button>
      </div>

      <div className="mb-4">
        <TextBoxComponent />
      </div>

      <div className="mb-4">
        <SelectOptionComponent />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-medium text-gray-300">
          Sort By Rent Status
        </h2>
        <div className="mt-2">
          <RadioButtonComponent />
        </div>
      </div>
    </>
  );
};
