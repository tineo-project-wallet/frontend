import { Route, Routes } from "react-router-dom";

import { basicRouteList, adminRouteList } from "./routes/routeList.js";
import LoggedLayout from "./layout/logged/LoggedLayout.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import AuthLayout from "./layout/auth/AuthLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path={basicRouteList.login} element={<Login />} />
          <Route path={basicRouteList.register} element={<Register />} />
        </Route>

        <Route element={<LoggedLayout />}>
          <Route path={basicRouteList.home} element={<h1>Home</h1>} />
          <Route path={basicRouteList.profile} element={<h1>Profile</h1>} />

          <Route path={adminRouteList.dashboard} element={<h1>Dashboard</h1>} />
          <Route path={adminRouteList.users} element={<h1>Users</h1>} />
        </Route>

        <Route path={basicRouteList.notFound} element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
