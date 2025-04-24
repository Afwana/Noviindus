export default function Faqs() {
  return (
    <div className="px-5">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex justify-content-center align-items-center">
          <p
            className=" d-flex justify-content-center font-Bricolage"
            style={{
              color: "#655945",
              fontSize: "42px",
            }}>
            Frequently asked
            <span
              className="font-Bricolage ms-2"
              style={{
                color: "#655945",
                fontSize: "42px",
                fontWeight: "600",
              }}>
              Questions
            </span>
          </p>
        </div>
        <div className="accordion font-sans" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#655945",
                }}>
                What subjects do you offer tutoring in?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={{ fontSize: "16px", color: "#655945CC" }}>
                We offer tutoring in a wide range of subjects including Math,
                Science, English, Reading, History, and many more. We also
                provide specialized test preparation for standardized tests such
                as the SAT, ACT, and AP exams.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#655945",
                }}>
                What ages or grade levels do you tutor?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={{ fontSize: "16px", color: "#655945CC" }}>
                We offer tutoring in a wide range of subjects including Math,
                Science, English, Reading, History, and many more. We also
                provide specialized test preparation for standardized tests such
                as the SAT, ACT, and AP exams.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#655945",
                }}>
                Is tutoring one-on-one or in groups?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={{ fontSize: "16px", color: "#655945CC" }}>
                We offer tutoring in a wide range of subjects including Math,
                Science, English, Reading, History, and many more. We also
                provide specialized test preparation for standardized tests such
                as the SAT, ACT, and AP exams.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#655945",
                }}>
                Can sessions take place at our home?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={{ fontSize: "16px", color: "#655945CC" }}>
                We offer tutoring in a wide range of subjects including Math,
                Science, English, Reading, History, and many more. We also
                provide specialized test preparation for standardized tests such
                as the SAT, ACT, and AP exams.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="true"
                aria-controls="collapseFive"
                style={{
                  fontSize: "22px",
                  fontWeight: "500",
                  color: "#655945",
                }}>
                What is the duration and frequency of each tutoring session?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample">
              <div
                className="accordion-body"
                style={{ fontSize: "16px", color: "#655945CC" }}>
                We offer tutoring in a wide range of subjects including Math,
                Science, English, Reading, History, and many more. We also
                provide specialized test preparation for standardized tests such
                as the SAT, ACT, and AP exams.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
