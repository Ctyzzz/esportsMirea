import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout";
import { routes } from "./const";

function Router() {
  return (
    <Routes>
      {routes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={<Layout />}>
            {/* @ts-ignore */}
            <Route index element={<route.component />} />
          </Route>
        );
      })}
    </Routes>
  );
}

export default Router;
