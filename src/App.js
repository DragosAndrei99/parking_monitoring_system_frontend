import DashboardLayout from "./components/dashboard-layout";
import ParkingInfo from "./components/parking-info";
import LogsInfo from "./components/logs-info";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  const [parkSpot1, setParkSpot1] = useState([]);
  const [parkSpot2, setParkSpot2] = useState([]);
  const [parkSpot3, setParkSpot3] = useState([]);


  if(!loading && !error) console.log(parkSpot1);
  
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
        setParkSpot1((p) => {
          if(!p.find((element) => Object.keys(element).toString() === formattedData.parkingSpotsState[0][1].toString())) {

            return [...p, {[`${formattedData.parkingSpotsState[0][1]}`]: formattedData.parkingSpotsState[0][0]}]
          }
          return [...p];

        });
        setParkSpot2((p) => [...p, {[`${formattedData.parkingSpotsState[1][1]}`]: formattedData.parkingSpotsState[1][0]}]);
        setParkSpot3((p) => [...p, {[`${formattedData.parkingSpotsState[2][1]}`]: formattedData.parkingSpotsState[2][0]}]);

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

  }, [setData, setParkSpot1]);

  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route path="/" element={<ParkingInfo parkingData={data.parkingSpotsState}/>} />
          <Route path="/logs" element={<LogsInfo parkingData={[parkSpot1, parkSpot2, parkSpot3]} loading={loading}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
