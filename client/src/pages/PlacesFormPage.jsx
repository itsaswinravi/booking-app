import PhotosUploader from "../PhotosUploader"
import Perks from "../Perks"
import { useState } from "react";
export default function PLacesFormPages(){
    const [title,setTitle]= useState('');
    const[address,setAddress]= useState('');
   const[addedPhotos,setAddedPhotos]= useState([]);
  const[photolink,SetPhotoLink] = useState('');
   const[description,setDescription] = useState('');
   const[perks,setPerks] = useState([]);
   const[extraInfo,setExtraInfo]= useState('');
   const[checkIn,setCheckIn]=useState('');
   const[checkOut,setCheckout] =useState(''); 
   const[MaxGuests,setMaxGuests]=useState(1);
//    const [redirectToPlacesList,setRedirectToPlacesList]=useState(false);
   function inputHeader(text)
   
   {

    return(
        <h2 className="text-2xl mt-4">{text}</h2>
    );
   }
   function inputDescription(text){
    return(
        <p className="text-gray-500 text-sm">{text}</p>
    );
   }
function preInput(header,description){
    return(
<>
{inputHeader(header)}
{inputDescription(description)}
</>
    );
}

async function addNewPlace(ev){
    ev.preventDefault();
    
await axios.post('/places', {title,address,addedPhotos,perks,extraInfo,checkIn,checkOut,MaxGuests
   });
 

}
    return(
        <div>
                    <form onSubmit={addNewPlace}>
                        {preInput('Title', 'Title for your place.Should be short and catchy as in advertisement')}
                        <input type="text" value={title} onChange={ ev => setTitle(ev.target.value)} placeholder="title,for exampl: My lovely apt"/> 
                        
                        
                       {preInput('Addresss', 'Address to your place')}
                       <input type="text" value={address} onChange={ ev => setAddress(ev.target.value)}placeholder="address"/>
                       
                       
                       {preInput('Photos','more=better')}
                      
                       <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos}/>
                       
                       {preInput('Description','Description of the place')}
                       
                       
                       <textarea value={description} onChange={ ev => setDescription(ev.target.value)} />
                       {preInput('Perks','Select all the perks of your place')}
                       <h2 className="text-2xl mt-4">Perks</h2>
                      
                      
                        <div  className="grid mt-2 gap-2 grid-cols-2 md:grid-cols-3  lg:grid-cols-6">
                            <Perks selected={perks} onChange={setPerks} />
                        </div>
                       
                       {preInput('Extra info','house rules,etc')}
                       
                      
                       
                       <textarea value={extraInfo} onChange={ ev => setExtraInfo(ev.target.value)} />
                       {preInput('Check in&out times','add check in and out times,remember to have some time window for cleaning the room between guests')}
                       
                       
                       <div className="grid gap-2 sm:grid-cols-3">
                        <div>
                            <h3 >Check in time</h3>
                        <input type="text"value={checkIn} onChange={ ev => setCheckIn(ev.target.value)} placeholder="14:" />
                        </div>
                        <div>
                        <h3 className="mt-2 -mb-1">Check out time</h3>
                        <input type="text"  value={checkOut} onChange={ ev => setCheckout(ev.target.value)}placeholder="11 " />
                        </div>
                        
                        <div>
                        <h3 className="mt-2 -mb-1">Max number of guests</h3>
                        <input type="number" value={MaxGuests} onChange={ ev => setMaxGuests(ev.target.value)} placeholder="1"/>
                        </div>
                       </div>
                       
                        <button className="primary my-4">Save</button>
                    
                    </form>
                </div>
    )
}