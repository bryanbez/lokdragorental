"use client";
import { useEffect } from "react";
import { Sidebar } from "@/components/sidebar";
import { useDragoData } from "../lib/context/dataContext";
import {
  fetchAllDragos,
  fetchSingleDrago,
  filterDragoRentStatus,
  filterDragoLegCount
} from "../lib/apiRoute";

import dynamic from "next/dynamic";

const LazyDragoMultComponent = dynamic(
  () => import("../../components/card/displayMultipleCard"),
  {
    loading: () => <p> Lazy Loading </p>,
    ssr: false,
  }
);

const LazyDragoSingComponent = dynamic(
  () => import("../../components/card/displaySingleCard"),
  {
    loading: () => <p> Lazy Loading Single </p>,
    ssr: false,
  }
);

export default function DragoList() {
  const { state, dispatch } = useDragoData();
  const searchQ = state.searchQuery;
  const isRentedQuery = state.isRentedQuery;
  const legCountQuery = state.legCountQuery;

  useEffect(() => {
    const FetchDragoContent = async () => {
      if (searchQ !== null) {
        let fetchedData;
       
        if (searchQ === "") {
          fetchedData = await fetchAllDragos(isRentedQuery); // Fetch all dragos
        } else {
          fetchedData = await fetchSingleDrago(searchQ); // Fetch single drago
        }

        //Filter data based on rentStatus
        if (isRentedQuery !== "all") {
          fetchedData = await filterDragoRentStatus(isRentedQuery);
        }

        // Filter data based on leg count
      if (legCountQuery !== "all") {
        fetchedData = await filterDragoLegCount(legCountQuery);
      }
       

        dispatch({ type: "SET_DRAGO_DATAS", payload: fetchedData });
      }
    };
    FetchDragoContent();
  }, [searchQ, isRentedQuery, legCountQuery, dispatch]);

  let alldragos = state.dragoDatas;

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="flex-shrink-0 w-1/5 hidden md:block bg-gray-800 p-4">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto px-6 py-4">
        {alldragos !== null &&
          (Array.isArray(alldragos) ? (
            <LazyDragoMultComponent dragos={alldragos} />
          ) : typeof alldragos === "object" ? (
            <LazyDragoSingComponent dragos={alldragos} />
          ) : (
            <p>No Drago Result</p>
          ))}
       
      </div>
    </div>
  );
}
