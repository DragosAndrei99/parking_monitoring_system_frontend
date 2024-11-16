
const Overview = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">16.8K</h3>
        <p className="text-gray-500">Total Rented</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">80</h3>
        <p className="text-gray-500">Permitted Car</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">20</h3>
        <p className="text-gray-500">Check-in</p>
      </div>
      <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-xl font-semibold">10</h3>
        <p className="text-gray-500">Check-out</p>
      </div>
    </div>
  );
};

export default Overview;
