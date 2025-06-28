import GridCards from "./GridCards";

const RestaurantCard = ({resData}) => {
  const {card: {id}, card} = resData;
  // {console.log({card})}

  return <div>
      <h1>{card.card.id}</h1>
      {
        card.card.imageGridCards?.info?.map(m => (
          <GridCards key={m.id} resData={m} />
        ))
      }
    </div>
};

export default RestaurantCard;