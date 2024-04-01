import React, { useState, useEffect } from 'react'
import { useDragoData } from "@/app/lib/context/dataContext";

export default function SelectOptionComponent() {
    const [legCount, setLegCount] = useState('all'); // default is all
    const { dispatch } = useDragoData();

    const handleLegCount = (event) => {
        setLegCount(event.target.value);
        
    };

    useEffect(() => {
      dispatch({ type: "SET_LEG_COUNT_QUERY", payload: legCount });
    }, [legCount]);
  return (
    <>
    <label className='text-white font-semibold'> Filter by Legendary Part Count</label>
    <select className='w-full p-2 mt-2 rounded bg-gray-400' value={legCount} onChange={handleLegCount}>
        <option value="all">All</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
    </>
  )
}
