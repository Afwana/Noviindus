import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/icons/logo.png";
import Instagram from "../../../public/icons/instagram.svg";
import Facebook from "../../../public/icons/facebook.svg";
import Linkedin from "../../../public/icons/linkedin.svg";
import Youtube from "../../../public/icons/youtube.svg";
import Map from "../../../public/images/FooterMap.svg";

export default function Footer() {
  return (
    <div
      className="d-flex flex-column position-relative mt-5"
      style={{ zIndex: 50, color: "white" }}>
      <div className="row g-0 px-5 pt-5" style={{ backgroundColor: "#8A1538" }}>
        <div className="col-3">
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
        <div className="col-9 font-sans">
          <div className="d-flex align-items-start justify-content-between">
            <div className="d-flex flex-column gap-3">
              <span
                className=""
                style={{ fontSize: "24px", fontWeight: "600" }}>
                Navigations
              </span>
              <span
                className=""
                style={{ fontSize: "20px", fontWeight: "400" }}>
                Home
              </span>
              <span
                className=""
                style={{ fontSize: "20px", fontWeight: "400" }}>
                About
              </span>
              <span
                className=""
                style={{ fontSize: "20px", fontWeight: "400" }}>
                Curriculum
              </span>
              <span
                className=""
                style={{ fontSize: "20px", fontWeight: "400" }}>
                Career
              </span>
              <span
                className=""
                style={{ fontSize: "20px", fontWeight: "400" }}>
                Blogs
              </span>
              <span
                className=""
                style={{ fontSize: "20px", fontWeight: "400" }}>
                Contact Us
              </span>
            </div>

            <div className="d-flex flex-column gap-3 ms-3">
              <span
                className=""
                style={{ fontSize: "24px", fontWeight: "600" }}>
                Contact info
              </span>
              <Link
                className=""
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
                href="educare@gmail.com">
                educare@gmail.com
              </Link>
              <Link
                className=""
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
                href="">
                info@educare.com
              </Link>
              <Link
                className=""
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
                href="">
                +974 4412 3456
              </Link>
              <Link
                className=""
                style={{ fontSize: "20px", fontWeight: "400", color: "white" }}
                href="">
                +974 5534 7890
              </Link>

              <div className="d-flex gap-3 align-items-end justify-contain-center mt-3">
                <Image src={Instagram} alt="instagram" width={20} height={20} />
                <Image src={Facebook} alt="facebook" width={20} height={20} />
                <Image src={Linkedin} alt="linkedin" width={20} height={20} />
                <Image src={Youtube} alt="youtube" width={20} height={20} />
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start justify-content-end">
              <div className="relative w-[146px] h-[276px]">
                <Image src={Map} alt="footer map" />
              </div>

              <div className="d-flex flex-column gap-3 ms-3">
                <span
                  className=""
                  style={{ fontSize: "24px", fontWeight: "600" }}>
                  Office Address
                </span>
                <p
                  className=""
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "white",
                  }}>
                  EducareEducation Center <br /> Building 45, Al Sadd Street,
                  <br />
                  Doha, Qatar
                </p>
                <Link
                  className=""
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "white",
                  }}
                  href="https://www.google.co.in/maps">
                  View on Map
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "#8A1538" }} className="font-sans">
        <hr style={{ borderColor: "#DCC19659" }} />
        <div className="px-5 pt-2">
          <div className="d-flex align-items-center justify-content-between">
            <p>
              © 2024{" "}
              <Link
                href="/"
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                  color: "white",
                }}>
                educare
              </Link>
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "400",
              }}>
              Designed By
              <span
                className="ms-1"
                style={{
                  color: "#DCC196",
                }}>
                Noviindus Technologies
              </span>
            </p>
            <p className="d-flex gap-2">
              <a
                style={{
                  color: "#DCC196",
                }}>
                Terms & Conditions
              </a>
              <a
                style={{
                  color: "#DCC196",
                }}>
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
