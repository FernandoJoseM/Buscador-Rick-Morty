const LocationInfo = ({ location }) => {
  return (
    <article className="location">
      <h2>{location?.name}</h2>
      <ul>
        <li>
          Type: <span>{location?.type}</span>
        </li>
        <li>
          Dimension: <span>{location?.dimension || "unknown"}</span>
        </li>
        <li>
          Population: <span>{location?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationInfo;
