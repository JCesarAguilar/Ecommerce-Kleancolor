import { useNavigate } from "react-router-dom";
import { P1 } from "./Typography";

export default function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="cursor-pointer hover:underline px-4 py-5 lg:px-20 lg:pt-10"
    >
      <P1> Regresar</P1>
    </button>
  );
}
