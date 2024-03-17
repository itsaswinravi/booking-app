import axios from "axios";
import { useEffect, useState } from "react";
export default function IndexPage(){
    const[places,setPlaces] = useState([]);
    
    useEffect (() => {
axios.get('/places').then(response =>{
setPlaces(response.data);
});
    },[]);
    return(
        <div className=" mt-4 grid grid-cols-2 md grid-cols-3 lg:grid-cols-6">
      {places.length > 0 && places.map(place => (
        <div>
            <div className="bg-gray-500">
            {place.photos?.[0] && (
                
                <img src={'http://localhost:4000/uploads/'+places.photos?.[0] } alt="" />
            )}

                    </div>
            
           {place.title}
        </div>
      ))}
    </div>
    );
    }