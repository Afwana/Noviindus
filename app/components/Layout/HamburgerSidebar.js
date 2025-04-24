import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { toast } from "sonner";
import LoginModal from "@/app/authModals/LoginModal";
import RegisterModal from "@/app/authModals/RegisterModal";
import ConfirmModal from "@/app/authModals/ConfirmModal";

// Replace Lucide icons with React Icons
// import {
//   FaBell,
//   FaSignInAlt,
//   FaUser,
//   FaTimes,
//   FaRedo,
//   FaPowerOff,
// } from "react-icons/fa";
// import { PiUserList } from "react-icons/pi";
// import { IoCloseCircleOutline } from "react-icons/io5";

const NAVIGATIONS = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "How it work", link: "/#how-it-work" },
  { label: "Become a host", link: "#become-host" },
  { label: "Help", link: "/help" },
];

export default function HamburgerSidebar({ onClose }) {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const openLogoutModal = () => setIsLogoutModalOpen(true);
  const closeLogoutModal = () => setIsLogoutModalOpen(false);

  const handleLogoutConfirm = () => {
    logout();
    toast.success("Logged out successfully");
    closeLogoutModal();
  };

  const handleConfirm = () => {
    console.log("Action confirmed!");
    setIsConfirmModalOpen(false);
  };

  const handleCancel = () => {
    console.log("Action canceled!");
    setIsConfirmModalOpen(false);
  };

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };
  console.log(openConfirmModal);

  const handleNavigation = (link) => {
    if (link.startsWith("#")) {
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
  };

  const getTextColor = (link) => {
    if (pathname === "/") {
      return link === "/" ? "text-success" : "text-dark";
    } else {
      if (link.startsWith("#")) {
        return pathname === "/" ? "text-dark" : "text-success";
      }

      return pathname === link ? "text-success" : "text-dark";
    }
  };

  const getAuthButtonColor = () => {
    if (!pathname) return "text-dark";
    return pathname === "/" ? "text-success" : "text-dark";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex justify-content-end d-lg-none">
        {/* <FaTimes onClick={() => onClose()} size={24} /> */}
      </div>

      <nav className="d-flex flex-column mb-4">
        {NAVIGATIONS.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            onClick={() =>
              item.link === "#become-host"
                ? openLoginModal()
                : handleNavigation(item.link)
            }
            className={`fs-6 fw-medium mb-4 text-decoration-none ${getTextColor(
              item.link
            )}`}>
            {item.label}
          </Link>
        ))}
      </nav>

      {user ? (
        <div className="position-relative d-flex align-items-center">
          <div className="d-flex align-items-center gap-2">
            {/* <FaBell className="text-success" size={20} /> */}
            <div
              className="vr bg-success opacity-50"
              style={{ height: "16px" }}></div>
            <span className="fs-6 fw-medium text-success">Chef Ramzi</span>
            <Image
              src="/images/user.png"
              alt="User Profile"
              className="rounded-circle border border-secondary object-fit-cover"
              width={28}
              height={28}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={{ cursor: "pointer" }}
            />
          </div>

          {dropdownOpen && (
            <div
              className="position-absolute end-0 mt-5 pt-5"
              style={{ width: "16rem", zIndex: 50 }}
              ref={dropdownRef}>
              <div className="d-flex justify-content-end pe-3">
                <div
                  className="bg-white bg-opacity-75 shadow-sm"
                  style={{
                    width: "12px",
                    height: "12px",
                    transform: "rotate(45deg) translateY(8px)",
                    borderRadius: "2px",
                  }}></div>
              </div>

              <div className="bg-white bg-opacity-75 shadow rounded p-3 small text-dark">
                <button
                  className="d-flex align-items-center gap-2 w-100 text-start py-2 px-3 rounded border-0 bg-transparent"
                  onClick={() => router.push("/profile")}>
                  {/* <PiUserList size={20} /> */}
                  My Profile
                </button>

                <button
                  className="d-flex align-items-center gap-2 w-100 text-start py-2 px-3 rounded border-0 bg-transparent"
                  onClick={() => console.log("Switch to guest mode")}>
                  {/* <FaRedo size={18} /> */}
                  Switch to Guest Mode
                </button>

                <button
                  className="d-flex align-items-center gap-2 w-100 text-start py-2 px-3 rounded border-0 bg-transparent"
                  onClick={openLogoutModal}>
                  {/* <FaPowerOff size={18} /> */}
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="d-flex gap-3 align-items-start">
          <div
            onClick={openRegisterModal}
            className="d-flex align-items-center fs-6 fw-medium cursor-pointer">
            {/* <FaSignInAlt className="me-1 text-success" /> */}
            <span className={getAuthButtonColor()}>Register</span>
          </div>
          <div
            onClick={openLoginModal}
            className="d-flex align-items-center fs-6 fw-medium cursor-pointer">
            {/* <FaUser className="me-1 text-success" /> */}
            <span className={getAuthButtonColor()}>Login</span>
          </div>
        </div>
      )}

      <LoginModal isOpen={isLoginModalOpen} closeModal={closeLoginModal} />
      <RegisterModal
        isOpen={isRegisterModalOpen}
        closeModal={closeRegisterModal}
      />
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        message="Are you sure you want to proceed with this action?"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        closeModal={() => setIsConfirmModalOpen(false)}
      />

      {isLogoutModalOpen && (
        <div
          className="fixed-top vw-100 vh-100 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 999 }}>
          <div
            className="position-relative bg-white rounded p-4 shadow-lg"
            style={{ maxWidth: "400px" }}>
            <button
              onClick={closeLogoutModal}
              className="position-absolute top-0 end-0 border-0 bg-transparent mt-2 me-2">
              {/* <IoCloseCircleOutline size={30} color="#597789" /> */}
            </button>
            <h2
              className="fs-5 fw-medium text-center mb-4"
              style={{ color: "#1D1D1D" }}>
              Do you really want to log out?
            </h2>
            <div className="d-flex justify-content-center gap-3">
              <button
                onClick={handleLogoutConfirm}
                className="btn px-4 rounded-pill text-white border"
                style={{ backgroundColor: "#368B6C", borderColor: "#7C7C7C" }}>
                Yes
              </button>
              <button
                onClick={closeLogoutModal}
                className="btn px-4 rounded-pill border"
                style={{
                  backgroundColor: "#D7E8E2",
                  color: "#213541",
                  borderColor: "#A0BBCB",
                }}>
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
