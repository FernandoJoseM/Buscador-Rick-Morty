import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

const ResidentCard = ({ url }) => {
  const [residents, getResidents] = useFetch(url);
  useEffect(() => {
    getResidents();
  }, []);

  return (
    <article className="resident">
      <header className="resident__header">
        <img src={residents?.image} className="resident__image"/>
        <div className="resident__status">
          <span className={`resident__status__circle ${residents?.status}`}></span>
          <span className="resident__status__value">{residents?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{residents?.name}</h3>
        <hr className="resident__separator" />
        <ul className="resident__list">
          <li className="resident__item">
            Species: <span className="resident__label">{residents?.species}</span>
          </li>
          <li className="resident__item">
            origin: <span className="resident__label">{residents?.origin.name}</span>
          </li>
          <li className="resident__item">
            Eppisodes where appear: <span className="resident__label">{residents?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
