import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Overview from "./overview";

const DashboardLayout = ({totalParkedFromLogs, currentlyParkedCars }) => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <Overview totalParkedFromLogs={totalParkedFromLogs} currentlyParkedCars={currentlyParkedCars}/>
          <Outlet/>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
