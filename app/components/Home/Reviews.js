import Image from "next/image";
import Customer1 from "../../../public/images/customer1.png";
import Customer2 from "../../../public/images/customer2.png";
import vector from "../../../public/icons/Vector.png";
import { IoStar } from "react-icons/io5";

export default function Reviews() {
  return (
    <div className="px-2 px-lg-5 mt-5">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <p
            className=" d-flex flex-column flex-md-row  justify-content-center font-Bricolage"
            style={{
              color: "#655945",
              fontSize: "42px",
            }}>
            Hear from our
            <span
              className="font-Bricolage ms-2"
              style={{
                color: "#655945",
                fontSize: "42px",
                fontWeight: "600",
              }}>
              Valuable Parents
            </span>
          </p>
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
              <div className="d-flex flex-column flex-lg-row  justify-content-between align-items-center gap-5 gap-lg-2 mt-5">
                <div className="position-relative">
                  <div
                    className="card px-2 pt-4 review-card"
                    style={{
                      borderRadius: "26px",
                    }}>
                    <div className="card-body pt-5 f-flex flex-column justify-content-center align-items-end">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", color: "#4E4E4E" }}>
                        &quot;Best decision for English tutoring! Educare
                        improved our daughter&apos;s skills and instilled
                        confidence. Recent high scores speak volumes. <br />{" "}
                        Thank you, Educare!”
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <IoStar key={i} color="#FBBC04" size={20} />
                            ))}
                        </p>
                        <p className="d-flex flex-column font-sans align-items-end">
                          <span
                            className="icon-color"
                            style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Sarah H
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "#292A567D",
                            }}>
                            - Accountant
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="position-absolute d-none d-md-block"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "480px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                  <div
                    className="position-absolute d-block d-md-none mt-5"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "300px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div
                    className="card px-2 pt-4 review-card"
                    style={{
                      borderRadius: "26px",
                    }}>
                    <div className="card-body pt-5 f-flex flex-column justify-content-center align-items-end">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", color: "#4E4E4E" }}>
                        &quot;Educare&appos;s commitment to 1-on-1 learning
                        transformed our son&apos;s understanding of science.
                        Recent top scores prove Educare delivers results.
                        Grateful for the positive impact!”
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <IoStar key={i} color="#FBBC04" size={20} />
                            ))}
                        </p>
                        <p className="d-flex flex-column font-sans align-items-end">
                          <span
                            className="icon-color"
                            style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Ahmed K
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "#292A567D",
                            }}>
                            - Engineer
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="position-absolute d-none d-md-block"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "480px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer2}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                  <div
                    className="position-absolute d-block d-md-none mt-5"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "300px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div
                    className="card px-2 pt-4 review-card"
                    style={{
                      borderRadius: "26px",
                    }}>
                    <div className="card-body pt-5 f-flex flex-column justify-content-center align-items-end">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", color: "#4E4E4E" }}>
                        &quot;Best decision for English tutoring! Educare
                        improved our daughter&apos;s skills and instilled
                        confidence. Recent high scores speak volumes. <br />{" "}
                        Thank you, Educare!”
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <IoStar key={i} color="#FBBC04" size={20} />
                            ))}
                        </p>
                        <p className="d-flex flex-column font-sans align-items-end">
                          <span
                            className="icon-color"
                            style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Sarah H
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "#292A567D",
                            }}>
                            - Accountant
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="position-absolute d-none d-md-block"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "480px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                  <div
                    className="position-absolute d-block d-md-none mt-5"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "300px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-between align-items-center gap-2 mt-5">
                <div className="position-relative">
                  <div
                    className="card px-2 pt-4"
                    style={{
                      borderRadius: "26px",
                      width: "480px",
                      height: "330px",
                    }}>
                    <div className="card-body pt-5 f-flex flex-column justify-content-center align-items-end">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", color: "#4E4E4E" }}>
                        &quot;Best decision for English tutoring! Educare
                        improved our daughter&apos;s skills and instilled
                        confidence. Recent high scores speak volumes. <br />{" "}
                        Thank you, Educare!”
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <IoStar key={i} color="#FBBC04" size={20} />
                            ))}
                        </p>
                        <p className="d-flex flex-column font-sans align-items-end">
                          <span
                            className="icon-color"
                            style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Sarah H
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "#292A567D",
                            }}>
                            - Accountant
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="position-absolute"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "480px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div
                    className="card px-2 pt-4"
                    style={{
                      borderRadius: "26px",
                      width: "480px",
                      height: "330px",
                    }}>
                    <div className="card-body pt-5 f-flex flex-column justify-content-center align-items-end">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", color: "#4E4E4E" }}>
                        &quot;Educare&appos;s commitment to 1-on-1 learning
                        transformed our son&apos;s understanding of science.
                        Recent top scores prove Educare delivers results.
                        Grateful for the positive impact!”
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <IoStar key={i} color="#FBBC04" size={20} />
                            ))}
                        </p>
                        <p className="d-flex flex-column font-sans align-items-end">
                          <span
                            className="icon-color"
                            style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Ahmed K
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "#292A567D",
                            }}>
                            - Engineer
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="position-absolute"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "480px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer2}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
                  </div>
                </div>
                <div className="position-relative">
                  <div
                    className="card px-2 pt-4"
                    style={{
                      borderRadius: "26px",
                      width: "480px",
                      height: "330px",
                    }}>
                    <div className="card-body pt-5 f-flex flex-column justify-content-center align-items-end">
                      <p
                        className="card-text"
                        style={{ fontSize: "21px", color: "#4E4E4E" }}>
                        &quot;Best decision for English tutoring! Educare
                        improved our daughter&apos;s skills and instilled
                        confidence. Recent high scores speak volumes. <br />{" "}
                        Thank you, Educare!”
                      </p>
                      <div className="d-flex justify-content-between align-items-center pt-3">
                        <p>
                          {Array(5)
                            .fill(null)
                            .map((_, i) => (
                              <IoStar key={i} color="#FBBC04" size={20} />
                            ))}
                        </p>
                        <p className="d-flex flex-column font-sans align-items-end">
                          <span
                            className="icon-color"
                            style={{ fontSize: "20px", fontWeight: "bold" }}>
                            Sarah H
                          </span>
                          <span
                            style={{
                              fontSize: "15px",
                              fontWeight: "500",
                              color: "#292A567D",
                            }}>
                            - Accountant
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="position-absolute"
                    style={{ top: "-55%", left: "0", zIndex: 0 }}>
                    <div
                      className="d-flex justify-content-between align-items-center px-4"
                      style={{
                        borderRadius: "26px",
                        width: "480px",
                        height: "370px",
                        zIndex: 1,
                      }}>
                      <Image
                        src={Customer1}
                        alt="reviewed customer"
                        width={94}
                        height={96}
                      />
                      <Image
                        src={vector}
                        alt="reviewed customer"
                        width={40}
                        height={68}
                      />
                    </div>
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
    </div>
  );
}
