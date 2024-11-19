import DashboardLayout from "./components/dashboard-layout";
import ParkingInfo from "./components/parking-info";
import LogsInfo from "./components/logs-info";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const MAX_PARK_SPOT_LOGS = 10;

const parkSpotUpdater = (prevParkSpotData, currParkSpotData) => {
  if(!prevParkSpotData.find((element) => Object.keys(element).toString() === currParkSpotData[1].toString())) {
    if(prevParkSpotData.length >= MAX_PARK_SPOT_LOGS) {
      prevParkSpotData.shift();
    }
    return [...prevParkSpotData, {[`${currParkSpotData[1]}`]: currParkSpotData[0]}]
  }
  return [...prevParkSpotData];
}

const App = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  
  const [parkSpot1, setParkSpot1] = useState([]);
  const [parkSpot2, setParkSpot2] = useState([]);
  const [parkSpot3, setParkSpot3] = useState([]);

  useEffect(() => {
    const controller = new AbortController(); 
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch('http://192.168.101.131:80/park', { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const formattedData = await response.json(); 
        
        setData(formattedData);
        setParkSpot1(p => parkSpotUpdater(p, formattedData.parkingSpotsState[0]));
        setParkSpot2(p => parkSpotUpdater(p, formattedData.parkingSpotsState[1]));
        setParkSpot3(p => parkSpotUpdater(p, formattedData.parkingSpotsState[2]));

      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(error.message);
        }      } finally {
        setLoading(false); 
      }
    };

    fetchData();
    const interval = setInterval(() => fetchData(), 10000)
    return () => {
      clearInterval(interval);
      controller.abort();

    }

  }, [setData, setParkSpot1, setParkSpot2, setParkSpot3]);

  if (error) return <div>Error: {error}</div>;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout 
          totalParkedFromLogs={[parkSpot1, parkSpot2, parkSpot3].map(spot => spot.filter(entry => Object.values(entry).toString() !== "0")).flat().length}
          currentlyParkedCars={data?.parkingSpotsState?.filter(spot => spot[0].toString() === '1').length || '0'}
          />} >
          <Route path="/" element={<ParkingInfo parkingData={data.parkingSpotsState} loading={loading}/>} />
          <Route path="/logs" element={<LogsInfo parkingData={[parkSpot1, parkSpot2, parkSpot3]} loading={loading}/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
