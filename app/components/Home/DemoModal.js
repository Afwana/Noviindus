export default function DemoModal() {
  return (
    <div
      className="modal fade modal-fullscreen-md-down"
      id="demoModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="demoModalLabel"
      aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex align-items-start justify-content-between">
            <div></div>
            <div
              id="demoModalLabel"
              className="modal-title d-flex flex-column justify-content-center align-items-center font-sans">
              <h1
                style={{
                  fontSize: "33px",
                  fontWeight: "600",
                  color: "#655945",
                }}>
                Book a Free Demo Class
              </h1>
              <p style={{ fontSize: "15px", color: "#969696" }}>
                Fill up this form and we will connect you shortly
              </p>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <fieldset>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label label-form">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control form-field"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label label-form">
                    Email ID
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="form-control form-field"
                  />
                </div>
                <div className="mb-3">
                  <select id="syllabus" className="form-select form-select">
                    <option hidden className="label-form">
                      Choose your curriculum syllabus
                    </option>
                  </select>
                </div>
                <div className="mb-3">
                  <select id="syllabus" className="form-select form-select">
                    <option className="label-form">Choose your class</option>
                  </select>
                </div>
                <div className="mb-3">
                  <select id="syllabus" className="form-select form-select">
                    <option className="label-form">Choose your course</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="notes" className="form-label label-form">
                    Email ID
                  </label>
                  <textarea
                    type="text"
                    id="notes"
                    className="form-control"
                    style={{ height: "137px" }}
                  />
                </div>
                <button
                  data-bs-dismiss="modal"
                  type="submit"
                  className="btn"
                  style={{
                    backgroundColor: "#8A1538",
                    color: "white",
                    width: "100%",
                  }}>
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
