
import useSuspender from "../utils/suspend-data";
const dummyDataSpots = [
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""],
    ["0", ""]
  ];

const ParkingInfo = ({parkingData, loading}) => {
  const [suspendedParkingData] = useSuspender(parkingData, loading)
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <div className=" grid grid-cols-10 gap-x-2 gap-y-40 p-4">
          {suspendedParkingData && [...suspendedParkingData, ...dummyDataSpots].map((parkSpot, index) => (
            <div key={index} className="border border-4 border-x-white border-t-white rounded-lg">
              <div
              className="w-20 h-32 flex justify-center items-center bg-green-200"
            >
              {parkSpot[0] === "1"  && (
                <div className="h-32 w-20 bg-car bg-cover bg-center bg-no-repeat "></div>
              )}
              </div>
              <p className="flex justify-end text-gray-400">S{index}</p>

            </div>

          ))}
        </div>
      </div>
    </div>
  );
};

export default ParkingInfo;
