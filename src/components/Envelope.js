import envelope from "../assets/images/envelope.png";
import waxSeal from "../assets/images/wax-seal.png";
// import flowerOne from "../assets/images/flower-1.png"
// import flowerTwo from "../assets/images/flower-2.png"
import './Envelope.css'

// import envelopeBackground from "../assets/images/envelope-background.png";
// import envelopeBackground from "../assets/images/bg-test.jpg";
// import envelopeBackground from "../assets/images/bg-test-2.jpg";
// import envelopeBackground from "../assets/images/bg-test-3.jpg";
import envelopeBackground from "../assets/images/bg-test-4.jpg";
// import envelopeBackground from "../assets/images/bg-test-5.png";

function Envelope({ handleOpen }) {
  return (

    <main
      className="envelope-screen"
      style={{
        backgroundImage: `url(${envelopeBackground})`,
      }}>
      <div className="envelope-wrapper">
        <button
          className="envelope-button"
          onClick={handleOpen}
          aria-label="Open wedding invitation"
        >
          <div className="envelope-image-wrapper">

            <img
              src={envelope}
              alt="Wedding invitation envelope"
              className="envelope-image"
            />

            <div className="wax-seal">
              <img
                src={waxSeal}
                alt=""
                className="wax-seal-image"
              />
            </div>

          </div>
        </button>

        <div className="open-text">
          {/* <ChevronDown size={16} /> */}
          <span>Click envelope to open</span>
        </div>

      </div>
    </main>
    // <main className="envelope-screen"
    //   style={{

    //     backgroundImage: `url(${envelopeBackground})`,
    //   }}>

    //   {/* Envelope */}
    //   <div className="envelope-wrapper">

    //     <button
    //       className="envelope-button"
    //       onClick={handleOpen}
    //       aria-label="Open wedding invitation"
    //     >
    //       <div className="envelope-image-wrapper">

    //         <img
    //           src={envelope}
    //           alt="Wedding invitation envelope"
    //           className="envelope-image"
    //         />

    //         <div className="wax-seal">
    //           <img
    //             src={waxSeal}
    //             alt=""
    //             className="wax-seal-image"
    //           />
    //         </div>

    //       </div>
    //     </button>

    //     <div className="open-text">
    //       <span>Click to open</span>
    //     </div>

    //   </div>

    // </main>
  )
}
export default Envelope;
