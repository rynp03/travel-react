import React from "react";
import SelectCard from "./SelectCard";
import assetData from "../assetData";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {assetData.map((card) => (
        <SelectCard key={card.id} name={card.name} path={card.path} />
      ))}
    </div>
  );
};

export default Selects;
