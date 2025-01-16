import { Route, Routes } from "react-router";
import { HomeRoutes } from "../ecommerce/routes/HomeRoutes";
export const AppRouter = () => {
  return (
    <>

    <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/*" element={<HomeRoutes />} />

    </Routes>
      
      
    </>
  )
}