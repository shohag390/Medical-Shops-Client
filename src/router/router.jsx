import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ProductsHome from "../pages/Products/ProductsHome";
import Carts from "../pages/Cart/Carts";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/Dashboard/DashboardHome/DashboardHome";
import UploadProduct from "../pages/Dashboard/UploadProduct/UploadProduct";
import MyProducts from "../pages/Dashboard/MyProducts/MyProducts";
import Order from "../pages/Dashboard/Order/Order";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import BannerUpload from "../pages/Dashboard/BannerUpload/BannerUpload";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import Seller from "../pages/Dashboard/Seller/Seller";
import PostCategoris from "../pages/Dashboard/PostCategoris/PostCategoris";
import AllCategoris from "../pages/Dashboard/AllCategoris/AllCategoris";
import BeASeller from "../pages/BeASeller/BeASeller";
import PendingSellers from "../pages/Dashboard/PendingSeler/PendingSeler";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            }, {
                path: "/login",
                Component: Login
            }, {
                path: "/register",
                Component: Register
            }, {
                path: "/products",
                Component: ProductsHome
            }, {
                path: "/cart",
                Component: Carts
            }, {
                path: "/beASeller",
                Component: BeASeller
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                Component: DashboardHome,
            }, {
                path: "uploadProduct",
                Component: UploadProduct
            }, {
                path: "myProduct",
                Component: MyProducts
            }, {
                path: "order",
                Component: Order
            }, {
                path: "paymentHistory",
                Component: PaymentHistory
            }, {
                path: "bannerUpload",
                Component: BannerUpload
            }, {
                path: "allUser",
                Component: AllUser
            }, {
                path: "Seller",
                Component: Seller
            }, {
                path: "postCategoris",
                Component: PostCategoris
            }, {
                path: "allCategoris",
                Component: AllCategoris
            }, {
                path: "pendingSeler",
                Component: PendingSellers
            }
        ]
    }
])