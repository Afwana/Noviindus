export default function Space() {
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
            Learn More About
            <span
              className="font-Bricolage ms-2"
              style={{
                color: "#655945",
                fontSize: "42px",
                fontWeight: "600",
              }}>
              Our Space
            </span>
          </p>
        </div>
        <div className="" style={{ width: "100%", height: "680px" }}>
          <iframe
            width="100%"
            height="680px"
            src="https://www.youtube.com/embed/CyElHdaqkjo?si=llaKQVcrK1_PJ6wm"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
      </div>
    </div>
  );
}
