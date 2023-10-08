import React, {useEffect,useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const Update = (props)=>{
    const{id} = useParams();
    const [artist, setArtist]=useState("");
    const [venue, setVenue]=useState("");
    const [date, setDate]=useState("");
    const [genre, setGenre]=useState("");
    const [rating, setRating]=useState("");
    const [notes, setNotes]=useState("");

    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:8000/eventreviews/' + id)
            .then(res=>{
                setArtist(res.data.artist);
                setVenue(res.data.venue);
                setDate(res.data.date);
                setGenre(res.data.genre);
                setRating(res.data.rating);
                setNotes(res.data.notes);
            })
            .catch(err=>console.log(err))
    },[])

    const updateReview =(e)=>{
        e.preventDefault();



        axios.patch('http://localhost:8000/eventreviews/' + id, {
            artist,
            venue,
            date,
            genre,
            rating,
            notes
        })

            .then(res=>{
                console.log(res);
                navigate('/reviews');
            })
            .catch(err=> {
                // console.log(err.response.data);
                console.log("error here", err);
                const errArray =[]
                for (const key of Object.keys(err.response.data.errors)){
                    errArray.push(err.response.data.errors[key].message)
                    }
                    setErrors(errArray);
            })
    }

    return(
        <div>
            <h1>Update Review</h1>
            {
                errors.map(err=>{
                    return(
                        <div style={{color:"red"}}>
                            {
                                errors.map((err, index)=>{
                                    return (
                                        <p key={index}>{err}</p>
                                    )
                                })
                            }
                        </div>  
                    )
                }
                )
            }
            <form onSubmit={updateReview}>
                <p>
                    <label>Artist</label><br/>
                    <input type="text"
                    name='artist'
                    value={artist}
                    onChange={(e)=>{setArtist(e.target.value)}}/>
                </p>
                <p>
                    <label>Venue</label><br/>
                    <input type="text" 
                    name='venue'
                    value={venue}
                    onChange={(e)=>{setVenue(e.target.value)}}/>
                </p>
                <p>
                    <label>Date</label><br/>
                    <input type="date"
                    name='date'
                    value={date}
                    onChange={(e)=>{setDate(e.target.value)}}/>
                </p>
                <p>
                    <label>Genre</label><br/>
                    <select name='genre'
                    value={genre}
                    onChange={(e)=>{setGenre(e.target.value)}}>
                    <option value="Music">Music</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Theater">Theater</option></select>
                </p>
                <p>
                    <label>Rating</label><br/>
                    <select name='rating'
                    value={rating}
                    onChange={(e)=>{setRating(e.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </p>
                <p>
                    <label>Notes</label><br/>
                    <input type="text"
                    name='notes'
                    value={notes}
                    onChange={(e)=>{setNotes(e.target.value)}}/>
                </p>
                <input type='submit'/>
            </form>
        </div>
    )
}

export default Update;