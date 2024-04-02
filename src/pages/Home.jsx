import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ search }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  return isLoading ? (
    <span>loading</span>
  ) : (
    <>
      <div className="home-img">
        <Link to="/publish">
          <div className="home-carre">
            Prêts à faire du tri dans vos placard ?
            <button className="sales">Commencer à vendre</button>
          </div>
        </Link>
        ;
      </div>

      <div className="home-card">
        {data.offers.map((elem) => {
          // console.log(elem);
          return (
            <Link key={elem._id} to={`/offer/${elem._id}`}>
              <article className="container owner">
                <div className="test">
                  {elem.owner.account.avatar && (
                    <img
                      src={elem.owner.account.avatar.secure_url}
                      alt="logo-owner"
                    />
                  )}
                  <span className="username">
                    {elem.owner.account.username}
                  </span>
                </div>
                <div className="caroussel">
                  <img src={elem.product_image.secure_url} alt="picture" />
                  <span className="pricehome">
                    <p>{elem.product_price} €</p>
                  </span>
                  <li className="details">
                    <p>{elem.product_details[0].MARQUE}</p>
                    <p>{elem.product_details[1].TAILLE}</p>
                  </li>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
