
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [ListOfRestaurants, setListOfRestaurant] = useState([]);
     
    useEffect(() =>{
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        //optional chaining
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    return ListOfRestaurants.length == 0? ( 
    <Shimmer /> 
) : (
        <div className ="body">
            <div className = "filter">
            <button 
            className ="filter-btn" 
            onClick ={() => { 
                const filteredList = ListOfRestaurants.filter(
                    (res) => res.info.avgRating > 4
                );
                setListOfRestaurant(filteredList);
            }}>
            Top Rated Restaurants
            </button>
            </div>
            <div className ="res-container">
                {ListOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;