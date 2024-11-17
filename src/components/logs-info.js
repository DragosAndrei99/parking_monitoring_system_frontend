import { useState, useEffect } from "react";

const LogsInfo = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  if(!loading && !error) console.log(data.parkingSpotsState);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch('http://192.168.101.131:80/park');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const formattedData = await response.json(); 
        
        setData(formattedData);
        
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
    const interval = setInterval(() => fetchData(), 10000)
    return () => {
      clearInterval(interval);
    }

  }, [setData]);
  
  // if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
 <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Parking Logs Status</h2>
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
            {data?.parkingSpotsState?.length > 0 ? (
              data.parkingSpotsState.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {index}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-sm text-gray-700">
                    {row[0]}
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

export default LogsInfo;
