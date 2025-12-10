import { Outlet } from "react-router-dom";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";
import ProtectedRoute from "../components/ProtectedRoute";

const DashboardLayout = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#FDF0D5]">
        <DashboardNavbar />
        <main className="pt-16">
          <Outlet />
        </main>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardLayout;
