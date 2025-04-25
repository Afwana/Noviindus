import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import art from "../../../public/images/art.png";
import craft from "../../../public/images/craft.png";
import maths from "../../../public/images/Maths.svg";

export default function Subjects() {
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
          Subjects We
          <span
            className="font-Bricolage ms-2"
            style={{ color: "#655945", fontSize: "42px", fontWeight: "700" }}>
            Teach
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
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2 mt-5">
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                }}>
                <div className="">
                  <Image
                    src={maths}
                    alt=""
                    width={215}
                    height={121}
                    objectFit="contain"
                  />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Maths
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Physics
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Chemistry
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Biology
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Computer Science
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    English
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mt-5">
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                }}>
                <div className="">
                  <Image
                    src={maths}
                    alt=""
                    width={215}
                    height={121}
                    objectFit="contain"
                  />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Maths
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Physics
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Chemistry
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Biology
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Computer Science
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    English
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-2 mt-5">
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                }}>
                <div className="">
                  <Image
                    src={maths}
                    alt=""
                    width={215}
                    height={121}
                    objectFit="contain"
                  />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Maths
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Physics
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Chemistry
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Biology
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    Computer Science
                  </p>
                </div>
              </div>
              <div
                className="card p-2"
                style={{
                  backgroundColor: "#FFF3E1",
                  borderRadius: "10px",
                  width: "252px",
                  height: "181px",
                  overflow: "hidden",
                }}>
                <div className="">
                  <Image src={maths} alt="" width={215} height={121} />
                </div>
                <div className="">
                  <p
                    className="card-text icon-color text-center"
                    style={{ fontSize: "24px", fontWeight: "500" }}>
                    English
                  </p>
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
