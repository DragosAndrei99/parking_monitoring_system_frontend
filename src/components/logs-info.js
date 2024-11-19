import ParkLog from "./park-log";
import useSuspender from "../utils/suspend-data";

const LogsInfo = ({ parkingData, loading }) => {
  const [suspendedParkingData] = useSuspender(parkingData, loading)

  return (
    <div className="flex justify-between bg-gray-200 p-6 rounded-lg shadow-lg">
      {suspendedParkingData && suspendedParkingData.map((table, index) =>
        <ParkLog key={index} parkingSpotLog={table} parkNo={`${index}`}/>
      )}

    </div>
  );
};

export default LogsInfo;
