import React from "react";

import { DragoInfoCard } from "./dragoBasicInfo";

export default function DisplaySingleCard(dragos) {
  const drago = dragos.dragos;

  return (
    <div className="flex flex-wrap -mx-4 gap-4">
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
    </div>
  );
}