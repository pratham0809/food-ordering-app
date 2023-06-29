import RestaurantCard from "./RestaurantCard"
import data from "../utils/config"

const Body=()=>{
    return(
        <div id="body">
            <div className="search-bar">
                <h2>Search Bar</h2>
            </div>
            <div className="res-container">
                {
                    data.map((res)=>{
                        return(<RestaurantCard info={res} key={res.data.data.id}/>)
                    })
                }
            </div>
        </div>
    )
}

export default Body