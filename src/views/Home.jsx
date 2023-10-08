import React, {useEffect, useState} from 'react';
import Dash from "../components/Dash";
import {Routes, Route} from "react-router-dom";
import NewReviewForm from "../components/NewReviewForm";
import axios from "axios";
import OneReview from '../views/OneReview';
import Edit from '../views/Edit';

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
            <Route path={"/new"} element={<NewReviewForm allReviews={allReviews} setAllReviews={setAllReviews}/>}/>
            <Route path="/:id" element={<OneReview allReviews={allReviews} setAllReviews={setAllReviews}/>}/>
            <Route path="/edit/:id" element={<Edit allReviews={allReviews} setAllReviews={setAllReviews}/>}/>
        </Routes>
    );
}
export default Home;