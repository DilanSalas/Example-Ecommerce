import { Route, Routes } from "react-router"
import { HomePage } from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"
import { CategoryPage } from "../pages/CategoryPage"
import { OffersPage } from "../pages/OffersPage"

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/categorys" element={<CategoryPage />} />
      <Route path="/offers" element={<OffersPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}
