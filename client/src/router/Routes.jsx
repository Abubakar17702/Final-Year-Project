import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Menu from "../pages/shop/Menu";
import Register from "../components/Register";
// import Order from "../pages/dashboard/UserDashboard";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import Login from "../components/Login";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import Users from "../pages/dashboard/admin/Users";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Payment from "../pages/shop/Payment";
import CartPage from "../pages/shop/CartPage";
import ManageBookings from "../pages/dashboard/admin/ManageBookings";
import ForgetPassword from "../components/ForgetPassword";
import ContactUs from "../components/ContactUs";
import Book from "../pages/shop/Book";
import FAQ from "../components/FAQ";
import EventBook from "../pages/shop/EventBook";
import OfferPage from "../pages/shop/OfferPage";
import AdminOfferForm from "../pages/shop/AddOffer";
import UserDashboard from "../pages/dashboard/UserDashboard";
import Order from "../pages/dashboard/Order";
import VirtualTour from "../components/VirtualTour";
import Cards from "../components/Cards";
import ReviewPage from "../components/ReviewPage";
import AboutUs from "../components/AboutUs";
import Blogs from "../components/Blogs";
import ExploringBestDestinations from "../components/ExploringBestDestinations";
import TravelingOnABudget from "../components/TravelingOnABudget";
import PlanningFamilyVacation from "../components/PlanningFamilyVacation";
import WhyChooseResortHeaven from "../components/WhyChooseResortHeaven";
import EventsPage from "../components/EventsPage";
import OurStoryAndServices from "../components/OurStoryAndServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
     
      {
        path: "/offers",
        element: (
          <PrivateRouter>
            <OfferPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <PrivateRouter>
            <ContactUs />
          </PrivateRouter>
        ),
      },
      {
        path: "/table-booking",
        element: (
          <PrivateRouter>
            <Book />
          </PrivateRouter>
        ),
      },
      {
        path: "/review",
        element: (
          <PrivateRouter>
            <ReviewPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/event-booking",
        element: (
          <PrivateRouter>
            <EventBook />
          </PrivateRouter>
        ),
      },
      {
        path: "/user-dashboard",
        element: (
          <PrivateRouter>
            <UserDashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "/order",
        element: (
          <PrivateRouter>
            <Order />
          </PrivateRouter>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivateRouter>
            <UpdateProfile />
          </PrivateRouter>
        ),
      },
      {
        path: "/cart-page",
        element: (
          <PrivateRouter>
            <CartPage />
          </PrivateRouter>
        ),
      },
      {
        path: "/process_checkout",
        element: (
          <PrivateRouter>
            <Payment />
          </PrivateRouter>
        ),
      },
      {
        path: "/virtual-tour",
        element: <VirtualTour />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/traveling-on-a-budget",
        element: <TravelingOnABudget />,
      },
      {
        path: "/blogs/planning-family-vacation",
        element: <PlanningFamilyVacation />,
      },
      {
        path: "/blogs/exploring-best-destinations",
        element: <ExploringBestDestinations />,
      },
      {
        path: "/blogs/why-choose-resort-heaven",
        element: <WhyChooseResortHeaven />,
      },
      {
        path: "/events",
        element: <EventsPage />,
      },
      {
        path: "/our-story-and-services",
        element: <OurStoryAndServices />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`http://localhost:6001/menu/${params.id}`),
      },
      {
        path: "manage-bookings",
        element: <ManageBookings />,
      },
      {
        path: "create-offer",
        element: <AdminOfferForm />,
      },
    ],
  },
]);

export default router;
