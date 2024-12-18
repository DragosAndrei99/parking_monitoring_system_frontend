import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen p-4">
      <h2 className="text-2xl font-bold mb-6">Parkware</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <NavLink to="/" className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 rounded bg-green-700"
                    : "flex items-center px-4 py-2 rounded"
                }
              >
              Parking
            </NavLink>
          </li>
          <li className="mb-4">
          <NavLink to="/logs" className={({ isActive }) =>
                  isActive
                    ? "flex items-center px-4 py-2 rounded bg-green-700"
                    : "flex items-center px-4 py-2 rounded"
                }
              >              Logs
            </NavLink>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2">Fines</a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center px-4 py-2">Complaints</a>
          </li>
          {/* Add more links as needed */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
