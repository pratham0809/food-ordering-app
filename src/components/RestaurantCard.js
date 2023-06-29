import { IMG_URL } from "../utils/const"

const RestaurantCard= (props)=>{

    const {cloudinaryImageId, name, cuisines, avgRating, deliveryTime, costForTwo}= props.info.data?.data
    return(
        <div className="res">
                    <img className="res-img" src={IMG_URL+cloudinaryImageId}/>
                    <h1>{name}</h1>
                    <h3>{cuisines.join(", ")}</h3>
                    <h3>{avgRating}</h3>
                    <h3>{deliveryTime} mins</h3>
                    <h3>{costForTwo/100} for Two</h3>
        </div>
    )
}

export default RestaurantCard