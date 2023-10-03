const EventReview = require("../models/EventReview");

module.exports = {
    findAll: (req, res)=>{
        EventReview.find()
            .then(allReviews=> res.json(allReviews))
            .catch( err => res.json(err))
    },

    findOne: (req, res)=>{
        EventReview.findById(req.params.id)
            .then( oneReview => res.json(oneReview))
            .catch(err=>res.json(err))
    },

    create: (req,res)=>{
        EventReview.create(req.body)
            .then (newReview =>res.json(newReview))
            .catch(err=>res.json(err))
    },

    update: (req,res)=>{
        EventReview.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then( updatedReview=>res.json(updatedReview))
            .catch(err=>res.json(err))
    },

    delete: (req,res)=>{
        EventReview.findByIdAndDelete(req.params.id)
        .then(deletedReview =>res.json(deletedReview))
        .catch(err=>res.json(err))
    }
}