import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Overview from "./overview";
import RevenueAnalytics from "./revenue-analytics";

const DashboardLayout = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-6">
          <Overview/>
          <Outlet/>
          <RevenueAnalytics/>
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
