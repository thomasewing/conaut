const mongoose = require("mongoose");

const EventReviewSchema = new mongoose.Schema({
    artist:{
        type: String,
        required: [true, "Artist is required"]
    },
    venue:{
        type: String,
        required: [true, "Venue is required"]
    },
    date:{
        type: Date,
        required: [true, "Date is required"]
    },
    genre:{
        type: String,
        required: [true, "Genre is required"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required"]
    },
    notes: {
        type: String,
        maxLength: [50, "Notes cannot be over 50 characters"]
    }
}, {timestamps: true})

module.exports = mongoose.model("EventReview", EventReviewSchema)