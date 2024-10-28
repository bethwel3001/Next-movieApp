import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    genre: [String],
    rating: Number,
    releaseDate: Date,
    imageUrl: String,
    videoUrl: String,
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
