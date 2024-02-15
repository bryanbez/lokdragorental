import { DragoInfoCard } from "./dragobasicinfo";
import { Sidebar } from "../sidebar";
import { fetchAllDragos } from "@/app/lib/apiRoute";

export const DisplayCard = async () => {
  const alldragos = await fetchAllDragos();

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="flex-shrink-0 w-1/5 hidden md:block bg-gray-800 p-4">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-auto px-6 py-4">
        <div className="flex flex-wrap -mx-4 gap-4">
          {alldragos.length > 0 ? (
            alldragos.map((drago) => {
              return (
                <DragoInfoCard
                  key={drago.id}
                  id={drago.id}
                  level={drago.level}
                  xp={drago.xp}
                  fusion={drago.fusion}
                  breed={drago.breed}
                  rent={drago.rent}
                  dragoImageURL={drago.dragoImageURL}
                  legendaryCount={drago.filter.parts.legendary}
                />
              );
            })
          ) : (
            <p> No data available</p>
          )}
        </div>
      </div>
    </div>
  );
};
