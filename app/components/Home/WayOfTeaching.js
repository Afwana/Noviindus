import Image from "next/image";
import image1 from "../../../public/images/teaching.png";

export default function WayOfTeaching() {
  return (
    <div className="p-5" style={{ backgroundColor: "#F9F7F4" }}>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex flex-column gap-4 me-5 ps-5 ps-md-0">
          <p
            className="font-Bricolage"
            style={{
              color: "#655945",
              fontSize: "42px",
            }}>
            Our way of{" "}
            <span
              className="font-Bricolage"
              style={{ color: "#655945", fontSize: "42px", fontWeight: "700" }}>
              Teaching
            </span>
          </p>
          <div className="font-sans">
            <ul style={{ paddingLeft: "1.5rem", listStylePosition: "outside" }}>
              <li
                className="mb-4"
                style={{ color: "#655945", fontSize: "20px" }}>
                Every teacher at{" "}
                <span style={{ fontWeight: "700" }}>Educare</span> brings
                passion to their lessons, making learning enjoyable with
                engaging activities tailored to inspire and motivate each
                student.
              </li>
              <li
                className="mb-4"
                style={{ color: "#655945", fontSize: "20px" }}>
                We focus on creating a supportive environment where individual
                strengths are recognized, and personalized attention helps
                students excel.
              </li>
              <li
                className="mb-4"
                style={{ color: "#655945", fontSize: "20px" }}>
                Our approach combines innovative teaching methods with
                real-world applications, ensuring students not only learn but
                also understand and apply their knowledge effectively.
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={image1}
              alt="image"
              width={300}
              height={262}
              style={{ borderRadius: "26px" }}
              className="d-flex d-lg-none"
            />
          </div>
        </div>
        <div>
          <Image
            src={image1}
            alt="image"
            width={800}
            height={462}
            style={{ borderRadius: "26px" }}
            className="d-none d-lg-flex"
          />
        </div>
      </div>
    </div>
  );
}
