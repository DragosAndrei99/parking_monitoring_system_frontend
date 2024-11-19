import useSuspender from "../utils/suspend-data";

const ParkingInfo = ({parkingData, loading}) => {
  const [suspendedParkingData] = useSuspender(parkingData, loading)
  
  return (
    <div className="bg-white p-4 rounded shadow mb-6">

      <div className="flex justify-between items-center w-full max-w-xl mx-auto my-10">

    {suspendedParkingData && suspendedParkingData.map((parkSpot, index) => (
      <div 
      key={index} 
      className={`w-40 h-52 border-4 border-dashed border-gray-500 bg-gray-200 flex items-center justify-center ${parkSpot[0] === "0" ? 'bg-green-200': 'bg-red-200'}`}>

        <span className="text-gray-500 font-bold">Spot #{index+1}</span>
      </div>

    ))}
    </div>
  </div>

  );
};

export default ParkingInfo;
