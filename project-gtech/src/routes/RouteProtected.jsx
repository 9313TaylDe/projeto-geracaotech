import { Navigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
const RouteProtected = ({ element }) => {
  const { authentication } = useAuth();

  if (authentication) {
    return element;
  } else {
    return <Navigate to="/not-found" />;
  }
};

export default RouteProtected;
