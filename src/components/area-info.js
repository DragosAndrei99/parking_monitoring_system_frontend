import { useState, useEffect } from "react";

const AreaInfo = () => {

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch('http://192.168.101.131:80');
        
        console.log(response);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const formattedData = await response.text(); 
        console.log(formattedData);
        
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
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h2 className="text-lg font-semibold mb-2">{`${data}`}</h2>
      <img src="https://via.placeholder.com/400" alt="Parking Area" className="rounded mb-4" />
      <div className="grid grid-cols-2 gap-4">
        <div><strong>Area Name:</strong> 2 timer parkering</div>
        <div><strong>Customer:</strong> Patricia Winther</div>
        <div><strong>Address:</strong> Jernbanevej 31, 3400 Holbæk</div>
        <div><strong>Type:</strong> Normal</div>
        <div><strong>Parking Code:</strong> 100410</div>
      </div>
    </div>
  );
};

export default AreaInfo;
