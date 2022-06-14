import { Navigate, Outlet } from "react-router-dom"
import { useAuthStatus } from "../hooks/useAuthStatus"
import Spinner from "./Spinner"

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }

  // Outlet allows use of child routes - renders the child route
  // So if logged in then go to the Profile route / page as this
  // is the 'Outlet' route
  // Otherwise re-direct to the sign in page

  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />
}
export default PrivateRoute
