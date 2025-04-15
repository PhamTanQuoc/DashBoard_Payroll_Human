import { Routes, Route } from "react-router-dom";
import AuthLayout from "../layouts/authLayout";
import Login from "../components/auth/login";
import TwoFactorAuth from "../components/auth/TwoFactor";
import MainLayout from "../layouts/mainLayout";

const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<MainLayout />} >
                <Route index element={<h1>Dashboard</h1>} />
                <Route path="/staff" element={<h1>Staff Management</h1>} >
                    <Route path="edit-staff" element={<h1>Edit Staff</h1>} />
                    <Route path="add-staff" element={<h1>Add Staff</h1>} />
                </Route>
                <Route path="/payroll-attendance" element={<h1>Payroll & Attendance</h1>} />
                <Route path="/department-job-titles" element={<h1>Department & Job Titles</h1>} />
                <Route path="/notifications" element={<h1>Notifications</h1>} />
                <Route path="/settings" element={<h1>Settings</h1>} />
                <Route path="/2fa" element={<TwoFactorAuth />} />
            </Route>
            <Route path="/auth" element={<AuthLayout />} >
                <Route path="login" element={<Login />} />
                <Route path="register" element={<h1>Register</h1>} />
                <Route path="forgot-password" element={<h1>Forgot Password</h1>} />
                <Route path="reset-password" element={<h1>Reset Password</h1>} />
            </Route>
        </Routes>
    )
}
export default AppRouter;