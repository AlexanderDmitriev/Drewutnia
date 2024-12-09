export const Event = ({ image, name, date, about }) => {
  return (
    <>
      <li>
        <img src={image} alt="event" />
        <h2>{name}</h2>
        <p>{date}</p>
        <p>{about}</p>
      </li>
    </>
  );
};
