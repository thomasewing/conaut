import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const NewReviewForm=({allReviews, setAllReviews})=>{
    const [artist, setArtist]= useState("");
    const [venue, setVenue]=useState("");
    const [date, setDate]=useState("");
    const [genre, setGenre]=useState(["music","comedy","theater"]);
    const [rating, setRating]=useState(["1","2","3","4","5"]);
    const [notes, setNotes]=useState("");
    const navigate = useNavigate();
    const [errors, setErrors]=useState([])


    const newReviewHandler = e =>{
        e.preventDefault();
        const newReview = {
            artist,
            venue,
            date,
            genre,
            rating,
            notes,
        }
        axios.post("http://localhost:8000/eventreviews", newReview)
            .then(res=>{
                console.log(res);
                if (res && res.data){

                
                setAllReviews([...allReviews, res.data]);
                navigate("/reviews/")
                } else {
                    console.error("Unexpected response from the server:", res);
                }
            })
            .catch(err=>{
                console.error("An error occurred while making the POST request:", err)
                console.log(err.response.data);
                const errArray = []
                for (const key of Object.keys(err.response.data.errors)){
                    errArray.push(err.response.data.errors[key].message)
                }
                setErrors(errArray);
            });
    }

    return(
        <form onSubmit={newReviewHandler}>
            {/* <h2>{artist} at {venue} on {date}</h2> */}
            <h2>Enter New Review Below:</h2>
            <p><Link to="/reviews/">Home</Link></p>
            <div style={{color: "red"}}>
                {
                    errors.map((err, idx)=>{
                        return (
                            <p key={idx}>{err}</p>
                        )
                    })
                }
            </div>
            <p>
                <label>Artist</label><br/>
                <input type="text" onChange={(e)=>setArtist(e.target.value)}/>
            </p>
            <p>
                <label>Venue</label><br/>
                <input type="text" onChange={(e)=>setVenue(e.target.value)}/>
            </p>
            <p>
                <label>Date</label><br/>
                <input type="date" id="datebox" onChange={(e)=>setDate(e.target.value)}/>
            </p>
            <select onChange={e=>setGenre(e.target.value)}>
                <option selected disabled value="">Genre</option>
                <option value="Music">Music</option>
                <option value="Comedy">Comedy</option>
                <option value="Theater">Theater</option>
            </select>
            <select onChange={e=>setRating(e.target.value)}>
                <option selected disabled value="">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <p>
                <label>Notes</label><br/>
                <input type="text" onChange={(e)=>setNotes(e.target.value)}/>
            </p>
            <input type='submit'/>
        </form>
    );
}
export default NewReviewForm;