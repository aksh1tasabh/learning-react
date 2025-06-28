import RestaurantCard from './RestaurantCard';

const Body = (props) => {

    const {statusMessage, cards} = props.data;
    let resID = 1;

    return (
        <div>
            <p>{statusMessage}</p>

            {
              cards.map(n => (
                <RestaurantCard key={resID+=1} resData={n} />
              ))
            }
            
        </div>
    );
};

export default Body;