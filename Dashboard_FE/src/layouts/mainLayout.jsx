import { Outlet } from "react-router-dom";
import Header from "../components/common/header";
import Sidebar from "../components/common/sideBar";

const MainLayout = () => {
  return (
    <div className="flex bg-gray-100 min-h-screen w-full">
      {/* Sidebar - cố định */}
      <div className="w-[295px] h-screen bg-white shadow-xl rounded-tr-2xl rounded-br-2xl p-6 fixed top-0 left-0 z-10">
        <Sidebar />
      </div>

      {/* Wrapper cho phần còn lại */}
      <div className="ml-[295px] w-full">
        {/* Header cố định */}
        <div className="fixed top-0 left-[295px] right-0 z-10">
          <Header />
        </div>

        {/* Main content dưới header */}
        <main className="pt-24 px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
