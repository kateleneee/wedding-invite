function Envelope({ handleOpen }) {
  return (

    <main className="envelope-screen">
      <div className="background-flower flower-one">
        ✿
      </div>

      <div className="background-flower flower-two">
        ✽
      </div>

      <div className="envelope-wrapper">

        <button
          className="envelope-button"
          onClick={handleOpen}
          aria-label="Open wedding invitation"
        >
          <div className="envelope-image-wrapper">

            <img
              src="../assets/images/envelope.png"
              alt="Wedding invitation envelope"
              className="envelope-image"
            />

            <div className="wax-seal">
              <img
                src="/images/wax-seal.png"
                alt=""
                className="wax-seal-image"
              />
            </div>

          </div>
        </button>

        <div className="open-text">
          {/* <ChevronDown size={16} /> */}
          <span>Click to open</span>
        </div>

      </div>
    </main>
  )
}
export default Envelope;
