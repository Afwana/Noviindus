import { PiUserFocusDuotone } from "react-icons/pi";
import { CiTrophy } from "react-icons/ci";
import { PiStudent } from "react-icons/pi";
import { LuHandHeart } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";

import frame1 from "../../../public/images/frame2.png";
import image1 from "../../../public/images/image3.png";
import frame2 from "../../../public/images/frame1.png";
import image2 from "../../../public/images/image4.png";
import image3 from "../../../public/icons/arrow.png";
import vision from "../../../public/icons/vision.png";
import mision from "../../../public/icons/mission.png";

import Image from "next/image";

export default function EducareStory() {
  return (
    <div className="d-flex flex-column gap-3">
      <div
        className="d-flex align-items-center justify-content-around py-3"
        style={{ backgroundColor: "#FFF3E1" }}>
        <div className="d-flex align-items-center justify-content-center gap-2 font-sans">
          <PiUserFocusDuotone size={40} className="icon-color" />
          <span style={{ fontSize: "26", color: "#8A1538" }}>
            Personal Attention
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 font-sans icon-color">
          <CiTrophy size={40} className="icon-color" />
          <span style={{ fontSize: "26", color: "#8A1538" }}>
            Growth Mindset
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 font-sans">
          <PiStudent size={40} className="icon-color" />
          <span style={{ fontSize: "26", color: "#8A1538" }}>
            Skill Development
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-2 font-sans">
          <LuHandHeart size={40} className="icon-color" />
          <span style={{ fontSize: "26", color: "#8A1538" }}>
            Passionate Teaching
          </span>
        </div>
      </div>

      <div className="d-flex px-5 align-items-center justify-content-between gap-5">
        <div className="d-flex flex-column gap-4 me-5">
          <p
            className="font-Bricolage"
            style={{
              color: "#655945",
              fontSize: "42px",
            }}>
            The Story of{" "}
            <span
              className="font-Bricolage"
              style={{ color: "#655945", fontSize: "42px", fontWeight: "700" }}>
              Educare
            </span>
          </p>
          <div className="font-sans">
            <p
              className="font-sans"
              style={{ color: "#655945", fontSize: "20px" }}>
              At{" "}
              <span style={{ fontWeight: "700", color: "#655945" }}>
                Educare
              </span>{" "}
              education center, we believe that every student deserves
              personalized, focused attention to reach their fullest potential.
              Our mission is to empower students through one-on-one tutoring,
              creating customized learning plans tailored to each
              individual&apos;s unique needs, strengths, and learning styles.
            </p>
            <p style={{ color: "#655945", fontSize: "20px" }}>
              Founded on a passion for education and a commitment to excellence,
              <span style={{ fontWeight: "700", color: "#655945" }}>
                Educare
              </span>{" "}
              education center was established to offer students a supportive
              and engaging learning environment. Our team of experienced tutors
              is dedicated to helping students excel academically while also
              building confidence, independence, and a love for learning.
            </p>
            <p style={{ color: "#655945", fontSize: "20px" }}>
              We specialize in a wide range of subjects across all grade levels,
              including math, science, English, and test preparation. Whether
              your child needs help catching up, getting ahead, or preparing for
              a specific exam, we are here to support their journey.
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-start">
            <button className="fancy-button font-sans">
              <span className="bg-layer"></span>
              <span className="button-content" style={{ fontSize: "16px" }}>
                Read more <BsArrowUpRight size={18} />
              </span>
            </button>
          </div>
        </div>
        <div className="ms-5">
          <div
            className="position-relative"
            style={{ width: "100%", height: "500px", right: "130px" }}>
            <div
              className="position-relative"
              style={{ width: "300px", height: "354px" }}>
              <Image
                src={frame1}
                alt="frame"
                width={300}
                height={354}
                className="position-absolute top-0 start-0"
                style={{ zIndex: 0 }}
              />

              <Image
                src={image1}
                alt="image"
                width={246}
                height={297}
                className="position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
          <div
            className="position-absolute"
            style={{ right: "50px", top: "1180px", zIndex: "20" }}>
            <div
              className="position-relative"
              style={{ width: "300px", height: "354px" }}>
              <Image
                src={frame2}
                alt="frame"
                width={300}
                height={354}
                className="position-absolute top-0 start-0"
                style={{ zIndex: 0 }}
              />

              <Image
                src={image2}
                alt="image"
                width={246}
                height={297}
                className="position-absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between gap-4 px-5 mt-5">
        <div className="position-relative">
          <div
            className="p-4"
            style={{
              backgroundColor: "#FFF3E1",
              borderRadius: "26px",
              width: "583px",
              height: "195px",
            }}>
            <p
              className="font-sans icon-color"
              style={{ fontSize: "24px", fontWeight: "bolder" }}>
              Mission
            </p>
            <p className="icon-color" style={{ fontSize: "21px" }}>
              To help students succeed with personalized, <br />{" "}
              <span style={{ fontWeight: "bold" }}>one-to-one</span> tutoring
              that builds <br /> confidence, skills, and a love for learning.
            </p>
          </div>
          <div
            className="position-absolute"
            style={{ top: "-50px", left: "70%" }}>
            <Image
              src={mision}
              alt="mission"
              width={148}
              height={216}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="position-relative">
          <div
            className="p-4 shadow-maroon"
            style={{
              backgroundColor: "#FFF3E1",
              borderRadius: "26px",
              width: "583px",
              height: "195px",
            }}>
            <p
              className="font-sans icon-color"
              style={{ fontSize: "24px", fontWeight: "bolder" }}>
              Vision
            </p>
            <p className="icon-color" style={{ fontSize: "21px" }}>
              To be a trusted center where students <br /> reach their
              potential, build confidence, <br /> and prepare for a{" "}
              <span style={{ fontWeight: "bold" }}>bright future</span>.
            </p>
          </div>
          <div
            className="position-absolute"
            style={{ top: "-50px", left: "70%" }}>
            <Image
              src={vision}
              alt="vision"
              width={148}
              height={216}
              objectFit="contain"
            />
          </div>
        </div>
        <Image src={image3} alt="arrow" width={196} height={134} />
      </div>
    </div>
  );
}
