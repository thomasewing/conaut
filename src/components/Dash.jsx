import React from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Dash=({allReviews, setAllReviews})=>{

    const deleteOrderHandler = e =>{
        const id = e.target.id;
        axios.delete("http://localhost:8000/eventreviews/" + id)
            .then(res => {
                const filteredReviews = allReviews.filter(review => review._id !== id);
                setAllReviews (filteredReviews);
            })
    }

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


    return(
        <>
            <h1>Reviews</h1>
            {/* <button>Log Out</button> */}
            <table>
                <tbody>
                <tr>
                    <th>Detail</th>
                    <th>Artist</th>
                    <th>Venue</th>
                    <th>Date</th>
                    <th>Genre</th>
                    <th>Rating</th>
                    <th>Actions</th>
                </tr>
                {
                    allReviews.map( review => {
                        return(
                            <tr key={review._id}>
                                <td><Link to ={`/reviews/${review._id}`}><button>View</button></Link></td>
                                <td>{review.artist}</td>
                                <td>{review.venue}</td>
                                <td>{review.date}</td>
                                <td>{review.genre}</td>
                                <td>{review.rating}</td>
                                <td><button onClick={deleteOrderHandler} id={review._id}>Remove</button></td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Link to="/reviews/new"><button>Add New Review</button></Link>
        
        </>
    );
}
export default Dash;