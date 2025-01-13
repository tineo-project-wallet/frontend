import { Route, Routes } from "react-router-dom";

import { basicRouteList, adminRouteList } from "./routes/routeList.js";
import LoggedLayout from "./components/layout/logged/LoggedLayout.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path={basicRouteList.login} element={<h1>Login</h1>} />
        <Route path={basicRouteList.register} element={<h1>Register</h1>} />

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
