import { Routes, Route } from "react-router-dom";
import { PATHS } from "./config/paths";
import { lazy } from "react";

// Importation pareusseuse des pages
const LandingPage = lazy(() => import("./pages/LandingPage.jsx"));

function App() {
  return (
    <Routes>
      {/* Routes Publiques */}
      {/* <Route path={PATHS.LOGIN} element={<LoginPage />} />
      <Route path={PATHS.REGISTER} element={<LoginPage />} /> */}
      <Route path={PATHS.HOME} element={<LandingPage />} />

      {/* Routes protégées
      <Route element={<ProtectedRoute />}>
        <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />
        <Route path={PATHS.PROFILE} element={<ProfilePage />} />
        <Route
          path={PATHS.ORDER_DETAILS}
          element={<div>Détails de la Commande</div>}
        />
      </Route> */}

      {/* Route 404 */}
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default App;
