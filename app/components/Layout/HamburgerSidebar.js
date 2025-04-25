"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/icons/logo.png";
import phoneIcon from "../../../public/icons/phone.png";
import mailIcon from "../../../public/icons/mail.png";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function HamburgerSidebar() {
  const handleNavigation = (link) => {
    const element = document.querySelector(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="d-flex flex-column gap-4 icon-color">
      <div
        className="d-flex flex-column justify-content-center gap-4"
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
        <span className="link-tag" onClick={() => handleNavigation("#blog")}>
          News & Blog
        </span>
        <span className="link-tag">Payments</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex flex-column" style={{ fontSize: "14px" }}>
          <div className="d-flex gap-1 align-items-center">
            <div>
              <Image src={phoneIcon} alt="phone icon" width={16} height={16} />
            </div>
            <span>+974 55555 3456</span>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <div>
              <Image src={mailIcon} alt="phone icon" width={16} height={16} />
            </div>
            <span>info@educare.qa</span>
          </div>
        </div>
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: "#8A1538", color: "white" }}>
          Contact Us
        </button>
      </div>
    </div>
  );
}
