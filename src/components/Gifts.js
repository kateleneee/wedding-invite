import metrobankQR from "../assets/images/metrobank-qr.jpg"
import mayaQR from "../assets/images/maya-qr.png"
import { Gift } from "lucide-react";
import './Gifts.css'

export default function Gifts() {
  return (
    <section id="gifts" className="section gifts-section">
      <div className="section-label">GIFT GUIDE</div>

      <h2>
        Your presence
        <br />
        is our present
      </h2>

      <p>
        Your presence on our special day means more to us than anything.
      </p>

      <div className="gift-box">
        <Gift size={30} />

        <p>
          If you wish to bless us with a gift, a contribution toward our
          future together would be deeply appreciated.
        </p>
        {/* QR CODES */}
        <div className="gift-qr-container"> {/* MAYA */}
          <div className="gift-qr-card">
            <div className="gift-qr">
              <img src={mayaQR} alt="Maya QR Code" />
            </div>
            <span className="gift-qr-label">Maya</span>
          </div>
          {/* METROBANK */}
          <div className="gift-qr-card">
            <div className="gift-qr">
              <img src={metrobankQR} alt="Metrobank QR Code" />
            </div>
            <span className="gift-qr-label">Metrobank</span>
          </div>
        </div>
      </div>
    </section>
  )
}