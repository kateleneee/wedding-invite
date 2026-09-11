import { useNavigate } from "react-router-dom";
import Envelope from "../components/Envelope";

function EnvelopePage() {
  const navigate = useNavigate();

  const handleOpen = () => {
    navigate("/invite-details");
  };

  return <Envelope handleOpen={handleOpen} />;
}

export default EnvelopePage;
