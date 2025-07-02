import GridCards from "./GridCards";
import {useState} from 'react';

const RestaurantCard = ({resData}) => {
  const {card: {id}, card} = resData;
  // {console.log({card})}

  const [stupidList, setStupidList] = useState([1,2,3,4,5,6,7,8,9]);
  let i = 0;

  return <div>
      <h1>{card.card.id}</h1>
      <button onClick={() => {
        const filteredList = stupidList.filter(f => {
          return (f > 6)
        });
        setStupidList(filteredList);
      }} value="Button" />
      {
        stupidList.map(s => (
          <p key={i++}>{s}</p>
        ))
      }

      {
        card.card.imageGridCards?.info?.map(m => (
          <GridCards key={m.id} resData={m} />
        ))
      }
    </div>
};

export default RestaurantCard;