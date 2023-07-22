import React from "react";
import { Outlet } from "react-router-dom";
import LoginModal from "../components/modals/LoginModal";
import RegisterModal from "../components/modals/RegisterModal";
import Navbar from "../components/navbar/Navbar";

interface MainLayoutProps {
  children?: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <LoginModal />
      <RegisterModal />
      <Navbar />
      <main>{children ? children : <Outlet />}</main>
    </div>
  );
};

export default MainLayout;
