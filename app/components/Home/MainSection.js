import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";

import BG from "../../../public/images/mainBG.png";
import image1 from "../../../public/images/ImageLeft.png";
// import imageBg1 from "../../../public/images/LeftBg.png";
import image2 from "../../../public/images/ImageRight.png";
// import imageBg2 from "../../../public/images/rightBg.png";
import offer1 from "../../../public/images/offer1.png";
import offer2 from "../../../public/images/offer2.png";
import offer3 from "../../../public/images/offer3.png";
import offer4 from "../../../public/images/offer4.png";
import offer5 from "../../../public/images/offer5.png";
import offer6 from "../../../public/images/offer6.png";
import offer7 from "../../../public/images/offer7.png";
import DemoModal from "./DemoModal";

export default function MainSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${BG.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="">
      <div className="relative">
        <div
          id="carouselIndicators"
          className="carousel slide font-Bricolage p-4 pointer-event"
          data-bs-ride="carousel">
          <div className="carousel-indicators mt-5">
            <div
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
              style={{ backgroundColor: "#8A1538" }}></div>
            <div
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              style={{ backgroundColor: "#8A1538" }}></div>
            <div
              type="button"
              data-bs-target="#carouselIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              style={{ backgroundColor: "#8A1538" }}></div>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span
                  className="carousel-font"
                  style={{
                    fontWeight: "800",
                    color: "#8A1538",
                  }}>
                  Personalized One-to-One
                </span>
                <span
                  className="carousel-font"
                  style={{
                    fontWeight: "400",
                    color: "#8A1538",
                  }}>
                  Tutoring at Our Center
                </span>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <span
                  className="carousel-font"
                  style={{
                    fontWeight: "800",
                    color: "#8A1538",
                  }}>
                  Individual Tution,
                </span>
                <span
                  className="carousel-font"
                  style={{
                    fontWeight: "400",
                    color: "#8A1538",
                  }}>
                  For all students till 12th grade!
                </span>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <div className="d-flex flex-column align-items-center justify-content-center line-height">
                <span
                  className="carousel-font"
                  style={{
                    fontWeight: "800",
                    color: "#8A1538",
                  }}>
                  Master IELTS, TOEFL and
                </span>
                <span
                  className="carousel-font"
                  style={{
                    fontWeight: "400",
                    color: "#8A1538",
                  }}>
                  Beyond with Expert Guidance!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute d-none d-lg-flex justify-content-between px-4">
        <div className="updownmotion">
          <Image src={image1} alt="image 1" width={568} height={539} />
        </div>
        <div className="d-flex flex-column justify-content-center gap-5 align-items-center">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#demoModal"
            className="fancy-button font-sans">
            <span className="bg-layer"></span>
            <span className="button-content" style={{ fontSize: "20px" }}>
              Book a Free Demo Class <BsArrowUpRight size={20} />
            </span>
          </button>
          <div className="d-flex flex-column gap-3">
            <span
              className="d-flex justify-content-center"
              style={{ color: "#8A1538", fontWeight: "700", fontSize: "20px" }}>
              Curriculums we offer:
            </span>
            <div
              id="carousel"
              className="carousel slide font-Bricolage p-4 pointer-event"
              data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="2000">
                  <Image src={offer1} alt="images" width={157} height={108} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image src={offer2} alt="images" width={157} height={108} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image src={offer3} alt="images" width={157} height={108} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image src={offer4} alt="images" width={157} height={108} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image src={offer5} alt="images" width={157} height={108} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image src={offer6} alt="images" width={157} height={108} />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <Image src={offer7} alt="images" width={157} height={108} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* <div className="relative bottom-0 left-0 right-0 z-0">
            <Image src={imageBg2} alt="image 1" width={546} height={252} />
          </div> */}
          <div className="absolute updownmotion">
            <Image src={image2} alt="image 1" width={475} height={478} />
          </div>
          {/* <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#8A1538" }}>
            Book Free Demo Class
          </button> */}
        </div>
      </div>

      {/* mobile view */}
      <div className="d-flex d-lg-none flex-column align-items-center justify-content-center px-2">
        <div className="updownmotion">
          <Image src={image1} alt="image 1" width={320} height={350} />
        </div>
        <div className="d-block d-lg-flex p-2 my-5">
          <button
            data-bs-toggle="modal"
            data-bs-target="#demoModal"
            className="fancy-button font-sans">
            <span className="bg-layer"></span>
            <span className="button-content" style={{ fontSize: "20px" }}>
              Book a Free Demo Class
            </span>
          </button>
        </div>
        <div className="">
          {/* <div className="relative bottom-0 left-0 right-0 z-0">
            <Image src={imageBg2} alt="image 1" width={546} height={252} />
          </div> */}
          <div className="updownmotion">
            <Image src={image2} alt="image 1" width={320} height={320} />
          </div>
          {/* <button
            type="button"
            className="btn"
            style={{ backgroundColor: "#8A1538" }}>
            Book Free Demo Class
          </button> */}
        </div>
      </div>
      <div className="d-flex d-lg-none flex-column justify-content-center gap-5 align-items-center">
        <marquee
          className="marq d-flex align-items-center py-4"
          bgcolor="#FFFFF"
          direction="left"
          loop="">
          <div className="geek1">
            <div className="d-flex align-items-center gap-5">
              <div className="d-flex justify-content-between align-items-center gap-5">
                <Image
                  src={offer1}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
                <Image
                  src={offer2}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center gap-5">
                <Image
                  src={offer3}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
                <Image
                  src={offer4}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center gap-5">
                <Image
                  src={offer5}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
                <Image
                  src={offer6}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
              </div>
              <div className="d-flex justify-content-between align-items-center gap-5">
                <Image
                  src={offer7}
                  alt="images"
                  width={157}
                  height={108}
                  className="mx-5"
                />
              </div>
            </div>
          </div>
        </marquee>
      </div>
      <DemoModal />
    </div>
  );
}
