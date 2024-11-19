import formatData from "../utils/data-formatter";


const ParkLog = ({parkingSpotLog, parkNo}) => {

  return(
    <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Parking Spot#{parkNo}</h2>
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
          {parkingSpotLog && parkingSpotLog?.length > 0 ? (
            parkingSpotLog?.map((row, index) => (
              <tr key={Object.keys(row).toString()}>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                  {Object.values(row).toString() === '0' ? "Free" : "Busy"}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                  {formatData(Object.keys(row).toString())}
                </td>
              </tr>
            ))
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
  )
}

export default ParkLog;