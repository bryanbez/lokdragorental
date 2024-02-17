import Image from "next/image";

export const LoadingComponent = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50 backdrop-blur-lg z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg flex items-center space-x-4">
        <Image
          src="/loadingicon.jpg"
          alt="Example Image"
          width={25}
          height={25}
          className="animate-spin"
        />
        <p className="text-gray-800 text-lg font-semibold">Loading...</p>
      </div>
    </div>
  );
};
