import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home.tsx";
import Contactus from "./pages/Contactus.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import StoryPage from "./pages/StoryPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import Signin from "./pages/SignIn.tsx";
import Signup from "./pages/SignUp.tsx";
import SingleBlog from "./pages/SingleBlog.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Terms from "./pages/Terms.tsx";
import CustomerSafety from "./pages/CustomerSafety.tsx";
import Pricing from "./pages/Pricing.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customersafety" element={<CustomerSafety />} />
          <Route path="/search/:id" element={<ProfilePage />} />
          {/* <Route path="/customers" element={<Customers />} />
          <Route path="/items" element={<Items />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/sales" element={<Sales />} /> */}
          {/* <Route path="/expenses" element={<Expenses />} /> */}
          {/* <Route path="/account" element={<Account />} /> */}
        </Route>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
