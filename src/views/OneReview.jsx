import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {Link, useNavigate, useParams} from 'react-router-dom';

const OneReview = (props) => {
    const [review, setReview] = useState({})
    const navigate = useNavigate();

    const editReview = () =>{
        axios.patch('http://localhost:8000/eventreviews/' + id)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                navigate(`/reviews/edit/${res.data._id}`);
            })

            .catch((err)=>{
                console.log(err)
            });
    };

    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/eventreviews/" + id)
        .then(res=>{
            console.log(res.data);
            setReview(res.data);
        })
        .catch(err=>console.log(err));
    },[])

    return(
        <div>
            <p><Link to="/reviews/"><button>Home</button></Link></p>
            <p>Artist: {review.artist}</p>
            <p>Venue: {review.venue}</p>
            <p>Date: {review.date}</p>
            <p>Genre: {review.genre}</p>
            <p>Rating: {review.rating}</p>
            <p>Notes: {review.notes}</p>

            <button onClick={(e)=>{editReview(review._id)}}>Edit Review</button>
        </div>
    )
}

export default OneReview;