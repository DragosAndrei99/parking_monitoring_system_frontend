const Overview = ({totalParkedFromLogs, currentlyParkedCars}) => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">{totalParkedFromLogs}</h3>
        <p className="text-gray-500">Total Parked Cars</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">{currentlyParkedCars}</h3>
        <p className="text-gray-500">Currently parked cars</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">{totalParkedFromLogs - currentlyParkedCars}</h3>
        <p className="text-gray-500">Checked-out cars</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">{totalParkedFromLogs * 3}$</h3>
        <p className="text-gray-500">Revenue</p>
      </div>
    </div>
  );
};

export default Overview;
