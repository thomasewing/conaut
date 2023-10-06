import React, {useEffect, useState} from 'react';
import Dash from "../components/Dash";
import {Routes, Route} from "react-router-dom";
import NewReviewForm from "../components/NewReviewForm";
import axios from "axios";

const Home=(props)=>{
    const [allReviews, setAllReviews] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/eventreviews")
            .then(res => setAllReviews(res.data))
            .catch(err=>console.log(err))
    },[])

    return(
        <Routes>
            <Route path={"/"} element={<Dash allReviews={allReviews} setAllReviews={setAllReviews}/>} />
            <Route path={"/new"} element={<NewReviewForm/>}/>
        </Routes>
    );
}
export default Home;