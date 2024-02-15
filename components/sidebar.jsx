"use client";
import { useState } from "react";
import { FieldComponent } from "./form/fieldComponent";

export const Sidebar = () => {
  const [search, setSearch] = useState("");
  const [rangeLvl, setRangeLvl] = useState(0);
  const [isRented, setIsRented] = useState("all");

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Sidebar</h1>
        <button className="text-gray-300 hover:text-white focus:outline-none">
          X
        </button>
      </div>

      <div className="mb-4">
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
      </div>

      <div className="mb-4">
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
        />
      </div>
      <div className="mt-2">
        <h2 className="text-lg font-medium text-gray-300">
          Sort By Rent Status
        </h2>
        <div className="mt-2">
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
        </div>
      </div>
    </>
  );
};
