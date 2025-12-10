import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-[#FDF0D5]">
      <Outlet />
    </div>
  );
};

export default RootLayout;
