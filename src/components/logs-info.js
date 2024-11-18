import ParkLog from "./park-log";

const LogsInfo = ({ parkingData, loading }) => {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      {!loading && parkingData && <ParkLog parkingSpotLog={parkingData[0]} parkNo={"1"}/>}
      {!loading && parkingData && <ParkLog parkingSpotLog={parkingData[1]} parkNo={"2"}/>}
      {!loading && parkingData && <ParkLog parkingSpotLog={parkingData[2]} parkNo={"3"}/>}

      {/* <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Parking Spot#2 Logs Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Parking State
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Start Date
                </th>
              </tr>
            </thead>
            <tbody>
              {parkingData && parkingData[1]?.length > 0 ? (
                <tr key={"park2"}>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {parkingData[1][0]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {parkingData[1][1]}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-500"
                  >
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">Parking Spot#3 Logs Status</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Parking State
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Start Date
                </th>
              </tr>
            </thead>
            <tbody>
              {parkingData && parkingData[2]?.length > 0 ? (
                <tr key={"park3"}>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {parkingData[2][0]}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {parkingData[2][1]}
                  </td>
                </tr>
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="border border-gray-300 px-4 py-2 text-center text-sm text-gray-500"
                  >
                    No Data Available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
};

export default LogsInfo;
