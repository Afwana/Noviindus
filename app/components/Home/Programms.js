import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import art from "../../../public/images/art.png";
import craft from "../../../public/images/craft.png";
import grammer from "../../../public/images/grammer.png";

export default function Programms() {
  return (
    <div className="d-flex flex-column px-2 px-lg-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div></div>
        <p
          className=" d-flex flex-column flex-md-row justify-content-center font-Bricolage"
          style={{
            color: "#655945",
            fontSize: "42px",
          }}>
          Programs we offer
          <span
            className="font-Bricolage ms-2"
            style={{ color: "#655945", fontSize: "42px", fontWeight: "700" }}>
            for Kids
          </span>
        </p>
        <div className="d-flex align-items-center justify-content-end">
          <button className="fancy-button font-sans">
            <span className="bg-layer"></span>
            <span className="button-content" style={{ fontSize: "14px" }}>
              View All <BsArrowUpRight className="ms-1" size={16} />
            </span>
          </button>
        </div>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-5 gap-lg-3 mt-5">
              <div className="position-relative">
                <div
                  className="p-4 program-item-box"
                  style={{
                    backgroundColor: "#FFF3E1",
                    borderRadius: "26px",
                  }}>
                  <p
                    className="font-sans icon-color"
                    style={{ fontSize: "24px", fontWeight: "bolder" }}>
                    English Grammar
                  </p>
                  <p className="icon-color" style={{ fontSize: "17px" }}>
                    Master the building blocks of writing{" "}
                    <br className="d-none d-md-block" /> and communication.
                  </p>
                  <div className="d-flex justify-content-start">
                    <button className="fancy-button font-sans">
                      <span className="bg-layer"></span>
                      <span
                        className="button-content"
                        style={{ fontSize: "14px" }}>
                        Read More <BsArrowUpRight className="ms-1" size={16} />
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className="position-absolute d-none d-md-block"
                  style={{ top: "-30px", left: "60%" }}>
                  <Image
                    src={grammer}
                    alt="mission"
                    width={187}
                    height={248}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="position-relative">
                <div
                  className="p-4 program-item-box"
                  style={{
                    backgroundColor: "#FFF3E1",
                    borderRadius: "26px",
                  }}>
                  <p
                    className="font-sans icon-color"
                    style={{ fontSize: "24px", fontWeight: "bolder" }}>
                    Craft Classes
                  </p>
                  <p className="icon-color" style={{ fontSize: "17px" }}>
                    Unleash creativity with hands-on{" "}
                    <br className="d-none d-md-block" /> projects and artistic
                    fun.
                  </p>
                  <div className="d-flex justify-content-start">
                    <button className="fancy-button font-sans">
                      <span className="bg-layer"></span>
                      <span
                        className="button-content"
                        style={{ fontSize: "14px" }}>
                        Read More <BsArrowUpRight className="ms-1" size={16} />
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className="position-absolute d-none d-md-block"
                  style={{ top: "-30px", left: "55%", zIndex: 1 }}>
                  <Image
                    src={craft}
                    alt="craft"
                    width={187}
                    height={248}
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="position-relative">
                <div
                  className="p-4 program-item-box"
                  style={{
                    backgroundColor: "#FFF3E1",
                    borderRadius: "26px",
                  }}>
                  <p
                    className="font-sans icon-color"
                    style={{ fontSize: "24px", fontWeight: "bolder" }}>
                    Art and Painting
                  </p>
                  <p className="icon-color" style={{ fontSize: "17px" }}>
                    Express yourself through colors,{" "}
                    <br className="d-none d-md-block" /> sketches, and designs
                  </p>
                  <div className="d-flex justify-content-start">
                    <button className="fancy-button font-sans">
                      <span className="bg-layer"></span>
                      <span
                        className="button-content"
                        style={{ fontSize: "14px" }}>
                        Read More <BsArrowUpRight className="ms-1" size={16} />
                      </span>
                    </button>
                  </div>
                </div>
                <div
                  className="position-absolute d-none d-md-block"
                  style={{ top: "-30px", left: "60%" }}>
                  <Image
                    src={art}
                    alt="art"
                    width={187}
                    height={248}
                    objectFit="contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
