import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NoPage from "./components/NoPage/NoPage";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import "./App.css";
import LogIn from "./components/Login/LogIn";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import SignUp from "./components/SignUp/SignUp";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/feed-back" element={<Feedback />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
