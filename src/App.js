import DashboardLayout from "./components/dashboard-layout";
import Overview from "./components/overview";
import AreaInfo from "./components/area-info";
import RevenueAnalytics from "./components/revenue-analytics";

function App() {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Parking Areas - Area Details</h1>
      <Overview />
      <AreaInfo />
      <RevenueAnalytics />
    </DashboardLayout>
  );
}

export default App;
