import Image from "next/image";
import Map from "../../../public/images/map.png";
import image from "../../../public/images/img.svg";

export default function WorldMap() {
  return (
    <>
      <div className="px-2 px-lg-5 mt-5">
        <div className="d-flex flex-column gap-1 gap-lg-5">
          <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
            <p
              className=" d-flex flex-column flex-lg-row justify-content-center font-Bricolage"
              style={{
                color: "#655945",
                fontSize: "42px",
              }}>
              Prepare Your Child for a
              <span
                className="font-Bricolage ms-2"
                style={{
                  color: "#655945",
                  fontSize: "42px",
                  fontWeight: "600",
                }}>
                World of Opportunities with Educare
              </span>
            </p>
          </div>
          <div
            className="position-relative d-none d-lg-flex"
            style={{ width: "100%", height: "676px" }}>
            <Image src={Map} alt="map with clients" fill objectFit="contain" />
          </div>
          <div
            className="position-relative d-flex d-lg-none"
            style={{ width: "100%", height: "350px" }}>
            <Image src={Map} alt="map with clients" fill objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="">
        <marquee
          className="marq d-flex align-items-center pt-4 pb-2"
          bgcolor="#FFF3E1"
          direction="left"
          loop="">
          <div className="geek1">
            <div className="d-flex align-items-center gap-5">
              <p className="icon-color font-sans" style={{ fontSize: "26px" }}>
                Education is the foundation of greatness; let&apos;s build it
                together
              </p>
              <Image src={image} alt="" width={36} height={55} />
              <p className="icon-color font-sans" style={{ fontSize: "26px" }}>
                Learning today, leading tomorrow – the Educare way
              </p>
              <Image src={image} alt="" width={36} height={55} />
              <p className="icon-color font-sans" style={{ fontSize: "26px" }}>
                Turning dreams into achievements through dedicated guidance
              </p>
              <Image src={image} alt="" width={36} height={55} />
              <p className="icon-color font-sans" style={{ fontSize: "26px" }}>
                Your journey to success begins with a single lesson
              </p>
            </div>
          </div>
          {/* <div className="geek2"></div> */}
        </marquee>
      </div>
    </>
  );
}
