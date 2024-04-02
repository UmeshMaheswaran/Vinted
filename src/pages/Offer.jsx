import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const [data, setData] = useState({});
  const [isloading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return isloading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <img src={data.product_image.secure_url} alt="picturep2" />
      <div className="offer-infos">
        <p className="prix">{data.product_price} €</p>
        <li>
          {data.product_details.map((elem) => {
            const keys = Object.keys(elem);

            const keyName = keys[0];

            return (
              <p className="detailss" key={keyName}>
                {keyName} {elem[keyName]}
              </p>
            );
          })}
        </li>
      </div>
    </main>
  );
};

export default Offer;
