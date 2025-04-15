import {
  Home,
  User,
  BarChart2,
  Users,
  Bell,
  Settings,
  Briefcase,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <div className="mb-10 text-center">
        <h1 className="text-2xl font-bold text-blue-600">HR Dashboard</h1>
      </div>

      <nav className="space-y-2">
        <SidebarItem icon={<Home size={20} />} label="Dashboard" to="/" />
        <SidebarItem icon={<User size={20} />} label="Staff Management" to="/staff" />
        <SidebarItem icon={<BarChart2 size={20} />} label="Payroll & Attendance" to="/payroll-attendance" />
        <SidebarItem icon={<Briefcase size={20} />} label="Department & Job Titles" to="/department-job-titles" />
        <SidebarItem icon={<Bell size={20} />} label="Notification" to="/notifications" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" to="/settings" />
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, label, to }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 cursor-pointer
        ${isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"}`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
