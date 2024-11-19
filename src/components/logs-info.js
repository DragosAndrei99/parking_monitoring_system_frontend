import ParkLog from "./park-log";
import useSuspender from "../utils/suspend-data";

const LogsInfo = ({ parkingData, loading }) => {
  const [suspendedParkingData] = useSuspender(parkingData, loading)

  return (
    <div className="flex justify-between bg-white p-4 rounded shadow mb-6">
      {suspendedParkingData && suspendedParkingData.map((table, index) =>
        <ParkLog key={index} parkingSpotLog={table} parkNo={`${index+1}`}/>
      )}

    </div>
  );
};

export default LogsInfo;
