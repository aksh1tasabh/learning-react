const GridCards = ({resData}) => {
  {console.log(resData)}
  return (
    <div>
      <p>{resData.action.text}</p>
    </div>
  );
};

export default GridCards;