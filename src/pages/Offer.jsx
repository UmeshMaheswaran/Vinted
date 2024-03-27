import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  return <h1>{id}</h1>;
};

export default Offer;
