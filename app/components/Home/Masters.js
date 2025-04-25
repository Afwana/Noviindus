import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import image1 from "../../../public/images/master1.jpg";
import image2 from "../../../public/images/master2.jpg";
import image3 from "../../../public/images/master3.jpg";
import image4 from "../../../public/images/master4.jpg";

export default function Masters() {
  return (
    <div className="d-flex flex-column px-5">
      <div className="d-flex flex-column flex-md-row  justify-content-between align-items-center">
        <div></div>
        <p
          className="d-flex flex-column flex-md-row justify-content-center font-Bricolage"
          style={{
            color: "#655945",
            fontSize: "42px",
          }}>
          Master in
          <span
            className="font-Bricolage ms-2"
            style={{ color: "#655945", fontSize: "42px", fontWeight: "700" }}>
            IELTS, TOEFL Exams
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
      <div className="d-flex flex-column flex-lg-row  justify-content-between align-items-center gap-3 mt-5">
        <div className="position-relative animate-card">
          <div
            className="cardBg"
            style={{
              backgroundColor: "#8A1538",
              borderRadius: "26px",
              width: "330px",
              height: "344px",
              rotate: "3.75deg",
            }}></div>
          <div className="position-absolute" style={{ top: "0", left: "0" }}>
            <div
              className="card p-2 card-content"
              style={{
                backgroundColor: "#FFF3E1",
                borderRadius: "26px",
                width: "330px",
                height: "344px",
              }}>
              <div className="">
                <Image
                  src={image1}
                  alt=""
                  width={310}
                  height={207}
                  objectFit="contain"
                  style={{ borderRadius: "18px" }}
                />
              </div>
              <div className="">
                <p
                  className="card-text icon-color text-start"
                  style={{ fontSize: "24px", fontWeight: "500" }}>
                  IELTS Preparation
                </p>
                <p
                  className="card-text text-start"
                  style={{ fontSize: "16px", color: "#655945" }}>
                  Focus on all four sections: Listening, Reading, Writing, and
                  Speaking.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            style={{
              backgroundColor: "#8A1538",
              borderRadius: "26px",
              width: "330px",
              height: "344px",
              rotate: "3.75deg",
            }}></div>
          <div className="position-absolute" style={{ top: "0", left: "0" }}>
            <div
              className="card p-2"
              style={{
                backgroundColor: "#FFF3E1",
                borderRadius: "26px",
                width: "330px",
                height: "344px",
              }}>
              <div className="">
                <Image
                  src={image2}
                  alt=""
                  width={310}
                  height={207}
                  objectFit="contain"
                  style={{ borderRadius: "18px" }}
                />
              </div>
              <div className="">
                <p
                  className="card-text icon-color text-start"
                  style={{ fontSize: "24px", fontWeight: "500" }}>
                  TOEFL Mastery
                </p>
                <p
                  className="card-text text-start"
                  style={{ fontSize: "16px", color: "#655945" }}>
                  Comprehensive coverage of Reading, Listening, Speaking, and
                  Writing sections.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            style={{
              backgroundColor: "#8A1538",
              borderRadius: "26px",
              width: "330px",
              height: "344px",
              rotate: "3.75deg",
            }}></div>
          <div className="position-absolute" style={{ top: "0", left: "0" }}>
            <div
              className="card p-2"
              style={{
                backgroundColor: "#FFF3E1",
                borderRadius: "26px",
                width: "330px",
                height: "344px",
              }}>
              <div className="">
                <Image
                  src={image3}
                  alt=""
                  width={310}
                  height={207}
                  objectFit="contain"
                  style={{ borderRadius: "18px" }}
                />
              </div>
              <div className="">
                <p
                  className="card-text icon-color text-start"
                  style={{ fontSize: "24px", fontWeight: "500" }}>
                  PTE Academic Course
                </p>
                <p
                  className="card-text text-start"
                  style={{ fontSize: "16px", color: "#655945" }}>
                  Time-saving strategies and practice tests with instant
                  feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="position-relative">
          <div
            style={{
              backgroundColor: "#8A1538",
              borderRadius: "26px",
              width: "330px",
              height: "344px",
              rotate: "3.75deg",
            }}></div>
          <div className="position-absolute" style={{ top: "0", left: "0" }}>
            <div
              className="card p-2"
              style={{
                backgroundColor: "#FFF3E1",
                borderRadius: "26px",
                width: "330px",
                height: "344px",
              }}>
              <div className="">
                <Image
                  src={image4}
                  alt=""
                  width={310}
                  height={207}
                  objectFit="contain"
                  style={{ borderRadius: "18px" }}
                />
              </div>
              <div className="">
                <p
                  className="card-text icon-color text-start"
                  style={{ fontSize: "24px", fontWeight: "500" }}>
                  Cambridge English (CAE)
                </p>
                <p
                  className="card-text text-start"
                  style={{ fontSize: "16px", color: "#655945" }}>
                  Preparation for high-level English skills in Listening,
                  Speaking, Reading, and Writing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
