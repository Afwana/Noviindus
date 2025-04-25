import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import image1 from "../../../public/images/blog1.png";
import image2 from "../../../public/images/blog2.png";
import image3 from "../../../public/images/blog3.png";
import image4 from "../../../public/images/blog4.png";

export default function BlogPosts() {
  return (
    <div className="px-2 px-lg-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p
          className=" d-flex flex-column flex-md-row justify-content-center font-Bricolage"
          style={{
            color: "#655945",
            fontSize: "42px",
          }}>
          Our Latest
          <span
            className="font-Bricolage ms-2"
            style={{ color: "#655945", fontSize: "42px", fontWeight: "700" }}>
            Blog Posts
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
      <div className="d-flex flex-column flex-lg-row mt-2 mt-lg-0 justify-content-between align-items-center gap-2">
        <div className="d-flex flex-column">
          <Image src={image1} alt="" width={350} height={270} />
          <div className="p-2">
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#655945" }}>
              Top tips for effective home tutoring
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#65594599",
              }}>
              Share practical advice on how students can make the most out of
              tutoring sessions.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <Image src={image2} alt="" width={350} height={270} />
          <div className="p-2">
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#655945" }}>
              Top tips for effective home tutoring
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#65594599",
              }}>
              Share practical advice on how students can make the most out of
              tutoring sessions.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <Image src={image3} alt="" width={350} height={270} />
          <div className="p-2">
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#655945" }}>
              Top tips for effective home tutoring
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#65594599",
              }}>
              Share practical advice on how students can make the most out of
              tutoring sessions.
            </p>
          </div>
        </div>
        <div className="d-flex flex-column">
          <Image src={image4} alt="" width={350} height={270} />
          <div className="p-2">
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#655945" }}>
              Top tips for effective home tutoring
            </p>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "#65594599",
              }}>
              Share practical advice on how students can make the most out of
              tutoring sessions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
