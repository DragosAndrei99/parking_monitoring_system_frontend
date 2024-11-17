import DashboardLayout from "./components/dashboard-layout";
import ParkingInfo from "./components/parking-info";
import LogsInfo from "./components/logs-info";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />} >
          <Route path="/" element={<ParkingInfo />} />
          <Route path="/logs" element={<LogsInfo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
