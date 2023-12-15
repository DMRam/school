import { Navigate } from "react-router-dom";
import { useData } from "../../../../hooks/useData";
import { RootState } from "../../../../store";
import { useAppSelector } from "../../../../store/hooks";
import { DashboardComp } from "../../dashboard/DashboardComp";


export const ProtectedRoute: React.FC = () => {
    // Check if user is authenticated. Replace this with your actual authentication logic.
    const isLoggedIn = useAppSelector((state: RootState) => state.ui.isVisible);

    return isLoggedIn ? <DashboardComp /> : <Navigate to="/login" />;
};