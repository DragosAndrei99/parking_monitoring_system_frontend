
const ParkingInfo = ({parkingData}) => {
  console.log(`data from parkingInfo${parkingData}`);
  
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
 <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Parking Live Status</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Parking Number
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Parking State
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium text-gray-700">
                Start Date
              </th>
            </tr>
          </thead>
          <tbody>
            {parkingData?.length > 0 ? (
              parkingData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {index}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {row[0] === '0' ? "Free" : "Busy"}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {row[1]}
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
    </div>
  );
};

export default ParkingInfo;
