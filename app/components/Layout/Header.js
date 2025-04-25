"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/icons/logo.png";
import phoneIcon from "../../../public/icons/phone.png";
import mailIcon from "../../../public/icons/mail.png";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import HamburgerSidebar from "./HamburgerSidebar";

export default function Header() {
  const handleNavigation = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav
        className="sticky-top"
        style={{
          backgroundColor: "#8A1538",
          height: "75px",
          color: "white",
          top: "0",
        }}>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between py-3 px-3 px-lg-5">
            <div className="col-4">
              <div className="navbar-brand d-flex align-items-center gap-2 link-tag">
                <Link href={"/"}>
                  <Image src={logo} width={36} height={36} alt="Logo" />
                </Link>
                <span
                  className="font-Bricolage"
                  style={{ fontSize: "28px", fontWeight: "bold" }}>
                  Educare
                </span>
              </div>
            </div>
            <div className="col-5 d-none d-lg-block font-sans">
              <div
                className="d-flex align-items-center justify-content-center gap-4"
                style={{ fontSize: "18px" }}>
                <span
                  className="font-sans link-tag"
                  onClick={() => handleNavigation("#about")}>
                  About us
                </span>
                <div className="dropdown link-tag">
                  <span
                    className="dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Courses
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="dropdown-item">For School Students</div>
                    </li>
                    <li>
                      <hr className="dropdown-divider mx-3" />
                    </li>
                    <li>
                      <div className="dropdown-item">For Kids</div>
                    </li>
                    <li>
                      <hr className="dropdown-divider mx-3" />
                    </li>
                    <li>
                      <div className="dropdown-item">other</div>
                    </li>
                  </ul>
                </div>
                <span className="link-tag">Careers</span>
                <span
                  className="link-tag"
                  onClick={() => handleNavigation("#blog")}>
                  News & Blog
                </span>
                <span className="link-tag">Payments</span>
              </div>
            </div>
            <div className="col-3 d-none d-lg-flex align-items-center justify-content-end gap-4">
              <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <Image
                      src={phoneIcon}
                      alt="phone icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>+974 55555 3456</span>
                </div>
                <div className="d-flex gap-2 align-items-center">
                  <div>
                    <Image
                      src={mailIcon}
                      alt="phone icon"
                      width={16}
                      height={16}
                    />
                  </div>
                  <span>info@educare.qa</span>
                </div>
              </div>
              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "white", color: "#8A1538" }}>
                Contact Us
              </button>
            </div>
            <button
              style={{ backgroundColor: "#8A1538", color: "white" }}
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#hamburgerCollapse"
              aria-controls="hamburgerCollapse"
              className="col-2 col-md-1 d-block d-lg-none link-tag btn">
              <IoMenu size={28} />
            </button>
            <div className="d-block d-lg-none" style={{ maxHeight: "100%" }}>
              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="hamburgerCollapse"
                aria-labelledby="hamburgerCollapseLabel">
                <div className="offcanvas-header">
                  <div
                    id="hamburgerCollapseLabel"
                    className="offcanvas-title d-flex align-items-center gap-2 link-tag">
                    <span
                      className="font-Bricolage icon-color"
                      style={{ fontSize: "28px", fontWeight: "bold" }}>
                      Educare
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                  <HamburgerSidebar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
