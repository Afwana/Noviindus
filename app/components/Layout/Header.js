"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import logo from "../../../public/icons/logo.png";
import phoneIcon from "../../../public/icons/phone.png";
import mailIcon from "../../../public/icons/mail.png";

export default function Header() {
  return (
    <>
      <header
        className="sticky-top"
        style={{
          backgroundColor: "#8A1538",
          height: "75px",
          color: "white",
        }}>
        <div className="container-fluid">
          <div className="row align-items-center justify-content-between py-3 px-5">
            <div className="col-4">
              <div className="d-flex align-items-center gap-2">
                <div>
                  <Image src={logo} width={36} height={36} alt="Logo" />
                </div>
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
                <span className="font-sans">About us</span>
                <div className="dropdown">
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
                <span className="">Careers</span>
                <span className="">News & Blog</span>
                <span className="">Payments</span>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-end gap-4">
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
          </div>
        </div>
      </header>
    </>
  );
}
