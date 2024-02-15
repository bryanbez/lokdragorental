import Image from "next/image";

export const DragoInfoCard = ({
  id,
  level,
  xp,
  fusion,
  breed,
  rent,
  dragoImageURL,
  legendaryCount,
}) => {
  let borderColorPerLegendaryPart =
    legendaryCount >= 2
      ? "card-border-two-or-more-leg"
      : legendaryCount === 1
      ? "card-border-one-leg"
      : "card-border-no-leg";

  return (
    <div className={`card-class card-bg-color  ${borderColorPerLegendaryPart}`}>
      <span className="absolute top-0 left-0 rounded-lg px-2 py-1 text-sm bg-green-400 font-medium">
        {rent.status == 0 ? "Not Rented" : "Rented"}
      </span>
      <div className="w-48 flex-shrink-0">
        <Image
          src={dragoImageURL}
          alt="Image description"
          width={500}
          height={300}
        />
      </div>
      <div className="p-4 flex-grow font-medium">
        <h2 className="text-2xl font-bold mb-2">Drago #{id}</h2>
        <p className="mb-2">Drago Level: {level} </p>
        <p className="mb-2">Breed Count: {breed} </p>
        <p className="mb-2">Fusion lvl: {fusion}</p>
        <p className="mb-2">Legendary Count: {legendaryCount}</p>
        {/* <p className="mb-2">
          Status: {rent.status == 0 ? "Not Rented" : "Rented"}
        </p> */}
        {/* <div className="flex items-center mt-4">
          <button className="inline-block px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-500 dark:text-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            btn
          </button>
          <button className="ml-4 inline-block px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-500 dark:text-red-400 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
            btn
          </button>
        </div> */}
      </div>
    </div>
  );
};
