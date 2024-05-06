import dish from '../images/dish.png'

export const DishesItem = () => {
  return (
    <li>
      <img src={dish} alt="" />
      <p>Name</p>
      <p>About</p>
      <p>price</p>
    </li>
  );
};
